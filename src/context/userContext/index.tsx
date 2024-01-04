import { createContext, useEffect, useState } from "react";
import {
  iAppContext,
  iAppContextProps,
  iFormInputLogin,
  iFormInputRegister,
  iUserData,
} from "./types";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext({} as iAppContext);

export const UserProvider = ({ children }: iAppContextProps) => {
  const [user, setUser] = useState<iUserData | null>(null);
  const [loginClick, setLoginClick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [modalUser, setModalUser] = useState(false);
  const [modalType, setModalType] = useState<string>("login");
  const [optionsUser, setOptionsUser] = useState(false);

  useEffect(() => {
    async function verifyToken() {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("id");

      if (token && userId) {
        setLoadingLogin(true);
        const user = await api.get(`/users/${userId}`);
        setUser(user.data);
        setLoadingLogin(false);
      }
    }
    verifyToken();
  }, [loginClick]);

  const setStates = (state: string, value: boolean) => {
    switch (state) {
      case "loading":
        setLoading(value);
        return;
      case "modalUser":
        setModalUser(value);
        return;
      case "optionsUser":
        setOptionsUser(value);
        return;
      case "loadingLogin":
        setLoadingLogin(value);
    }
  };
  const changeModalType = () => {
    if (modalType === "login") {
      setModalType("registro");
    } else {
      setModalType("login");
    }
  };
  const userLogin = async (data: iFormInputLogin) => {
    try {
      setStates("loadingLogin", true);
      const userLogin = await api.post("/users/login", data);
      let token = userLogin.data.refresh;
      localStorage.setItem("token", token);
      token = jwtDecode(userLogin.data.refresh);
      localStorage.setItem("id", token.user_id);
      setLoginClick(true);
      toast.success("Login efetuado com sucesso.");
      setStates("modalUser", false);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          toast.error("Usuário ou senha incorretos");
          return;
        }
        toast.error("Erro interno");
      }
    } finally {
      setStates("loadingLogin", false);
    }
  };
  const userRegister = async (data: iFormInputRegister) => {
    try {
      setStates("loading", true);
      await api.post("/users", data);
      changeModalType();
      toast.success("Usuário criado com sucesso!");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          toast.error("Email já existe");
          return;
        }
        toast.error("Erro interno");
      }
    } finally {
      setStates("loading", false);
    }
  };
  const userLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        setStates,
        modalUser,
        modalType,
        changeModalType,
        userLogin,
        userRegister,
        optionsUser,
        userLogout,
        loadingLogin,
      }}
    >
      {" "}
      {children}{" "}
    </UserContext.Provider>
  );
};
