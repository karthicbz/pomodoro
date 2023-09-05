import { Wrapper, ButtonWrapper } from "./Navbar.styles";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <Wrapper>
      <h2>Pomodoro</h2>
      <ButtonWrapper>
        <Button variant="outlined">Report</Button>
        <Button variant="outlined">Setting</Button>
        <Button variant="outlined">Login</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Navbar;
