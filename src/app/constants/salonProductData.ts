// SalonProducts.ts

export interface SalonProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
}

const salonProductsData: SalonProduct[] = [
  {
    id: 1,
    name: "Product A",
    description: "Description for Product A",
    price: 25,
    imageUrl: "/Image/pro1.png", // Placeholder URL //or img
    rating: 4.5,
  },
  {
    id: 2,
    name: "Product B",
    description: "Description for Product B",
    price: 35,
    imageUrl: "/Image/pro2.png", // Placeholder URL
    rating: 4.2,
  },
  {
    id: 3,
    name: "Product C",
    description: "Description for Product C",
    price: 45,
    imageUrl: "/Image/pro3.png", // Placeholder URL
    rating: 4.7,
  },
  {
    id: 4,
    name: "Product D",
    description: "Description for Product D",
    price: 15,
    imageUrl: "/Image/pro4.png", // Placeholder URL
    rating: 4.0,
  },
  {
    id: 5,
    name: "Product E",
    description: "Description for Product E",
    price: 55,
    imageUrl: "/Image/pro5.png", // Placeholder URL
    rating: 4.9,
  },
  {
    id: 6,
    name: "Product F",
    description: "Description for Product E",
    price: 55,
    imageUrl: "/Image/pro6.png", // Placeholder URL
    rating: 4.9,
  },
  {
    id: 7,
    name: "Product G",
    description: "Description for Product E",
    price: 55,
    imageUrl: "/Image/pro7.png", // Placeholder URL
    rating: 4.9,
  },
  {
    id: 8,
    name: "Product H",
    description: "Description for Product E",
    price: 55,
    imageUrl: "/Image/pro8.png", // Placeholder URL
    rating: 4.9,
  },
  // Add more salon product entries here
];

export default salonProductsData;
