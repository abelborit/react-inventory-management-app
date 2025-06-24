/* Se está utilizando Yup para validaciones en el frontend, lo cual es excelente porque evita solicitudes innecesarias al backend */
import * as Yup from "yup";
import { DocumentType, UserType } from "../interface/user.interface";

/*
/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/

  - a-zA-Z: Permite letras minúsculas y mayúsculas.
  - áéíóúÁÉÍÓÚñÑ: Soporte para caracteres con tilde y la ñ.
  - \s: Permite espacios.
*/

/* Expresiones regulares reutilizables */
const onlyLettersRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
const emailFormatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const numberFormatRegex = /^[0-9]+$/;

/* Mensajes de error comunes */
const messages = {
  required: "This field is required",
  onlyLetters: "Only letters are allowed",
  onlyNumbers: "Only numbers are allowed",
  invalidDocumentType: "Valid options: DNI, CE, Passport",
  invalidUserType: "Valid options: Admin, Employee",
  invalidEmail: "Invalid email format (e.g., email@example.com)",
  passwordLength: "Password must be at least 8 characters",
  passwordLowercase: "Must include at least one lowercase letter",
  passwordUppercase: "Must include at least one uppercase letter",
  passwordNumber: "Must include at least one number",
  passwordSpecial: "Must include at least one special character",
};

/* se coloca afuera para evitar que se cree de nuevo innecesariamente y almacenar espacio en cada renderizado */
export const RegisterSchemaRules = Yup.object({
  /* colocar las reglas para los inputs */
  name: Yup.string()
    .matches(onlyLettersRegex, messages.onlyLetters)
    .min(2, "Must be at least 2 characters")
    .max(15, "Must be at most 15 characters")
    .required(messages.required),

  lastname: Yup.string()
    .matches(onlyLettersRegex, messages.onlyLetters)
    .min(2, "Must be at least 2 characters")
    .max(15, "Must be at most 15 characters")
    .required(messages.required),

  document_type: Yup.mixed<DocumentType>()
    .oneOf(Object.values(DocumentType), messages.invalidDocumentType)
    .required(messages.required),

  /* FORMA 1 */
  // document_number: Yup.string()
  //   .matches(numberFormatRegex, messages.onlyNumbers)
  //   .min(8, "Must be at least 8 digits")
  //   .max(12, "Must be at most 12 digits")
  //   .required(messages.required),

  /* FORMA 2 */
  document_number: Yup.string()
    .matches(numberFormatRegex, messages.onlyNumbers)
    .when("document_type", ([document_type], schema) => {
      if (document_type === DocumentType.DNI) {
        return schema
          .length(8, "DNI must be exactly 8 digits")
          .required(messages.required);
      }

      if (document_type === DocumentType.CE) {
        return schema
          .length(9, "CE must be exactly 9 digits")
          .required(messages.required);
      }

      if (document_type === DocumentType.Passport) {
        return schema
          .min(9, "Passport must be at least 9 digits")
          .max(12, "Passport must be at most 12 digits")
          .required(messages.required);
      }

      return schema.required(messages.required); // fallback
    }),

  phone: Yup.string()
    .matches(numberFormatRegex, messages.onlyNumbers)
    .length(9, "Phone must be exactly 9 digits")
    .required(messages.required),

  adress: Yup.string()
    .min(5, "Address must be at least 5 characters")
    .max(50, "Address must be at most 50 characters")
    .required(messages.required),

  user_type: Yup.mixed<UserType>()
    .oneOf(Object.values(UserType), messages.invalidUserType)
    .required(messages.required),

  email: Yup.string()
    .matches(emailFormatRegex, messages.invalidEmail) // para que coincida con el regex del backend
    .required(messages.required),
  // email: Yup.string().email(messages.invalidEmail).required(messages.required),

  /* Esto asegura que la contraseña tenga al menos:
    - Una letra minúscula.
    - Una letra mayúscula.
    - Un número.
    - Un carácter especial.
    - Mínimo 8 caracteres.
 */
  password: Yup.string()
    .min(8, messages.passwordLength)
    .matches(/[a-z]/, messages.passwordLowercase)
    .matches(/[A-Z]/, messages.passwordUppercase)
    .matches(/\d/, messages.passwordNumber)
    .matches(specialCharacterRegex, messages.passwordSpecial)
    .required(messages.required),
});
