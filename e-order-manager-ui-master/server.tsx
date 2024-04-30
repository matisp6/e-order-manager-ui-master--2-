// Dodaj tę definicję na początku pliku
interface LineItem {
    price: string;
    quantity: number;
}

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PAyfv009nre7oK1mOIhWj14GG10gnLGcZds1YAa7lpippvFO7BeMIgrHkVPeZxDwBrpP2yrmmzzMsqGH3DgCuOq00s8Uzd4PC');
const app = express();
app.use(cors());
app.use(express.json());
app.post("/checkout", async (req, res) => {
    const items = req.body.items;
    let lineItems: LineItem[] = [];
    items.forEach((item) => {
        lineItems.push({
            price: item.id,
            quantity: item.quantity
        });
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:8000/success",
        cancel_url: "http://localhost:8000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(9000, () => console.log("Listening on port 9000"));
