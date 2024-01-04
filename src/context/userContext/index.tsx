import { createContext, useState } from "react";
import { iAppContext, iAppContextProps } from "./types";

export const UserContext = createContext({} as iAppContext);

export const UserProvider = ({ children }: iAppContextProps) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user }}> {children} </UserContext.Provider>
  );
};
