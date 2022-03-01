import React, { useState } from "react";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Button from "../../shared/Button";

export const initialFormState = {
  name: "",
  price: "",
  stock: "",
};

const ProductForm = () => {
  // function handleSubmitForm(data: any) {
  //   console.log(data);
  // }

  const [form, setForm] = useState<any>(initialFormState);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event.target.name //se refere a qual input está sendo executado
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <Form title="Product Form" onSubmit={() => console.log(form)}>
      <Input
        label="Name"
        placeholder="E.g.: Cookie"
        onChange={handleInputChange}
        name="name"
        required
      />
      <Input
        label="Price"
        type="number"
        step="0.01"
        min="0"
        placeholder="E.g.: 1.25"
        onChange={handleInputChange}
        name="price"
        required
      />
      <Input
        label="Stock"
        type="number"
        min="0"
        placeholder="E.g.: 15"
        onChange={handleInputChange}
        name="stock"
        required
      />
      <Button>Submit</Button>
    </Form>
  );
};

export default ProductForm;
