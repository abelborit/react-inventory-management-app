import { useFormik } from "formik";
import { useNavigate } from "react-router";
import {
  ContainerBtn,
  FormWrapper,
  Title,
  SubTitle,
  Container,
  CardContainer,
  InputContainer,
  InputsWrapper,
} from "./index.styles";
import { useUserStore } from "../../../store/useUserStore";
import {
  DropdownComponent,
  InputComponent,
  PasswordStrengthIndicator,
} from "../../atoms";
import { ButtonBase } from "../../molecules";
import {
  AtSign,
  BookUser,
  FileUser,
  Hash,
  Lock,
  MapPinHouse,
  ShieldEllipsis,
  ShieldUser,
  UserRound,
} from "../../../assets/svg";
import { useThemeContext } from "../../../context/themeContext/ThemeContext";
import {
  DocumentType,
  UserInsertProps,
} from "../../../interface/user.interface";
import { initialFormRegister } from "../../../constants/initialFormRegister";
import { RegisterSchemaRules } from "../../../formValidations/validationRegisterSchemaRules";
import { useMutation } from "@tanstack/react-query";

export const RegisterForm = () => {
  const { currentTheme } = useThemeContext();
  const isDark = currentTheme === "dark";

  const navigate = useNavigate();

  const createUser = useUserStore((state) => state.createUser);

  /* usando "@tanstack/react-query" hace que el código sea más escalable, mejora la interacción con el caché y sincronización de datos */
  const createUserMutation = useMutation({
    mutationKey: ["create-user"],
    mutationFn: async (userData: UserInsertProps) => {
      const user = await createUser({
        name: userData.name,
        lastname: userData.lastname,
        email: userData.email,
        document_type: userData.document_type,
        document_number: userData.document_number,
        phone: userData.phone,
        adress: userData.adress,
        user_type: userData.user_type,
        password: userData.password,
      });

      // const user = await createUser({
      //   name: "Nombre Employee",
      //   lastname: "Apellido Employee",
      //   email: "employee@employee.com",
      //   document_type: "DNI",
      //   document_number: "12345678",
      //   phone: "123456789",
      //   adress: "Dirección Employee V-123",
      //   user_type: "employee",
      //   password: "Zx123456!",
      // });

      if (!user) {
        throw new Error("Invalid information to register user");
      }

      return user;
    },
    retry: 2, // Reintenta 2 veces si falla
    onSuccess: (responseSuccess) => {
      console.log("[createUserMutation]", responseSuccess);
      navigate("/dashboard/home");
    },
    onError: (error) => {
      console.error("[RegisterForm] Register error:", error);
    },
  });

  /* inicializar formik */
  const formik = useFormik<UserInsertProps>({
    initialValues: initialFormRegister,
    validationSchema: RegisterSchemaRules,
    validateOnChange: true, // Validar al escribir
    validateOnBlur: true, // Validar al desenfocar
    validateOnMount: true,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await createUserMutation.mutateAsync(values);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Container $isDark={isDark}>
      <CardContainer>
        <div className="card">
          <Title>StockPRO</Title>
          <SubTitle>Controla tu inventario</SubTitle>

          <FormWrapper /* onSubmit={formik.handleSubmit} */>
            <InputsWrapper>
              <InputContainer>
                <InputComponent
                  icon={UserRound}
                  label={"Name"}
                  name={"name" as keyof typeof formik.values}
                  type={"text"}
                  placeholder={"Rick"}
                  showCharactersLength={false}
                  value={formik.values["name"] || ""} // Pasar el valor del campo con el valor correcto
                  onChange={formik.handleChange} // Manejar el cambio
                  onBlur={formik.handleBlur} // Manejar el desenfoque
                  setFieldTouched={formik.setFieldTouched} // Para hacer el handleChangeManual manejando el estado "touched"
                  error={formik.errors["name"]} // Pasar el mensaje de error
                  touched={formik.touched["name"]} // Pasar el estado de "touched"
                  // isFormValid={formik.isValid && formik.dirty} // Pasar el estado de validación
                />

                <InputComponent
                  icon={BookUser}
                  label={"Lastname"}
                  name={"lastname" as keyof typeof formik.values}
                  type={"text"}
                  placeholder={"Soars"}
                  showCharactersLength={false}
                  value={formik.values["lastname"] || ""} // Pasar el valor del campo con el valor correcto
                  onChange={formik.handleChange} // Manejar el cambio
                  onBlur={formik.handleBlur} // Manejar el desenfoque
                  setFieldTouched={formik.setFieldTouched} // Para hacer el handleChangeManual manejando el estado "touched"
                  error={formik.errors["lastname"]} // Pasar el mensaje de error
                  touched={formik.touched["lastname"]} // Pasar el estado de "touched"
                  // isFormValid={formik.isValid && formik.dirty} // Pasar el estado de validación
                />
              </InputContainer>

              <InputContainer>
                <DropdownComponent
                  icon={FileUser}
                  label={"Document Type"}
                  name={"document_type" as keyof typeof formik.values}
                  placeholder={"Seleccione una opción"}
                  options={[
                    { label: "DNI", value: DocumentType.DNI },
                    { label: "Carnet de Extranjería", value: DocumentType.CE },
                    { label: "Pasaporte", value: DocumentType.Passport },
                  ]}
                  value={(formik.values["document_type"] as string) || ""} // Pasar el valor del campo
                  onChange={(value) =>
                    formik.setFieldValue("document_type", value)
                  } // Manejar el cambio
                  onBlur={formik.handleBlur} // Manejar el desenfoque
                  setFieldTouched={formik.setFieldTouched} // Para hacer el handleChangeManual manejando el estado "touched"
                  error={formik.errors["document_type"]} // Pasar el mensaje de error
                  touched={formik.touched["document_type"]} // Pasar el estado de "touched"
                  // isFormValid={formik.isValid && formik.dirty} // Pasar el estado de validación
                />

                <InputComponent
                  icon={ShieldEllipsis}
                  label={"Document Number"}
                  name={"document_number" as keyof typeof formik.values}
                  type={"number"}
                  placeholder={
                    formik.values["document_type"]
                      ? "123456789"
                      : "Complete Document Type"
                  }
                  showCharactersLength={false}
                  value={formik.values["document_number"].toString() || ""} // Pasar el valor del campo con el valor correcto
                  onChange={formik.handleChange} // Manejar el cambio
                  onBlur={formik.handleBlur} // Manejar el desenfoque
                  setFieldTouched={formik.setFieldTouched} // Para hacer el handleChangeManual manejando el estado "touched"
                  error={formik.errors["document_number"]} // Pasar el mensaje de error
                  touched={formik.touched["document_number"]} // Pasar el estado de "touched"
                  disabled={formik.values["document_type"] ? false : true}
                  // isFormValid={formik.isValid && formik.dirty} // Pasar el estado de validación
                />
              </InputContainer>

              <InputContainer>
                <InputComponent
                  icon={Hash}
                  label={"Phone"}
                  name={"phone" as keyof typeof formik.values}
                  type={"number"}
                  placeholder={"987654321"}
                  showCharactersLength={false}
                  value={formik.values["phone"].toString() || ""} // Pasar el valor del campo con el valor correcto
                  onChange={formik.handleChange} // Manejar el cambio
                  onBlur={formik.handleBlur} // Manejar el desenfoque
                  setFieldTouched={formik.setFieldTouched} // Para hacer el handleChangeManual manejando el estado "touched"
                  error={formik.errors["phone"]} // Pasar el mensaje de error
                  touched={formik.touched["phone"]} // Pasar el estado de "touched"
                  // isFormValid={formik.isValid && formik.dirty} // Pasar el estado de validación
                />

                <InputComponent
                  icon={MapPinHouse}
                  label={"Adress"}
                  name={"adress" as keyof typeof formik.values}
                  type={"text"}
                  placeholder={"John Street Av. 951"}
                  showCharactersLength={false}
                  value={formik.values["adress"] || ""} // Pasar el valor del campo con el valor correcto
                  onChange={formik.handleChange} // Manejar el cambio
                  onBlur={formik.handleBlur} // Manejar el desenfoque
                  setFieldTouched={formik.setFieldTouched} // Para hacer el handleChangeManual manejando el estado "touched"
                  error={formik.errors["adress"]} // Pasar el mensaje de error
                  touched={formik.touched["adress"]} // Pasar el estado de "touched"
                  // isFormValid={formik.isValid && formik.dirty} // Pasar el estado de validación
                />
              </InputContainer>

              <InputContainer>
                <InputContainer $flexDirection="column">
                  <DropdownComponent
                    icon={ShieldUser}
                    label={"User Type"}
                    name={"user_type" as keyof typeof formik.values}
                    placeholder={"Seleccione una opción"}
                    options={[
                      { label: "Admin", value: "admin" },
                      { label: "Employee", value: "employee" },
                    ]}
                    value={(formik.values["user_type"] as string) || ""} // Pasar el valor del campo
                    onChange={(value) =>
                      formik.setFieldValue("user_type", value)
                    } // Manejar el cambio
                    onBlur={formik.handleBlur} // Manejar el desenfoque
                    setFieldTouched={formik.setFieldTouched} // Para hacer el handleChangeManual manejando el estado "touched"
                    error={formik.errors["user_type"]} // Pasar el mensaje de error
                    touched={formik.touched["user_type"]} // Pasar el estado de "touched"
                    // isFormValid={formik.isValid && formik.dirty} // Pasar el estado de validación
                  />

                  <InputComponent
                    icon={AtSign}
                    label={"Email"}
                    name={"email" as keyof typeof formik.values}
                    type={"email"}
                    placeholder={"correo@example.com"}
                    showCharactersLength={false}
                    value={formik.values["email"] || ""} // Pasar el valor del campo con el valor correcto
                    onChange={formik.handleChange} // Manejar el cambio
                    onBlur={formik.handleBlur} // Manejar el desenfoque
                    setFieldTouched={formik.setFieldTouched} // Para hacer el handleChangeManual manejando el estado "touched"
                    error={formik.errors["email"]} // Pasar el mensaje de error
                    touched={formik.touched["email"]} // Pasar el estado de "touched"
                    // isFormValid={formik.isValid && formik.dirty} // Pasar el estado de validación
                  />
                </InputContainer>

                <InputContainer $flexDirection="column">
                  <InputComponent
                    icon={Lock}
                    label={"Password"}
                    name={"password" as keyof typeof formik.values}
                    type={"password"}
                    placeholder={"********"}
                    showCharactersLength={true}
                    value={formik.values["password"] || ""} // Pasar el valor del campo con el valor correcto
                    onChange={formik.handleChange} // Manejar el cambio
                    onBlur={formik.handleBlur} // Manejar el desenfoque
                    setFieldTouched={formik.setFieldTouched} // Para hacer el handleChangeManual manejando el estado "touched"
                    error={formik.errors["password"]} // Pasar el mensaje de error
                    touched={formik.touched["password"]} // Pasar el estado de "touched"
                    // isFormValid={formik.isValid && formik.dirty} // Pasar el estado de validación
                  />

                  {/* Mostrar los requisitos de la contraseña */}
                  <PasswordStrengthIndicator
                    password={formik.values.password}
                  />
                </InputContainer>
              </InputContainer>
            </InputsWrapper>

            <ContainerBtn>
              <ButtonBase
                // type="submit"
                // handleClick={() => {}}
                title="Crear cuenta"
                icon={null}
                bgcolor="#fc6b32"
                textcolor="#fff"
                sidebarOpen={true}
                handleClick={formik.handleSubmit}
                disabled={!formik.isValid || formik.isSubmitting}
              />

              <ButtonBase
                title="Iniciar sesión"
                icon={null}
                bgcolor="#fff"
                textcolor="#333"
                sidebarOpen={true}
                handleClick={() => navigate("/auth/login")}
              />
            </ContainerBtn>
          </FormWrapper>
        </div>
      </CardContainer>
    </Container>
  );
};
