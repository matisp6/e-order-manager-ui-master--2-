const express = require('express');
const cors = require('cors');
const stripePackage = require('stripe');
const stripe = stripePackage('sk_test_51PAyfv009nre7oK1mOIhWj14GG10gnLGcZds1YAa7lpippvFO7BeMIgrHkVPeZxDwBrpP2yrmmzzMsqGH3DgCuOq00s8Uzd4PC');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// Obsługa sukcesu płatności
app.get('/success', (req, res) => {
    res.send('Płatność zakończona sukcesem! Możesz zamknąć tę kartę.');
});

// Obsługa anulowania płatności
app.get('/cancel', (req, res) => {
    res.send('Płatność została anulowana. Wróć do sklepu, aby kontynuować zakupy.');
});

app.post("/checkout", async (req, res) => { // Usunięcie anotacji typów
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push({
            price: item.id,
            quantity: item.quantity
        });
    });

    try {
            const protocol = req.headers['x-forwarded-proto'] || req.protocol; // W przypadku użycia przez proxy
            const host = req.headers['x-forwarded-host'] || req.headers.host;
            const success_url = `${protocol}://${host}/success`;
            const cancel_url = `${protocol}://${host}/cancel`;
            console.log("Success URL:", success_url);
            console.log("Cancel URL:", cancel_url);    
            const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url,
            cancel_url
        });

        res.send(JSON.stringify({ url: session.url }));
    } catch (error) {
        console.error("Error creating Stripe checkout session:", error);
        res.status(500).send("Error creating checkout session");
    }
});

app.listen(9000, () => console.log("Listening on port 9000"));
