import { useState } from "react";

export const NumberForm = ({
  onSubmit,
}: {
  onSubmit: (data: { number1Input: string; number2Input: string }) => void;
}) => {
  const [number1Input, setNumber1Input] = useState("0");
  const [number2Input, setNumber2Input] = useState("0");

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();

        if (Number.isNaN(+number1Input)) {
          alert(" you done fkd up bddy");
          return;
        }
        onSubmit({
          number1Input,
          number2Input,
        });

        setNumber1Input("");
        setNumber2Input("");
      }}
    >
      <input
        name="number-1"
        id=""
        onChange={(e) => {
          console.log(e.target.value);
          setNumber1Input(e.target.value);
        }}
        value={number1Input}
      />
      <input
        name="number-2"
        type="number"
        id=""
        onChange={(e) => {
          setNumber2Input(e.target.value);
        }}
        value={number2Input}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
