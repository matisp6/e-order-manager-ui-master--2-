const exampleData = [
  {
    id: "price_1PAzXM009nre7oK1gNnpBKBn",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/test-2bed7.appspot.com/o/test%2Fimage1.webp?alt=media&token=f0d32385-8b9d-4629-8ebd-4a0c5a36d3f9",
    title: "Veniam Quis Nostrud",
    author: "Lorem Ipsum",
    rating: 4.5,
    hasVideo: true,
    tag: "Top 20",
    price: 13.99
  },
  {
    id:"price_1PAyx0009nre7oK1Cd3YBY15",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/test-2bed7.appspot.com/o/test%2Fimage2.webp?alt=media&token=645462bc-9982-4955-84fe-5e4a30e6034b",
    title: "Enim Ad Minim",
    author: "Dolor Sit",
    rating: 5,
    hasVideo: false,
    tag: "Top 20",
    price: 8.99
  },
  {
    id: "price_1PAzYy009nre7oK1ymhPH1lg",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/test-2bed7.appspot.com/o/test%2Fimage3.webp?alt=media&token=46e4b6d2-66f5-412a-b7bf-fd57190c3b7f",
    title: "Magna Aliqua Ut",
    author: "Amet Consectetur",
    rating: 3,
    hasVideo: true,
    tag: "Top 20",
    price: 19.99
  },
  {
    id: "price_1PAzaO009nre7oK1EQYf32LR",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/test-2bed7.appspot.com/o/test%2Fimage4.webp?alt=media&token=c1100445-feef-4419-b6a7-5a7ed019e9c4",
    title: "Ut Labore Et Dolore",
    author: "Adipiscing Elit",
    rating: 3,
    hasVideo: true,
    tag: "Top 20",
    price: 39.99
  },
  {
    id: "price_1PB03b009nre7oK19oOuBG84",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/test-2bed7.appspot.com/o/test%2Fimage1.webp?alt=media&token=f0d32385-8b9d-4629-8ebd-4a0c5a36d3f9",
    title: "Sed ut perspiciatis",
    author: "Unde Omnis",
    rating: 4.6,
    hasVideo: true,
    tag: "Top 20",
    price: 14.99
  },
  {
    id: "price_1PB09r009nre7oK156TYQ25q",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/test-2bed7.appspot.com/o/test%2Fimage2.webp?alt=media&token=645462bc-9982-4955-84fe-5e4a30e6034b",
    title: "At vero eos",
    author: "Optio Cumque",
    rating: 5,
    hasVideo: false,
    tag: "Top 20",
    price: 26.99
  },
  {
    id: "price_1PB0Ar009nre7oK1zgxcfgoS",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/test-2bed7.appspot.com/o/test%2Fimage3.webp?alt=media&token=46e4b6d2-66f5-412a-b7bf-fd57190c3b7f",
    title: "Molestias excepturi sint",
    author: "Nihil Impedit",
    rating: 3,
    hasVideo: true,
    tag: "Top 20",
    price: 21.99
  },
  {
    id: "price_1PB0Bb009nre7oK1BcMzUjDG",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/test-2bed7.appspot.com/o/test%2Fimage4.webp?alt=media&token=c1100445-feef-4419-b6a7-5a7ed019e9c4",
    title: "Temporibus autem",
    author: "Maiores Alias",
    rating: 3,
    hasVideo: true,
    tag: "Top 20",
    price: 84.99
  },
  {
    id: "price_1PB0CL009nre7oK1zYBD4Jxo",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/test-2bed7.appspot.com/o/test%2Fimage1.webp?alt=media&token=f0d32385-8b9d-4629-8ebd-4a0c5a36d3f9",
    title: "Consequatur aut",
    author: "Perferendis Doloribus",
    rating: 4.5,
    hasVideo: true,
    tag: "Top 20",
    price: 17.99
  },
  {
    id: "price_1PB0D0009nre7oK1ynCLpcqL",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/test-2bed7.appspot.com/o/test%2Fimage2.webp?alt=media&token=645462bc-9982-4955-84fe-5e4a30e6034b",
    title: "Expedita distinctio",
    author: "Perferendis Doloribus",
    rating: 5,
    hasVideo: false,
    tag: "Top 20",
    price: 65.99
  },
  {
    id: "price_1PB0Et009nre7oK1FGxf08ab",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/test-2bed7.appspot.com/o/test%2Fimage3.webp?alt=media&token=46e4b6d2-66f5-412a-b7bf-fd57190c3b7f",
    title: "Eiusmod tempor",
    author: "Minim Veniam",
    rating: 3,
    hasVideo: true,
    tag: "Top 20",
    price: 79.99
  },
  {
    id: "price_1PB0Fj009nre7oK1vrywxkzT",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/test-2bed7.appspot.com/o/test%2Fimage4.webp?alt=media&token=c1100445-feef-4419-b6a7-5a7ed019e9c4",
    title: "Eos qui ratione",
    author: "Voluptatem Sequi ",
    rating: 3,
    hasVideo: true,
    tag: "Top 20",
    price: 113.99
  },
];

export default exampleData;
