import { useState } from "react";

const useCountdown = (date) => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [hour, setHour] = useState("00");
  const [day, setDay] = useState("00");

  const countdown = () => {
    const countData = new Date(date).getTime();
    const now = new Date().getTime();

    const interval = countData - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayNumber = String(Math.floor(interval / day)).padStart(2, '0')
    const hourNumber = String(Math.floor((interval % day) / hour)).padStart(2, '0')
    const minuteNumber = String(Math.floor((interval % hour) / minute)).padStart(2, '0')
    const secondNumber = String(Math.floor((interval % minute) / second)).padStart(2, '0')

    setDay(dayNumber);
    setHour(hourNumber);
    setMinute(minuteNumber);
    setSecond(secondNumber);
  };

  setInterval(() => {
    countdown();
  }, 1000);

  return [day, hour, minute, second];
};

export default useCountdown;
