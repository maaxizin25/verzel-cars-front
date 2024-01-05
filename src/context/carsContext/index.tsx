import { createContext, useContext, useEffect, useState } from "react";
import { tAnnouncement, iAppContext, iAppContextProps } from "./types";
import { api } from "../../services/api";
import { UserContext } from "../userContext";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { requestAnnouncement } from "../../components/createAnnouncement";

export const CarsContext = createContext({} as iAppContext);

export const CarsProvider = ({ children }: iAppContextProps) => {
  const { setStates, userAtt } = useContext(UserContext);
  const [announcementList, setAnnouncementList] = useState<
    [tAnnouncement] | null
  >(null);
  const [openModalCars, setModalCars] = useState<null | string>(null);
  const [announcementMark, setAnnouncementMark] =
    useState<tAnnouncement | null>(null);
  const [buttonLoadingCars, setButtonLoadingCars] = useState(false);
  const [filterListAnnouncement, setFilterListAnnouncement] = useState<
    [tAnnouncement] | null | tAnnouncement[]
  >(null);

  const filterCarList: tAnnouncement[] | null = !filterListAnnouncement
    ? announcementList
    : filterListAnnouncement;

  useEffect(() => {
    async function getAnnouncement() {
      try {
        setStates("loading", true);
        const listAnnouncements = await api.get("/announcement");
        setAnnouncementList(listAnnouncements.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setStates("loading", false);
      }
    }

    getAnnouncement();
  }, []);
  const changeOpenModalCars = (value: string | null) => {
    setModalCars(value);
  };
  const changeAnnouncementMark = (announcement: tAnnouncement | null) => {
    setAnnouncementMark(announcement);
  };

  const updateAnnouncement = async (data: unknown) => {
    try {
      setButtonLoadingCars(true);
      await api.patch(`/announcement/${announcementMark?.id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      userAtt();
      toast.success("Anúncio alterado com sucesso!");
      setModalCars(null);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error("Ocorreu um erro");
      }
    } finally {
      setButtonLoadingCars(false);
    }
  };
  const deleteAnnouncement = async () => {
    try {
      setButtonLoadingCars(true);
      await api.delete(`/announcement/${announcementMark?.id}`);
      userAtt();
      toast.success("Anúncio deletado com sucesso!");
      setModalCars(null);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error("Ocorreu um erro");
      }
    } finally {
      setButtonLoadingCars(false);
    }
  };
  const createAnnouncement = async (data: requestAnnouncement | unknown) => {
    try {
      setButtonLoadingCars(true);
      await api.post("/announcement", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      userAtt();
      toast.success("Anúncio Criado com sucesso!");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error("Ocorreu um erro");
      }
    } finally {
      setButtonLoadingCars(false);
    }
  };
  const carAtt = async () => {
    try {
      setStates("loading", true);
      const listAnnouncements = await api.get("/announcement");
      setAnnouncementList(listAnnouncements.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setStates("loading", false);
    }
    console.log(carAtt);
  };
  const carFilter = (letter: string) => {
    if (announcementList) {
      const products: tAnnouncement[] | [] = announcementList?.filter((e) =>
        e.nome.toLowerCase().trim().includes(letter)
      );
      if (products) {
        setFilterListAnnouncement(products);
      }
    }
  };

  return (
    <CarsContext.Provider
      value={{
        announcementList,
        changeOpenModalCars,
        openModalCars,
        changeAnnouncementMark,
        announcementMark,
        updateAnnouncement,
        buttonLoadingCars,
        deleteAnnouncement,
        createAnnouncement,
        carAtt,
        filterCarList,
        carFilter,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
