import Title from '../components/Title'
import Counter from '../components/Counter'

import useCountdown from "../hooks/useCountdown";

const Counterdown = () => {
  const [day, hour, minute, second] = useCountdown("Feb 19, 2024 00:00:00");

  return (
    <>
      <Title title={"Contagem regressiva para 2025"} />
      <div className="countdown-container">
        <Counter number={day} title="Dias" />
        <Counter number={hour} title="Horas" />
        <Counter number={minute} title="Minutos" />
        <Counter number={second} title="Segundos" />
      </div>
      <p>Counterdown</p>
    </>
  );
};

export default Counterdown;
