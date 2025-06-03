import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { DocumentType, UserType } from "../../../interface/user.interface";
import { useUserStore } from "../../../store/useUserStore";
import { ButtonBase } from "../../molecules";
import { Container } from "./index.styles";

export const LoginPageTemplate = () => {
  const { createUser } = useUserStore();

  const navigate = useNavigate();

  /* FORMA 1: para respuesta exitosa y para manejo del error se hará directamente en "useMutation" */
  // const createUserAdminMutation = useMutation({
  //   mutationKey: ["create-admin-user"],
  //   mutationFn: async () => {
  //     const response = await createUser({
  //       name: "Nombre Admin",
  //       lastname: "Apellido Admin",
  //       email: "admin@admin.com",
  //       document_type: DocumentType.DNI,
  //       document_number: "12345678",
  //       phone: "123456789",
  //       adress: "Dirección Admin V-123",
  //       user_type: UserType.Admin,
  //     });

  //     if (!response) {
  //       throw new Error("Error");
  //     }

  //     navigate("/dashboard/home");
  //     return response;
  //   },

  //   onSuccess: (data) => {
  //     console.log("🟢 Admin creado y redirigiendo al dashboard:", data);
  //   },

  //   onError: (error) => {
  //     console.error("🔴 Error al crear Admin:", error);
  //   },
  // });

  /* FORMA 2: para respuesta exitosa y para manejo del error se hará directamente en "createUser" */
  const createUserAdminMutation = useMutation({
    mutationKey: ["create-admin-user"],
    mutationFn: async () => {
      const response = await createUser({
        name: "Nombre Admin",
        lastname: "Apellido Admin",
        email: "admin@admin.com",
        document_type: DocumentType.DNI,
        document_number: "12345678",
        phone: "123456789",
        adress: "Dirección Admin V-123",
        user_type: UserType.Admin,
        password: "Admin123",
      });

      if (response) {
        navigate("/dashboard/home");
      }
    },
  });

  const createUserEmployeeMutation = useMutation({
    mutationKey: ["create-employee-user"],
    mutationFn: async () => {
      const response = await createUser({
        name: "Nombre Employee",
        lastname: "Apellido Employee",
        email: "employee@employee.com",
        document_type: DocumentType.DNI,
        document_number: "12345678",
        phone: "123456789",
        adress: "Dirección Employee V-123",
        user_type: UserType.Employee,
        password: "Employee123",
      });

      if (response) {
        navigate("/dashboard/home");
        console.log("LoginPageTemplate", response);
      }
    },
  });

  const handleCreateAccountAdmin = () => {
    console.log("Creando cuenta Admin...");
    createUserAdminMutation.mutate();
  };

  const handleCreateAccountEmployee = () => {
    console.log("Creando cuenta Employee...");
    createUserEmployeeMutation.mutate();
  };

  return (
    <Container>
      <div>LoginPageTemplate</div>

      <ButtonBase
        title="Crear Cuenta Admin"
        icon={null}
        bgcolor="#f8f2fd"
        sidebarOpen={false}
        handleClick={handleCreateAccountAdmin}
      />

      <ButtonBase
        title="Crear Cuenta Employee"
        icon={null}
        bgcolor="#f8f2fd"
        sidebarOpen={false}
        handleClick={handleCreateAccountEmployee}
      />
    </Container>
  );
};
