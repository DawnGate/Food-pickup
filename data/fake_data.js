const localRestaurants = [
  {
    name: "San Diego",
    image_url:
      "https://essencedining.com/wp-content/uploads/2021/03/8.-Restaurant_1.jpg",
    categories: ["Cafe", "Bar"],
    price: "10$",
    reviews: 1234,
    rating: 4.5,
    type: ["Delivery"],
  },
  {
    name: "New York",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg",
    categories: ["Cafe"],
    price: "20$",
    reviews: 1234,
    rating: 4,
    type: ["Pickup"],
  },
  {
    name: "San Diego",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzz3edoMmM953SRVLlh3sFF1ncft5kVphMNw&usqp=CAU",
    categories: ["Bakery", "Delicious"],
    price: "30$",
    reviews: 1234,
    rating: 3.1,
    type: ["Delivery", "Pickup"],
  },
  {
    name: "San Diego",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzz3edoMmM953SRVLlh3sFF1ncft5kVphMNw&usqp=CAU",
    categories: ["Unknown", "Green"],
    price: "40$",
    reviews: 1234,
    rating: 3.1,
    type: ["Delivery", "Pickup"],
  },
];
const demoRestaurant = {
  name: "Demo Restaurant",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg",
  prices: "12$",
  reviews: 1020,
  rating: 4.5,
  catergories: [
    { title: "Coffee" },
    { title: "Baverage" },
    { title: "Delicious" },
  ],
};

export { localRestaurants, demoRestaurant };
