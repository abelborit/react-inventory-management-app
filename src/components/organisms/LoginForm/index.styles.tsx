import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Container = styled.div<{ $isDark: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.35);
  /* background-color: ${({ theme }) => theme.bgtotal}; */
  background-color: ${({ $isDark }) => ($isDark ? "#272727" : "#eaeaea")};
  background-image: ${({ $isDark }) =>
    $isDark
      ? `url("src/assets/background-dark.png")`
      : `url("src/assets/background-ligth.png")`};
  background-attachment: fixed;
  background-size: cover;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1;
  color: ${(props) => props.theme.text};
  z-index: 100;
  gap: 30px;
  padding: 5rem 20px 3rem 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.tablet} {
    grid-column: 2;
    width: 100%;
    height: 100%;
    padding: 6rem 20px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${device.laptop} {
      width: 60%;
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

export const FormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ContainerBtn = styled.div`
  margin-top: 10px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  button {
    width: 100%;
    max-width: 320px;
    font-weight: 700;
    font-size: 16px;

    &:disabled {
      background-color: #888;
      box-shadow: 0.1em 0.1em #ccc;
      border: 3px solid #ccc;
      cursor: not-allowed;
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
