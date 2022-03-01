export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const Products: Product[] = [
  {
    id: 1,
    name: "Cookie",
    price: 1.0,
    stock: 20,
  },
  {
    id: 2,
    name: "Milk 1L",
    price: 0.99,
    stock: 65,
  },
  {
    id: 3,
    name: "Detergent",
    price: 0.75,
    stock: 54,
  },
  {
    id: 4,
    name: "Water",
    price: 1.5,
    stock: 150,
  },
  {
    id: 5,
    name: "Brownie",
    price: 1.25,
    stock: 10,
  },
  {
    id: 6,
    name: "Rice",
    price: 2.5,
    stock: 80,
  },
];

export default Products;
