import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage";
import { DetailPage } from "../pages/detailpage";

export const RoutersMain = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  );
};
