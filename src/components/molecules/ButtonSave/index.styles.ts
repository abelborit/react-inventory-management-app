import styled from "styled-components";

export const Container = styled.a<{ $bgcolor: string; sidebarOpen: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  padding: ${({ sidebarOpen }) => (sidebarOpen ? "0.6em 1.3em" : "0.3em")};
  font-weight: 900;
  font-size: 18px;
  border: 3px solid black;
  border-radius: 0.4em;
  background-color: ${({ $bgcolor }) => $bgcolor};
  box-shadow: 0.1em 0.1em #000;
  color: #000;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em #000;
  }

  &:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em #000;
  }
`;
