import { AdminFunctionsComponents } from "../../components/adminFunctions";
import { NavBarComponent } from "../../components/navbarComponent";
import { PainelComponent } from "../../components/painelComponent";
import { AdminPageStyled } from "./style";

export const AdminPage = () => {
  return (
    <>
      <NavBarComponent />
      <AdminPageStyled>
        <div className="container-painel">
          <PainelComponent />
          <AdminFunctionsComponents />
        </div>
      </AdminPageStyled>
    </>
  );
};
