import { Button } from "@mui/material";
import { Wrapper } from "./TimerOptions.styles";
import { useContext } from "react";
import { TimerContext } from "../../App";
import Timer from "../Timer/Timer";

const TimerOptions = () => {
  const { allTime, setAllTime } = useContext(TimerContext);
  const changeBackground = (color) => {
    const root = document.getElementById("root");
    root.style.background = color;
  };

  const handlePomodoro = () => {
    changeBackground("#ef5350");
    setAllTime(25);
  };

  const handleShortBreak = () => {
    changeBackground("#26a69a");
    setAllTime(5);
  };

  const handleLongBreak = () => {
    changeBackground("#42a5f5");
    setAllTime(15);
  };

  return (
    <Wrapper>
      <Button varient="text" onClick={handlePomodoro} sx={{ color: "white" }}>
        Pomodoro
      </Button>
      <Button varient="text" onClick={handleShortBreak} sx={{ color: "white" }}>
        Short Break
      </Button>
      <Button varient="text" onClick={handleLongBreak} sx={{ color: "white" }}>
        Long Break
      </Button>
      <Timer time={allTime} />
    </Wrapper>
  );
};

export default TimerOptions;
