import React from "react";
import {
  Container,
  Input,
  Label,
  ErrorText,
  CharCount,
  LabelContainer,
  InputContainer,
} from "./index.styles";
import { SvgIconComponent } from "../SvgIconComponent";

interface InputComponentProps {
  icon: null | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  showCharactersLength: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  setFieldTouched: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ) => void;
  error?: string;
  touched?: boolean;
  disabled?: boolean;
  // isFormValid?: boolean;

  /* y también puede recibir X cantidad de propiedades adicionales que queramos pasarle y se puede ir colocando una a una o sino también de la siguiente forma usando un comodín "[x: string]: any;" que significa que puede recibir cualquier llave que será de tipo string y su valor será cualquier cosa y con este comodín nos permite agregar cualquier cantidad de propiedades adcionales */
  // [x: string]: any;
}

export const InputComponent = ({
  // ...rest
  // isFormValid,
  icon,
  label,
  name,
  type = "text",
  placeholder,
  showCharactersLength,
  value,
  onChange,
  onBlur,
  setFieldTouched,
  error,
  touched,
  disabled = false,
}: InputComponentProps) => {
  const handleChangeManual = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    setFieldTouched(name, true, false); // Marcar el campo como "touched"
  };

  const isError = touched && !!error;
  const isValid = touched && !error;

  return (
    <Container>
      <LabelContainer>
        {icon ? (
          <SvgIconComponent
            icon={icon}
            size="14px"
            color={isError ? "#e53e3e" : isValid ? "#38a169" : "#8d8d8d"}
          />
        ) : null}

        <Label htmlFor={name} $isError={isError} $isValid={isValid}>
          {label}
        </Label>

        {showCharactersLength ? (
          <CharCount $isError={isError} $isValid={isValid}>
            ({value?.length || 0} Characters)
          </CharCount>
        ) : null}
      </LabelContainer>

      <InputContainer>
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChangeManual}
          onBlur={onBlur}
          $isError={isError}
          $isValid={isValid}
          disabled={disabled}
          // {...rest}
        />
      </InputContainer>

      {isError ? <ErrorText>{error}</ErrorText> : null}
    </Container>
  );
};
