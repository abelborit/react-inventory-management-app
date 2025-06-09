import styled from "styled-components";
import { darkTheme } from "../../../styles/themes";

export const ContentLogoContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${darkTheme.body};

  img {
    width: 50px;
    margin-right: 4px;
  }
`;

export const BannerlateralContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  /* background-color: #fc6b32; */
  /* background: linear-gradient(220.55deg, #ffc328 0%, #fc6b32 100%); */
  background-color: #fce038;
  background-image: url("src/assets/background-banner.png");
  background-attachment: fixed;
  background-size: cover;

  img {
    width: 80%;
    max-width: 350px;
  }

  span {
    font-style: italic;
    font-size: 2rem;
    font-weight: bold;
    color: ${darkTheme.body};
  }
`;
