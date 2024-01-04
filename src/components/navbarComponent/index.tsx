import { NavBarStyled } from "./style";
import iconImg from "../../assets/icon-login.svg";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { LoginAndRegisterComponent } from "../loginAndRegisterComponent";

export const NavBarComponent = () => {
  const { modalUser, setStates, user, loading } = useContext(UserContext);

  return (
    <NavBarStyled>
      {modalUser && <LoginAndRegisterComponent />}
      <div className="global-container">
        <div>
          <h2>Verzel Cars</h2>
        </div>
        <div className="links-and-buttons-navbar">
          <a href="">Carros</a>
          <a href="">Contato</a>
          <div>
            <img src={iconImg} alt="" />
            {!user ? (
              <button onClick={() => setStates("modalUser", true)}>
                {loading ? "Carregando..." : "Login"}
              </button>
            ) : (
              <span className="loginUser">
                <h3>Olá,</h3>
                <p>{user.name}</p>
              </span>
            )}
          </div>
        </div>
      </div>
    </NavBarStyled>
  );
};
