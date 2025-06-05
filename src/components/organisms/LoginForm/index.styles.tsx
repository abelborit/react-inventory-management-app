import styled from "styled-components";
import { device } from "../../../styles/breakpoints";
import { darkTheme } from "../../../styles/themes";

export const LoginContainer = styled.div`
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 2fr;
  }

  .contentLogo {
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    align-items: center;
    font-weight: 700;
    color: ${darkTheme.text};

    img {
      width: 50px;
      margin-right: 4px;
    }
  }

  .bannerlateral {
    background-color: #fc6b32;
    height: 100vh;
    align-items: center;
    justify-content: center;

    img {
      width: 80%;
    }
  }

  .toggleTheme {
    z-index: 9999;
    position: absolute;
    bottom: 15px;
    left: 15px;
  }

  .contentCard {
    grid-column: 1;
    background-color: ${({ theme }) => theme.bgtotal};
    color: ${(props) => props.theme.text};
    z-index: 100;
    position: relative;
    gap: 30px;
    display: flex;
    padding: 20px;
    box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.35);
    justify-content: center;
    width: 100vw;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.tablet} {
      grid-column: 2;
      width: 100%;
      height: 100%;
    }

    .card {
      width: 100%;

      @media ${device.laptop} {
        width: 50%;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

export const SubTitle = styled.h3`
  color: #fc6c32;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: -8px;
  margin-bottom: 30px;
`;

export const HelpText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;

  span {
    text-align: left;
    width: 300px;
    position: absolute;
    top: 15px;
    right: 15px;
    color: #8d8d8d;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ContainerBtn = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  button {
    font-weight: 700;
    font-size: 16px;

    &:disabled {
      background-color: #888;
      box-shadow: 0.1em 0.1em #ccc;
      border: 3px solid #ccc;
      cursor: not-allowed;
    }
  }
`;
