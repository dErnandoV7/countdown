import "./App.css";

import { Outlet } from "react-router-dom";
import CarYellow from "./assets/car.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${CarYellow})` }}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
