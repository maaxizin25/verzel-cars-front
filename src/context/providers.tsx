import React from "react";
import { UserProvider } from "./userContext";
import { CarsProvider } from "./carsContext";

interface iProvider {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProvider) => {
  return (
    <UserProvider>
      <CarsProvider>{children}</CarsProvider>
    </UserProvider>
  );
};
