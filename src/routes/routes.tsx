import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage";

export const RoutersMain = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/detail/:id" component={DetailPage} />
    </Routes>
  );
};
