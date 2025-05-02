import styled from "styled-components";

export const Icon = styled.span<{ $size: number | string }>`
  color: ${({ theme }) => theme.text};
  font-size: ${({ $size }) =>
    typeof $size === "number" ? `${$size}px` : $size};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
