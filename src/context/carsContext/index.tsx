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

  return (
    <CarsContext.Provider value={{ announcementList }}>
      {children}
    </CarsContext.Provider>
  );
};
