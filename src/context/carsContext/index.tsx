import { createContext, useEffect, useState } from "react";
import { tAnnouncement, iAppContext, iAppContextProps } from "./types";
import { api } from "../../services/api";

export const CarsContext = createContext({} as iAppContext);

export const CarsProvider = ({ children }: iAppContextProps) => {
  const [announcementList, setAnnouncementList] = useState<
    [tAnnouncement] | null
  >(null);

  useEffect(() => {
    async function getAnnouncement() {
      try {
        const listAnnouncements = await api.get("/announcement");
        setAnnouncementList(listAnnouncements.data.results);
      } catch (error) {
        console.log(error);
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
