import { Wrapper, ButtonWrapper } from "./Navbar.styles";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <Wrapper>
      <h2>Pomodoro</h2>
      <ButtonWrapper>
        <Button variant="contained">Report</Button>
        <Button variant="contained">Setting</Button>
        <Button variant="contained">Login</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Navbar;
