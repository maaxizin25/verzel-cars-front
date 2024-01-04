import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { iFormInputRegister } from "../../context/userContext/types";

export const FormRegisterComponent = () => {
  const { loadingLogin, userRegister } = useContext(UserContext);
  const { register, handleSubmit } = useForm<iFormInputRegister>();
  const onSubmitRegister: SubmitHandler<iFormInputRegister> = (data) => {
    userRegister(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitRegister)} action="">
      <input
        {...register("name", { required: true, min: 5 })}
        type="text"
        placeholder="Digite seu nome"
      />
      <input
        type="email"
        {...register("email", { required: true })}
        placeholder="Digite seu email"
      />
      <input
        type="password"
        {...register("password", { required: true })}
        placeholder="Digite sua senha"
      />
      <button>{loadingLogin ? "Carregando..." : "Registrar"}</button>
    </form>
  );
};
