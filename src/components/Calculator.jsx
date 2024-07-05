import "../shared/container.css";
import CalculatorImage from "/images/icon-calculator.svg";
import { useState } from "react";

export default function Calculator(props) {
  const [count, setCount] = useState(10);

  function handleChange() {
    setCount((prevCount) => (prevCount > 0 ? count - 1 : 0));
  }

  return (
    <div className="box blue">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h1>{count}</h1>
      <button onClick={handleChange}>Click</button>
      <img src={CalculatorImage} alt="calculator image" />
    </div>
  );
}
