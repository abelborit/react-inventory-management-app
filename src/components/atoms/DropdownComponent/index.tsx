import React, { useState, useRef } from "react";
import { useClickOutside, useEscapeKey } from "../../../hooks";
import {
  Container,
  Label,
  ErrorText,
  LabelContainer,
  InputContainer,
  DropdownWrapper,
  DropdownHeader,
  DropdownList,
  DropdownItem,
  ArrowWrapper,
} from "./index.styles";
import { SvgIconComponent } from "../SvgIconComponent";
import { ChevronDown } from "../../../assets/svg";

export interface DropdownComponentOption {
  label: string;
  value: string;
}

interface DropdownComponentProps {
  icon: null | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
  name: string;
  placeholder: string;
  options: DropdownComponentOption[];
  value: string;
  onChange: (value: string) => void;
  onBlur: (event: React.FocusEvent<HTMLDivElement>) => void;
  setFieldTouched: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ) => void;
  error?: string;
  touched?: boolean;
  // isFormValid?: boolean;

  /* y también puede recibir X cantidad de propiedades adicionales que queramos pasarle y se puede ir colocando una a una o sino también de la siguiente forma usando un comodín "[x: string]: any;" que significa que puede recibir cualquier llave que será de tipo string y su valor será cualquier cosa y con este comodín nos permite agregar cualquier cantidad de propiedades adcionales */
  // [x: string]: any;
}

export const DropdownComponent = ({
  // ...rest
  // isFormValid,
  icon,
  label,
  name,
  placeholder,
  options,
  value,
  onChange,
  onBlur,
  setFieldTouched,
  error,
  touched,
}: DropdownComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isError = touched && !!error;
  const isValid = touched && !error;

  const selectedLabel = options.find((option) => option.value === value)?.label;

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (selectedValue: string) => {
    if (selectedValue !== value) {
      onChange(selectedValue);
      setFieldTouched(name, true, false);
    }
    closeDropdown();
  };

  useClickOutside(dropdownRef, closeDropdown);
  useEscapeKey(closeDropdown);

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
      </LabelContainer>

      <InputContainer>
        <DropdownWrapper
          ref={dropdownRef}
          onBlur={onBlur}
          tabIndex={0}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <DropdownHeader
            onClick={handleToggle}
            $isOpen={isOpen}
            $isError={isError}
            $isValid={isValid}
          >
            {selectedLabel || placeholder}

            <ArrowWrapper $isOpen={isOpen}>
              <SvgIconComponent
                icon={ChevronDown}
                size="20px"
                color="#454545"
              />
            </ArrowWrapper>
          </DropdownHeader>

          <DropdownList $isOpen={isOpen} role="listbox">
            {options.map((option) => (
              <DropdownItem
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                role="option"
                aria-selected={option.value === value}
              >
                {option.label}
              </DropdownItem>
            ))}
          </DropdownList>
        </DropdownWrapper>
      </InputContainer>

      {isError ? <ErrorText>{error}</ErrorText> : null}
    </Container>
  );
};
