import React, { useState, useEffect } from "react";
import "./TestComponent.css";

type TestComponentProps = {
  name: string;
};

export default function TestComponent({ name }: TestComponentProps) {
  const [age, setAge] = useState<number>(32);

  useEffect(() => {
    // console.log("Component was created");
    console.log("Age has been updated to: " + age);
  }, [age]);

  return (
    <div className="TestComponent">
      Olá, {name}, {age}
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
