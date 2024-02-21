import "./App.css";

import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { CounterContext } from "./context/counterdownContext";

import CarYellow from "./assets/car.jpg";

function App() {
  const { event } = useContext(CounterContext);

  let img = null;

  if (event) {
    img = event.image;
  }

  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${img ? img : CarYellow})` }}
    >
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
