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

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: "$14.50",
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
];

export { localRestaurants, demoRestaurant, foods };
