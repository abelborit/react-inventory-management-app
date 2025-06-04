/* Se está utilizando Yup para validaciones en el frontend, lo cual es excelente porque evita solicitudes innecesarias al backend */
import * as Yup from "yup";

/* Mensajes de error comunes */
export const messagesLoginValidation = {
  required: "Este campo es requerido",
  invalidEmail: "Correo incorrecto",
  invalidPasswordMin: "Mínimo 6 caracteres",
};

/* se coloca afuera para evitar que se cree de nuevo innecesariamente y almacenar espacio en cada renderizado */
export const LoginSchemaRules = Yup.object({
  /* colocar las reglas para los inputs */
  email: Yup.string()
    .email(messagesLoginValidation.invalidEmail)
    .required(messagesLoginValidation.required),
  password: Yup.string()
    .min(6, messagesLoginValidation.invalidPasswordMin)
    .required(messagesLoginValidation.required),
});
