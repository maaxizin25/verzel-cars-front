import { useContext } from "react";
import { CreateAnnouncementComponent } from "../createAnnouncement";
import { ListAnnouncementsComponentAdmin } from "../listAnnouncementsComponentAdmin";
import { AdminFunctionStyle } from "./style";
import { UserContext } from "../../context/userContext";
import { EditUserComponent } from "../editUserComponent";

export const AdminFunctionsComponents = () => {
  const { adminPainelFunction } = useContext(UserContext);
  console.log(adminPainelFunction);
  return (
    <AdminFunctionStyle>
      <h2>
        {adminPainelFunction === "anuncio"
          ? "Anúncios"
          : adminPainelFunction === "criar"
          ? "Criar anúncio"
          : "Conta"}
      </h2>
      {adminPainelFunction === "conta" && <p>Edite suas informações abaixo</p>}
      {adminPainelFunction === "criar" && <p>Insira suas informações abaixo</p>}
      {adminPainelFunction === "anuncio" && <ListAnnouncementsComponentAdmin />}
      {adminPainelFunction === "criar" && <CreateAnnouncementComponent />}
      {adminPainelFunction === "conta" && <EditUserComponent />}
    </AdminFunctionStyle>
  );
};
