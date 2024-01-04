import { useContext } from "react";
import { DeleteAnnouncementComponentStyled } from "./style";
import { CarsContext } from "../../context/carsContext";

export const DeleteAnnouncementComponent = () => {
  const { changeOpenModalCars, deleteAnnouncement, buttonLoadingCars } =
    useContext(CarsContext);
  return (
    <DeleteAnnouncementComponentStyled>
      <h2>Deletar Anúncio?</h2>
      <div className="container-button">
        <button onClick={() => deleteAnnouncement()}>
          {buttonLoadingCars ? "Carregando..." : "Sim"}
        </button>
        <button onClick={() => changeOpenModalCars(null)}>Não</button>
      </div>
    </DeleteAnnouncementComponentStyled>
  );
};
