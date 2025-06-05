import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1;
  background-color: ${({ theme }) => theme.bgtotal};
  color: ${(props) => props.theme.text};
  z-index: 100;
  gap: 30px;
  padding: 20px;
  box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.35);
  display: flex;
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${device.laptop} {
      width: 50%;
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
