import { useFormik } from "formik";
import { useNavigate } from "react-router";
import {
  ContainerBtn,
  FormWrapper,
  LoginContainer,
  Title,
  SubTitle,
  HelpText,
} from "./index.styles";
import { useAuthStore } from "../../../store/useAuthStore";
import { InputComponent } from "../../atoms";
import {
  FormLoginInterface,
  initialFormLogin,
} from "../../../constants/initialFormLogin";
import { LoginSchemaRules } from "../../../formValidations/validationLoginSchemaRules";
import CarInventory from "../../../assets/car-inventory.svg";
import inventarioslogo from "../../../assets/inventarioslogo.png";
import { ButtonBase, ToggleTheme } from "../../molecules";
import { useDeviceType } from "../../../hooks/useDeviceType";
import { errorGenericMessages } from "../../../constants/errorGenericMessages";
import { useErrorGenericHandler } from "../../../hooks/useErrorGenericHandler";
import { AtSign, Lock } from "../../../assets/svg";

export const LoginForm = () => {
  const navigate = useNavigate();
  const deviceType = useDeviceType();
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
    <LoginContainer>
      {deviceType === "laptop" || deviceType === "desktop" ? (
        <>
          <div className="contentLogo">
            <img src={inventarioslogo} alt="Logo" />
            <span>StockPRO</span>
          </div>

          <div className="bannerlateral">
            <img src={CarInventory} alt="Logo" />
          </div>
        </>
      ) : null}

      <div className="toggleTheme">
        <ToggleTheme />
      </div>

      <div className="contentCard">
        <div className="card">
          <HelpText>
            <span>
              Puedes crear una cuenta nueva o solicitar a tu empleador una.{" "}
            </span>
            {/* <MdOutlineInfo /> */}
          </HelpText>

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
      </div>
    </LoginContainer>
  );
};
