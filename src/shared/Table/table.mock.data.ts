export interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  createdAt?: string;
  updatedAt?: string;
}

const Products: Product[] = [
  {
    _id: "1",
    name: "Cookie",
    price: 1.0,
    stock: 20,
  },
  {
    _id: "2",
    name: "Milk 1L",
    price: 0.99,
    stock: 65,
  },
  {
    _id: "3",
    name: "Detergent",
    price: 0.75,
    stock: 54,
  },
  {
    _id: "4",
    name: "Water 1L",
    price: 1.5,
    stock: 150,
  },
  {
    _id: "5",
    name: "Brownie",
    price: 1.25,
    stock: 10,
  },
  {
    _id: "6",
    name: "Rice",
    price: 2.5,
    stock: 80,
  },
];

export default Products;