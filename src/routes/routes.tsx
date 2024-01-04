import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage";
import { DetailPage } from "../pages/detailpage";
import { AdminPage } from "../pages/adminpage";

export const RoutersMain = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};
