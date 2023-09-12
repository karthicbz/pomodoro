import styled from "styled-components";
import Button from "@mui/material/Button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;

  & > button {
    font-size: 1.5rem;
  }
`;

export const TimeWrapper = styled.p`
  font-size: 8rem;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
`;
