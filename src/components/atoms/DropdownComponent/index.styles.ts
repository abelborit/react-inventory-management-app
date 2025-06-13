import styled, { css } from "styled-components";
import { darkTheme } from "../../../styles/themes";

export const Container = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Input = styled.input<{
  $isError?: boolean;
  $isValid?: boolean;
}>`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.875rem;
  border: none;
  border-bottom: 3px solid #ccc;
  border-radius: 4px 4px 0 0;
  outline: none;
  transition: border-color 0.3s ease;

  ${(props) =>
    props.$isError &&
    css`
      border-color: #e53e3e;
    `}

  ${(props) =>
    props.$isValid &&
    css`
      border-color: #38a169;
    `}
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  gap: 0.35rem;
`;

export const Label = styled.label<{ $isError?: boolean; $isValid?: boolean }>`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) =>
    props.$isError ? "#e53e3e" : props.$isValid ? "#38a169" : props.theme.text};
`;

export const ErrorText = styled.span`
  font-size: 0.75rem;
  color: #e53e3e;
  display: block;
`;

export const ArrowWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  transition: transform 0.3s ease;
  transform: rotate(${(props) => (props.$isOpen ? "180deg" : "0deg")});
`;

export const DropdownWrapper = styled.div`
  width: 100%;
  position: relative;
  outline: none;
  z-index: 10;
`;

export const DropdownHeader = styled.div<{
  $isError?: boolean;
  $isValid?: boolean;
  $isOpen?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  text-align: left;
  padding: 0.5rem;
  font-size: 0.875rem;
  border-bottom: 3px solid #ccc;
  border-radius: 4px 4px 0 0;
  background-color: #fff;
  cursor: pointer;
  transition: border-color 0.3s ease;
  color: ${() => darkTheme.body};
  /* color: ${(props) =>
    props.$isError
      ? "#e53e3e"
      : props.$isValid
      ? "#38a169"
      : darkTheme.body}; */

  ${(props) =>
    props.$isError &&
    css`
      border-color: #e53e3e;
    `}

  ${(props) =>
    props.$isValid &&
    css`
      border-color: #38a169;
    `}
`;

export const DropdownList = styled.div<{ $isOpen: boolean }>`
  text-align: left;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.$isOpen ? "translateY(0)" : "translateY(-8px)"};
  pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
  background-color: #d1d1d1;
`;

export const DropdownItem = styled.span`
  display: block;
  padding: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  color: ${() => darkTheme.body};

  &:hover {
    /* background-color: ${({ theme }) => theme.bg5}; */
    background-color: #b3b3b3;
  }
`;
