import { createContext, useContext, useEffect, useState } from "react";
import { tAnnouncement, iAppContext, iAppContextProps } from "./types";
import { api } from "../../services/api";
import { UserContext } from "../userContext";

export const CarsContext = createContext({} as iAppContext);

export const CarsProvider = ({ children }: iAppContextProps) => {
  const { setStates } = useContext(UserContext);
  const [announcementList, setAnnouncementList] = useState<
    [tAnnouncement] | null
  >(null);
  const [openModalCars, setModalCars] = useState<null | string>(null);

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

  return (
    <CarsContext.Provider
      value={{ announcementList, changeOpenModalCars, openModalCars }}
    >
      {children}
    </CarsContext.Provider>
  );
};
