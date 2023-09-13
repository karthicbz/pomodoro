import { useEffect, useState } from "react";
import { useContext } from "react";
import { TimerContext } from "../../App";
import { TimeWrapper, Wrapper } from "./Timer.styles";
import { Button } from "@mui/material";

function Timer({ time, startTimer, isTimerStart }) {
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

  return (
    <Wrapper>
      <TimeWrapper>{currentTime}</TimeWrapper>
    </Wrapper>
  );
}

export default Timer;
