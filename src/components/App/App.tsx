import { useState } from "react";
import Header from "../Header";
import Container from "../../shared/Container";
import Table, { TableHeader } from "../../shared/Table";
import Products, { Product } from "../../shared/Table/table.mock";
import ProductForm, { ProductCreator } from "../Products/ProductForm";
import Swal from "sweetalert2";

const headers: TableHeader[] = [
  { key: "id", value: "#" },
  { key: "name", value: "Product" },
  { key: "price", value: "Price", right: true },
  { key: "stock", value: "Available Stock", right: true },
];

function App() {
  const [products, setProducts] = useState<any>(Products);
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(
    products[0]
  );

  const handleFormSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        ...product,
      },
    ]);
  };

  const handleProductUpdate = (newProduct: Product) => {
    setProducts(
      products.map((product: any) =>
        product.id === newProduct.id ? newProduct : product
      )
    );

    setUpdatingProduct(undefined);
  };

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product);
  };

  const handleProductDetail = (product: Product) => {
    Swal.fire(
      "Product details",
      `${product.name} costs $${product.price}. We have ${product.stock} available in stock`,
      "question"
    );
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((product: any) => product.id !== id));
  };
  const handleProductDelete = (product: Product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#09f",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, delete ${product.name}`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(product.id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="App">
      <Header title="AlgaStock" />

      <Container>
        <Table
          headers={headers}
          data={products}
          enableActions
          onDelete={handleProductDelete}
          onDetail={handleProductDetail}
          onEdit={handleProductEdit}
        />

        <ProductForm
          form={updatingProduct}
          onSubmit={handleFormSubmit}
          onUpdate={handleProductUpdate}
        />
      </Container>
    </div>
  );
}

export default App;
