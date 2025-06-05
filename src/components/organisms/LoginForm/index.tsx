import { useFormik } from "formik";
import { useNavigate } from "react-router";
import {
  ContainerBtn,
  FormWrapper,
  Title,
  SubTitle,
  Container,
  CardContainer,
} from "./index.styles";
import { useAuthStore } from "../../../store/useAuthStore";
import { InputComponent } from "../../atoms";
import {
  FormLoginInterface,
  initialFormLogin,
} from "../../../constants/initialFormLogin";
import { LoginSchemaRules } from "../../../formValidations/validationLoginSchemaRules";
import { ButtonBase } from "../../molecules";
import { errorGenericMessages } from "../../../constants/errorGenericMessages";
import { useErrorGenericHandler } from "../../../hooks/useErrorGenericHandler";
import { AtSign, Lock } from "../../../assets/svg";
import { useThemeContext } from "../../../context/themeContext/ThemeContext";

export const LoginForm = () => {
  const { currentTheme } = useThemeContext();
  const isDark = currentTheme === "dark";

  const navigate = useNavigate();

  const { errorGenericHandler } = useErrorGenericHandler();
  const signInWithEmail = useAuthStore((state) => state.signInWithEmail);

  /* inicializar formik */
  const formik = useFormik<FormLoginInterface>({
    initialValues: initialFormLogin,
    validationSchema: LoginSchemaRules,
    validateOnChange: true, // Validar al escribir
    validateOnBlur: true, // Validar al desenfocar
    validateOnMount: true,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const user = await signInWithEmail(values.email, values.password);

        if (!user) {
          throw new Error("User not found or login failed");
        }

        navigate("/dashboard/home");
      } catch (error: unknown) {
        console.error("[LoginForm] Login error:", error);
        errorGenericHandler(errorGenericMessages.internalServerError, null);
      } finally {
        setSubmitting(false);
      }
    },
  });

  /* componente para renderizar los inputs de forma dinámica y no colocar cada input con las mismas propiedades */
  const RenderInputField = (
    label: string,
    name: keyof typeof formik.values, // El nombre debe coincidir con las claves de los valores iniciales en Formik
    type: string,
    placeholder: string,
    showCharactersLength: boolean,
    icon: null | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  ) => (
    <InputComponent
      icon={icon}
      label={label}
      name={name}
      type={type}
      placeholder={placeholder}
      showCharactersLength={showCharactersLength}
      value={formik.values[name]} // Pasar el valor del campo
      onChange={formik.handleChange} // Manejar el cambio
      onBlur={formik.handleBlur} // Manejar el desenfoque
      setFieldTouched={formik.setFieldTouched} // Para hacer el handleChangeManual manejando el estado "touched"
      error={formik.errors[name]} // Pasar el mensaje de error
      touched={formik.touched[name]} // Pasar el estado de "touched"
      // isFormValid={formik.isValid && formik.dirty} // Pasar el estado de validación
    />
  );

  return (
    <Container>
      <CardContainer $isDark={isDark}>
        <div className="card">
          <Title>StockPRO</Title>
          <SubTitle>Controla tu inventario</SubTitle>

          <FormWrapper /* onSubmit={formik.handleSubmit} */>
            {RenderInputField(
              "Email",
              "email",
              "email",
              "correo@example.com",
              false,
              AtSign
            )}

            {RenderInputField(
              "Password",
              "password",
              "password",
              "********",
              true,
              Lock
            )}

            <ContainerBtn>
              <ButtonBase
                // type="submit"
                // handleClick={() => {}}
                title="Iniciar sesión"
                icon={null}
                bgcolor="#fc6b32"
                textcolor="#fff"
                sidebarOpen={true}
                handleClick={formik.handleSubmit}
                disabled={!formik.isValid || formik.isSubmitting}
              />

              <ButtonBase
                title="Crear cuenta"
                icon={null}
                bgcolor="#fff"
                textcolor="#333"
                sidebarOpen={true}
                handleClick={() => {}}
                disabled={!formik.isValid || formik.isSubmitting}
              />
            </ContainerBtn>
          </FormWrapper>
        </div>
      </CardContainer>
    </Container>
  );
};
