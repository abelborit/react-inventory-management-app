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
  type: string;
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
  isFormValid?: boolean;

  /* y también puede recibir X cantidad de propiedades adicionales que queramos pasarle y se puede ir colocando una a una o sino también de la siguiente forma usando un comodín "[x: string]: any;" que significa que puede recibir cualquier llave que será de tipo string y su valor será cualquier cosa y con este comodín nos permite agregar cualquier cantidad de propiedades adcionales */
  // [x: string]: any;
}

export const InputComponent = ({
  // ...rest
  icon,
  label,
  name,
  type,
  placeholder,
  showCharactersLength,
  value,
  onChange,
  onBlur,
  setFieldTouched,
  error,
  touched,
  isFormValid,
}: InputComponentProps) => {
  const handleChangeManual = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    setFieldTouched(name, true, false); // Marcar el campo como "touched"
  };

  const isError = touched && !!error;
  const isValid = isFormValid && !isError;

  return (
    <Container>
      <LabelContainer>
        {icon ? (
          <SvgIconComponent icon={icon} color={isError ? "#e53e3e" : "#666"} />
        ) : null}

        <Label htmlFor={name} $isError={isError}>
          {label}
        </Label>

        {showCharactersLength ? (
          <CharCount $isError={isError}>
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
          // {...rest}
        />
      </InputContainer>

      {isError ? <ErrorText>{error}</ErrorText> : null}
    </Container>
  );
};
