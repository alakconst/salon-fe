// salonsData.ts

export interface Salon {
  id: number;
  name: string;
  address: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const salonsData: Salon[] = [
  {
    id: 1,
    name: "Salon A",
    address: "123 Main St, City A",
    price: 50,
    rating: 4.5,
    imageUrl: "/Image/salon1.png", // Placeholder URL
  },
  {
    id: 2,
    name: "Salon B",
    address: "456 Elm St, City B",
    price: 65,
    rating: 4.2,
    imageUrl: "/Image/salon2.png", // Placeholder URL
  },
  {
    id: 3,
    name: "Salon C",
    address: "789 Oak St, City C",
    price: 80,
    rating: 4.8,
    imageUrl: "/Image/salon3.png", // Placeholder URL
  },
  {
    id: 4,
    name: "Salon D",
    address: "101 Maple St, City D",
    price: 55,
    rating: 4.0,
    imageUrl: "/Image/salon4.png", // Placeholder URL
  },
  {
    id: 5,
    name: "Salon E",
    address: "202 Pine St, City E",
    price: 70,
    rating: 4.7,
    imageUrl: "/Image/salon5.png", // Placeholder URL
  },
  {
    id: 6,
    name: "Salon F",
    address: "303 Cedar St, City F",
    price: 45,
    rating: 4.6,
    imageUrl: "/Image/salon6.png", // Placeholder URL
  },
  {
    id: 7,
    name: "Salon G",
    address: "404 Birch St, City G",
    price: 90,
    rating: 4.9,
    imageUrl: "/Image/salon7.png", // Placeholder URL
  },
  {
    id: 8,
    name: "Salon H",
    address: "505 Walnut St, City H",
    price: 75,
    rating: 4.3,
    imageUrl: "/Image/salon8.png", // Placeholder URL
  },
  // Add more salon entries here
];

export default salonsData;
