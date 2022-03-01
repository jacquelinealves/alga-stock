import Header from "../Header";
import Container from "../../shared/Container";
import Products from "../../shared/Table/table.mock";
import Table, { TableHeader } from "../../shared/Table";
import ProductForm from "../Products/ProductForm";

const headers: TableHeader[] = [
  { key: "id", value: "#" },
  { key: "name", value: "Product" },
  { key: "price", value: "Price", right: true },
  { key: "stock", value: "Available Stock", right: true },
  { key: "actions", value: "Actions" },
];

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />

      <Container>
        <Table headers={headers} data={Products} />

        <ProductForm />
      </Container>
    </div>
  );
}

export default App;
