import { requestAnnouncement } from "../../components/createAnnouncement";
import { iUserData } from "../userContext/types";

export interface iAppContextProps {
  children: React.ReactNode;
}

export interface tAnnouncement {
  id: number;
  nome: string;
  marca: string;
  model: string;
  ano: number;
  valor: number;
  km: number;
  placa: string;
  cor: string;
  transmissao: "M" | "A";
  descricao: string;
  photos: [
    {
      id: number;
      image: string;
    }
  ];
  user: iUserData;
}

export interface iAppContext {
  announcementList: null | [tAnnouncement];
  openModalCars: null | string;
  changeOpenModalCars: (value: string | null) => void;
  changeAnnouncementMark: (value: tAnnouncement | null) => void;
  announcementMark: tAnnouncement | null;
  updateAnnouncement: (data: tAnnouncement) => void;
  buttonLoadingCars: boolean;
  deleteAnnouncement: () => void;
  createAnnouncement: (data: requestAnnouncement | unknown) => void;
  carAtt: () => void;
  filterCarList: null | tAnnouncement[];
  carFilter: (letter: string) => void;
}
