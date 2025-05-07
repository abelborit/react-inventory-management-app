import styled from "styled-components";
import { variables } from "../../../styles/variables";

export const LinkContainer = styled.div`
  margin: 5px 0;
  transition: all 0.3s ease-in-out;
  padding: 0 5%;
  position: relative;
  &:hover {
    background: ${(props) => props.theme.bgAlpha};
  }
  .Links {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: calc(${() => variables.smSpacing} - 2px) 0;
    color: ${(props) => props.theme.text};
    height: 60px;
    .Linkicon {
      padding: ${() => variables.smSpacing} ${() => variables.mdSpacing};
      display: flex;
      svg {
        font-size: 25px;
      }
    }
    .labelVisible {
      transition: 0.3s ease-in-out;
      opacity: 1;
    }
    .labelHidden {
      opacity: 0;
    }
    &.active {
      color: ${(props) => props.theme.bg5};
      font-weight: 600;
      &::before {
        content: "";
        position: absolute;
        height: 100%;
        background: ${(props) => props.theme.bg5};
        width: 4px;
        border-radius: 10px;
        left: 0;
      }
    }
  }
  &.active {
    padding: 0;
  }
`;
