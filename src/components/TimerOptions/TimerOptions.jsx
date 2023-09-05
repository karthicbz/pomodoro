import { Button } from "@mui/material";
import { Wrapper } from "./TimerOptions.styles";

const TimerOptions = () => {
  return (
    <Wrapper>
      <Button varient="text">Pomodoro</Button>
      <Button varient="text">Short Break</Button>
      <Button varient="text">Long Break</Button>
    </Wrapper>
  );
};

export default TimerOptions;
