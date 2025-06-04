import { UserInsertProps } from "../interface/user.interface";

export const initialFormRegister: UserInsertProps = {
  name: "",
  lastname: "",
  email: "",
  document_type: "",
  document_number: "",
  phone: "",
  adress: "",
  user_type: "",
  password: "",
};

// import {
//   DocumentType,
//   UserInsertProps,
//   UserType,
// } from "../interface/user.interface";

// export const initialFormRegister: UserInsertProps = {
//   name: "Nombre Admin",
//   lastname: "Apellido Admin",
//   email: "admin@admin.com",
//   document_type: DocumentType.DNI,
//   document_number: "12345678",
//   phone: "123456789",
//   adress: "Dirección Admin V-123",
//   user_type: UserType.Admin,
//   password: "Admin123",
// };
