import React, { useEffect, useState } from "react";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { Product } from "../../shared/Table/table.mock.data";

declare interface InitialFormState {
  _id?: string;
  name: string;
  price: string;
  stock: string;
}

export interface ProductCreator {
  name: string;
  price: number;
  stock: number;
}

declare interface ProductFormProps {
  form?: Product;
  onSubmit?: (product: ProductCreator) => void; // ProductCreator não tem ID
  onUpdate?: (product: Product) => void; // Product tem um ID por atualizar um produto já existente
}

const ProductForm: React.FC<ProductFormProps> = (props) => {
  const initialFormState: InitialFormState = props.form
    ? {
        _id: props.form._id,
        name: props.form.name,
        price: String(props.form.price),
        stock: String(props.form.stock),
      }
    : {
        name: "",
        price: "",
        stock: "",
      };

  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    setForm(initialFormState);
  }, [props.form]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target; //se refere a qual input está sendo executado
    setForm({
      ...form,
      [name]: value,
    });
  };

  const updateProduct = (product: InitialFormState) => {
    //DTO - acrônico para Data Transfer Object
    const productDto = {
      _id: String(product._id),
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock),
    };
    props.onUpdate && props.onUpdate(productDto);
  };

  const createProduct = (product: InitialFormState) => {
    //DTO - acrônico para Data Transfer Object
    const productDto = {
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock),
    };
    props.onSubmit && props.onSubmit(productDto);
  };

  const handleFormSubmit = () => {
    form._id ? updateProduct(form) : createProduct(form);
    setForm(initialFormState);
  };

  return (
    <Form title="Product Form" onSubmit={handleFormSubmit}>
      <Input
        onChange={handleInputChange}
        name="name"
        value={form.name}
        label="Name"
        placeholder="E.g.: Cookie"
        required
      />
      <Input
        onChange={handleInputChange}
        value={form.price}
        name="price"
        label="Price"
        type="number"
        step="0.01"
        min="0"
        placeholder="E.g.: 1.25"
        required
      />
      <Input
        onChange={handleInputChange}
        value={form.stock}
        name="stock"
        label="Stock"
        type="number"
        min="0"
        placeholder="E.g.: 15"
        required
      />
      <Button>{form._id ? "Update" : "Submit"}</Button>
    </Form>
  );
};

export default ProductForm;
