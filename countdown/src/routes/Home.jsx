import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CounterContext } from "../context/counterdownContext";

import "./Home.css";

const Home = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");

  const { setEvent } = useContext(CounterContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventObj = {
      title,
      date,
      image,
      color,
    };
    setEvent(eventObj);
    navigate("/counterdown")
  };

  return (
    <div className="home">
      <h1>Crie sua contagem regressiva</h1>
      <form className="counterdown-form" onSubmit={(e) => handleSubmit(e)}>
        <label>
          <span>Titulo:</span>
          <input
            type="text"
            placeholder="Insira seu título"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Data do evento:</span>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            placeholder="Insira a URL da sua imagem"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Cor do tema:</span>
          <input
            type="color"
            placeholder="Escolha a cor do tema"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Home;
