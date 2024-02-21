import React, { useContext } from "react";
import { CounterContext } from "../context/counterdownContext";

import "./Counter.css";

const Counter = ({ title, number }) => {
  const { event } = useContext(CounterContext);
  const color = event.color;

  return (
    <div className="counter" >
      <p className="counter-number" style={{background: color}}>{number}</p>
      <h3 className="counter-text">{title}</h3>
    </div>
  );
};

export default Counter;
