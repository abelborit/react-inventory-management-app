/* files of USER_TABLE */
// name: Ron
// lastname: Kheen
// email: example@example.com
// document_type: DNI | CE | Passport
// document_number: 1234568 (son 8 dígitos) | 12345689123 (son 12 dígitos) | 12345689123 (son 12 dígitos)
// phone: 123456789 (son 9 dígitos)
// adress: adress example direction Av J-245 (hasta 40 caracteres)
// created_at: now() (esto lo crea supabase de forma automática)
// user_status: active (esto lo crea supabase como parámetro por default)
// user_type: admin | employee
// id_auth: asd123 (esto se haría referencia al id que nos da supabase al momento de crear un nuevo registro)
// ¿qué más parámetros se podrían agregar?

export enum UserType {
  Admin = "admin",
  Employee = "employee",
  // más datos en el futuro…
}

export enum DocumentType {
  DNI = "DNI",
  CE = "CE",
  Passport = "Passport",
  // más datos en el futuro…
}

export interface UserInsertProps {
  name: string;
  lastname: string;
  email: string;
  document_type: DocumentType;
  document_number: string;
  phone: string;
  adress: string;
  user_type: UserType;
  id_auth?: string;
}

export interface UserRecord extends UserInsertProps {
  id: number; // PK de la tabla
  created_at: string; // timestamp ISO
  user_status: string; // p.ej. "active"
}
