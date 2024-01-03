import { NavBarStyled } from "./style";
import iconImg from "../../assets/icon-login.svg";

export const NavBarComponent = () => {
  return (
    <NavBarStyled>
      <div className="global-container">
        <div>
          <h2>Verzel Cars</h2>
        </div>
        <div className="links-and-buttons-navbar">
          <a href="">Carros</a>
          <a href="">Contato</a>
          <div>
            <img src={iconImg} alt="" />
            <button>Login</button>
          </div>
        </div>
      </div>
    </NavBarStyled>
  );
};
