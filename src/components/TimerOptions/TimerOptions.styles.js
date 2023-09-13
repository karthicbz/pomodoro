import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 8px;
  & > .timer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;

    & > button {
      font-size: 1.5rem;
    }
  }
`;
