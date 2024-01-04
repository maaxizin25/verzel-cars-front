import { useContext } from "react";
import adminIcon1 from "../../assets/admin-icon1.svg";
import adminIcon2 from "../../assets/admin-icon2.svg";
import adminIcon3 from "../../assets/admin-icon3.svg";
import logoutIcon from "../../assets/logout-icon.svg";
import { PainelComponentStyle } from "./style";
import { UserContext } from "../../context/userContext";

export const PainelComponent = () => {
  const { userLogout, changePainelScreen } = useContext(UserContext);
  return (
    <PainelComponentStyle>
      <span>
        <span>
          <h2>PAINEL</h2>
        </span>
        <ul>
          <li
            onClick={() => {
              changePainelScreen("anuncio");
            }}
          >
            <img src={adminIcon1} alt="" />
            <p>Meus anúncios</p>
          </li>
          <li onClick={() => changePainelScreen("criar")}>
            <img src={adminIcon2} alt="" />
            <p>Criar anúncio</p>
          </li>
          <li onClick={() => changePainelScreen("conta")}>
            <img src={adminIcon3} alt="" />
            <p>Conta</p>
          </li>
        </ul>
      </span>
      <div className="logout-button">
        <img src={logoutIcon} alt="" />
        <p onClick={userLogout}>Logout</p>
      </div>
    </PainelComponentStyle>
  );
};
