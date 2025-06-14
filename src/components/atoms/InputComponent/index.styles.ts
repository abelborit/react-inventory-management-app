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

  /* quitar los spinners (flechas para aumentar o disminuir) de los inputs type="number" */
  &[type="number"] {
    appearance: textfield; /* Firefox */
  }

  /* Chrome, Safari, Edge */
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:disabled {
    background-color: #888;
    cursor: not-allowed;
  }
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

export const CharCount = styled.span<{
  $isError?: boolean;
  $isValid?: boolean;
}>`
  font-size: 0.7rem;
  color: ${(props) =>
    props.$isError ? "#e53e3e" : props.$isValid ? "#38a169" : "#8d8d8d"};
`;

export const ErrorText = styled.span`
  font-size: 0.75rem;
  color: #e53e3e;
  display: block;
`;
