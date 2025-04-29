import styled from "styled-components";

export const Container = styled.div`
  /* background-color: ${(props) => props.theme.bgtotal}; */
  background-color: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
`;
