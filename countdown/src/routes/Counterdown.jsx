import useCountdown from "../hooks/useCountdown";
import { useContext } from "react";
import { CounterContext } from "../context/counterdownContext";
import { Navigate } from "react-router-dom";

import Title from "../components/Title";
import Counter from "../components/Counter";

const Counterdown = () => {
  const { event } = useContext(CounterContext);

  if (!event) return <Navigate to={"/"} />;

  const eventTitle = event.title;
  const eventColor = event.color;

  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <>
      <Title title={eventTitle} />
      <div className="countdown-container">
        <Counter number={day} title="Dias" />
        <Counter number={hour} title="Horas" />
        <Counter number={minute} title="Minutos" />
        <Counter number={second} title="Segundos" />
      </div>
    </>
  );
};

export default Counterdown;
