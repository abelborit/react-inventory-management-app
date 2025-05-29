import styled from "styled-components";

export const SvgIconWrapper = styled.div<{
  $size?: string;
  $color?: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: ${({ $size }) => $size || "24px"};
    height: ${({ $size }) => $size || "24px"};
    stroke: ${({ $color, theme }) => ($color ? $color : theme.bg)};
    transition: all 0.3s ease;

    /* &:hover {
      opacity: 0.8;
      transform: scale(1.10);
    } */
  }
`;
