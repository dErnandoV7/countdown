import React, { useContext } from "react";
import { CounterContext } from "../context/counterdownContext";

import "./Title.css";

const Title = ({ title }) => {
  const { event } = useContext(CounterContext);
  const color = event.color
  
  return <h1 style={{ color: color }}>{title}</h1>;
};

export default Title;
