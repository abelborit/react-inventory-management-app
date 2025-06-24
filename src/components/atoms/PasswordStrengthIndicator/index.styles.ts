import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  margin-top: 1rem;
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: -0.25rem;
`;

export const ListItem = styled.li<{ passed: boolean }>`
  display: flex;
  align-items: center;
  color: ${(props) => (props.passed ? "#38a169" : "#a0aec0")};
`;

export const Symbol = styled.span`
  margin-right: 0.25rem;
`;
