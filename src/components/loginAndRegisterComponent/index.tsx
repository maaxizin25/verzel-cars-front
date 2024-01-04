import { useContext } from "react";
import { LoginAndRegisterComponentStyle } from "./style";
import { UserContext } from "../../context/userContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormRegisterComponent } from "../formRegisterComponent";

interface iFormInput {
  email: string;
  password: string;
}

export const LoginAndRegisterComponent = () => {
  const { modalType, changeModalType, loading, userLogin } =
    useContext(UserContext);

  const { register, handleSubmit } = useForm<iFormInput>();

  const onSubmit: SubmitHandler<iFormInput> = (data) => {
    userLogin(data);
  };

  return (
    <LoginAndRegisterComponentStyle>
      <div>
        <button className="closed-button">X</button>
        <span>
          <h2>{modalType === "login" ? "Entrar" : "Registrar"}</h2>
        </span>
        {modalType === "login" ? (
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Digite seu email"
            />
            <input
              {...register("password", { required: true, minLength: 8 })}
              type="password"
              placeholder="Digite sua senha"
            />
            <button>{loading ? "Carregando..." : "Efetuar Login"}</button>
          </form>
        ) : (
          <FormRegisterComponent />
        )}

        <span className="register-section">
          {modalType === "login" ? (
            <p>
              Ainda não tem conta?{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  changeModalType();
                }}
                href=""
              >
                Cadastre-se
              </a>
            </p>
          ) : (
            <p>
              Já tem uma conta?{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  changeModalType();
                }}
                href=""
              >
                Efetuar Login
              </a>
            </p>
          )}
        </span>
      </div>
    </LoginAndRegisterComponentStyle>
  );
};
