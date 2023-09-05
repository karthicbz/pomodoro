import { Button } from "@mui/material";
import { Wrapper } from "./TimerOptions.styles";

const TimerOptions = () => {
  const changeBackground = (color) => {
    const root = document.getElementById("root");
    root.style.background = color;
  };

  const handlePomodoro = () => changeBackground("#ef5350");

  const handleShortBreak = () => changeBackground("#26a69a");

  const handleLongBreak = () => changeBackground("#42a5f5");

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
    </Wrapper>
  );
};

export default TimerOptions;
