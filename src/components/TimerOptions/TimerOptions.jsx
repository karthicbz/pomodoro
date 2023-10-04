import { Button } from "@mui/material";
import { Wrapper } from "./TimerOptions.styles";
import { useContext, useState } from "react";
import { TimerContext } from "../../App";
import Timer from "../Timer/Timer";
import { TimeWrapper } from "../Timer/Timer.styles";

const TimerOptions = () => {
  const { allTime, setAllTime } = useContext(TimerContext);
  const [dummyTime, setDummyTime] = useState("25:00"); //when default value change change this value
  const [timerStart, setTimerStart] = useState(false);

  function startTimer() {
    setTimerStart(true);
  }

  const changeBackground = (color) => {
    const root = document.getElementById("root");
    root.style.background = color;
  };

  const handlePomodoro = (e) => {
    resetButtonBackground();
    setTimerStart(false);
    changeBackground("rgb(239, 83, 80)");
    setDummyTime("25:00");
    setAllTime(25);
    e.target.style.background = "rgba(0, 0, 0, 0.1)";
  };

  const handleShortBreak = (e) => {
    resetButtonBackground();
    setTimerStart(false);
    changeBackground("#26a69a");
    setDummyTime("05:00");
    setAllTime(5);
    e.target.style.background = "rgba(0, 0, 0, 0.1)";
  };

  const handleLongBreak = (e) => {
    resetButtonBackground();
    setTimerStart(false);
    changeBackground("#42a5f5");
    setDummyTime("15:00");
    setAllTime(15);
    e.target.style.background = "rgba(0, 0, 0, 0.1)";
  };

  function resetButtonBackground() {
    const allButtons = document.querySelectorAll(".options>button");
    allButtons.forEach((button) => {
      button.style.background = "unset";
    });
  }

  return (
    <Wrapper className="options">
      <Button
        varient="text"
        onClick={handlePomodoro}
        sx={{ color: "white", background: "rgba(0, 0, 0, 0.1)" }}
      >
        Pomodoro
      </Button>
      <Button varient="text" onClick={handleShortBreak} sx={{ color: "white" }}>
        Short Break
      </Button>
      <Button varient="text" onClick={handleLongBreak} sx={{ color: "white" }}>
        Long Break
      </Button>
      <div className="timer">
        {timerStart ? (
          <Timer
            time={allTime - 1}
            startTimer={startTimer}
            isTimerStart={timerStart}
          />
        ) : (
          <TimeWrapper>{dummyTime}</TimeWrapper>
        )}
        <Button variant="contained" onClick={startTimer}>
          Start
        </Button>
      </div>
    </Wrapper>
  );
};

export default TimerOptions;
