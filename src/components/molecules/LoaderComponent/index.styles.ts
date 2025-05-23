import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  50% {
    opacity: 0.25;
  }
`;

const squareAnimation = keyframes`
  0%, 10.5% { left: 0; top: 0; }
  12.5%, 23% { left: 32px; top: 0; }
  25%, 35.5% { left: 64px; top: 0; }
  37.5%, 48% { left: 64px; top: 32px; }
  50%, 60.5% { left: 32px; top: 32px; }
  62.5%, 73% { left: 32px; top: 64px; }
  75%, 85.5% { left: 0; top: 64px; }
  87.5%, 98% { left: 0; top: 32px; }
  100% { left: 0; top: 0; }
`;

export const LoaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.bgtotal};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

export const LoaderContainer = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
  transform: rotate(45deg);
`;

export const LoaderSquare = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
  margin: 2px;
  background-color: ${({ theme }) => theme.bg5};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  animation: ${squareAnimation} 10s ease-in-out infinite both;

  &:nth-of-type(0) {
    animation-delay: 0s;
  }
  &:nth-of-type(1) {
    animation-delay: -1.4285714286s;
  }
  &:nth-of-type(2) {
    animation-delay: -2.8571428571s;
  }
  &:nth-of-type(3) {
    animation-delay: -4.2857142857s;
  }
  &:nth-of-type(4) {
    animation-delay: -5.7142857143s;
  }
  &:nth-of-type(5) {
    animation-delay: -7.1428571429s;
  }
  &:nth-of-type(6) {
    animation-delay: -8.5714285714s;
  }
  &:nth-of-type(7) {
    animation-delay: -10s;
  }
`;

export const LoadingText = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.bg5};
  letter-spacing: 3px;
  animation: ${pulseAnimation} 1.25s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;
