import { userUpdate } from "../../components/editUserComponent";
import { tAnnouncement } from "../carsContext/types";

export interface iAppContextProps {
  children: React.ReactNode;
}

// Typagem para todas as funções que vamos exportar com props
export interface iFormInputLogin {
  email: string;
  password: string;
}
export interface iFormInputRegister extends iFormInputLogin {
  name: string;
}
export interface iUserData {
  name: string;
  email: string;
  announcements: [tAnnouncement];
}

export interface iAppContext {
  user: iUserData | null;
  loading: boolean;
  setStates: (state: string, value: boolean) => void;
  modalUser: boolean;
  modalType: string;
  changeModalType: () => void;
  userLogin: (data: iFormInputLogin) => void;
  userRegister: (data: iFormInputRegister) => void;
  optionsUser: boolean;
  userLogout: () => void;
  loadingLogin: boolean;
  userAtt: () => void;
  adminPainelFunction: "anuncio" | "criar" | "conta";
  changePainelScreen: (value: "anuncio" | "criar" | "conta") => void;
  userUpdate: (data: userUpdate) => void;
  userDelete: () => void;
}
