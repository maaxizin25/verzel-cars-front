import { useContext } from "react";
import { EditUserComponentStyle } from "./style";
import { UserContext } from "../../context/userContext";
import { iUserData } from "../../context/userContext/types";
import { SubmitHandler, useForm } from "react-hook-form";

export interface userUpdate extends iUserData {
  password: string;
}

export const EditUserComponent = () => {
  const { user, userUpdate, loadingLogin, userDelete } =
    useContext(UserContext);
  const { register, handleSubmit } = useForm<userUpdate>();

  const onSubmit: SubmitHandler<userUpdate> = async (data: userUpdate) => {
    userUpdate(data);
  };

  return (
    <EditUserComponentStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label htmlFor="">Nome</label>
            <input
              type="text"
              {...register("name")}
              defaultValue={user?.name}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              {...register("email")}
              defaultValue={user?.email}
            />
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input {...register("password")} type="password" />
            <button onClick={userDelete} type="button" className="fake-input">
              Deletar conta
            </button>
          </div>
        </div>
        <button> {loadingLogin ? "Carregando..." : "Salvar alterações"}</button>
      </form>
    </EditUserComponentStyle>
  );
};
