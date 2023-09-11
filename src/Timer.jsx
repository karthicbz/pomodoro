import { useEffect, useState } from "react";
import { useContext } from "react";
import { TimerContext } from "./App";

function Timer({ time }) {
  const { allTime } = useContext(TimerContext);
  let [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    let seconds = 60;
    const interval = setInterval(() => {
      if (seconds > 0) {
        seconds -= 1;
      } else {
        seconds = 59;
        time -= 1;
      }
      setCurrentTime(
        `${time < 10 ? "0" + time : time}:${
          seconds < 10 ? "0" + seconds : seconds
        }`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [allTime]);

  return <p>{currentTime}</p>;
}

export default Timer;
