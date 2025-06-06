import styled from "styled-components";

export const Container = styled.div<{
  $isDark: boolean;
}>`
  .toggle {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.1);
    line-height: 1;
    margin-left: 7px;
    margin-top: 15px;
    background-color: ${({ $isDark }) => ($isDark ? "#333" : "#fff")};
  }

  .input {
    display: none;
  }

  .icon {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    transition: transform 500ms;
  }

  .icon--moon {
    transition-delay: 200ms;
    text-align: center;
  }

  .icon--sun {
    transform: scale(0);
  }

  #switch:checked + .icon--moon {
    transform: rotate(360deg) scale(0);
  }

  #switch:checked ~ .icon--sun {
    transition-delay: 200ms;
    text-align: center;
    transform: scale(1) rotate(360deg);
  }

  .w-8 {
    width: 2rem /* 32px */;
  }
`;
