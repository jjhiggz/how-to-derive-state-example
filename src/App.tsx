import "./App.css";
import { useState } from "react";
import { NumberForm } from "./Form";

const name = "jon";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const aPlusB = number1 + number2;
  const average = (number1 + number2) / 2;

  return (
    <>
      {name}
      <h1>Number 1: {number1}</h1>
      <h1>Number 2: {number2}</h1>
      <h1>N1 + N2: {aPlusB}</h1>
      <h1>average: {average}</h1>
      <NumberForm
        onSubmit={({ number1Input, number2Input }) => {
          setNumber1(+number1Input);
          setNumber2(+number2Input);
        }}
      />
    </>
  );
}

export default App;
