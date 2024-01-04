import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage";
import { DetailPage } from "../pages/detailpage";
import { AdminPage } from "../pages/adminpage";
import { ProtectedRoutes } from "./protecteroute";

export const RoutersMain = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
};
