import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #535353;
  padding-bottom: 10px;

  & > h2 {
    color: white;
  }
`;

export const ButtonWrapper = styled(Wrapper)`
  margin-left: auto;
  display: flex;
  gap: 10px;
  border-bottom: none;

  & > button {
    color: white;
    border-color: white;
  }

  & > button:hover {
    border-color: white;
  }
`;
