import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import optionsImg from "../../assets/menu-icon.svg";
import { ListAnnouncementsComponentsAdminStyle } from "./style";
import { useNavigate } from "react-router-dom";
import { ModalComponentAnnouncementItens } from "../modalComponentItens";
import { DeleteAnnouncementComponent } from "../deleteAnnouncement";
import { CarsContext } from "../../context/carsContext";
import { EditAnnouncement } from "../editAnnouncement";

export const ListAnnouncementsComponentAdmin = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [showMenuAnnouncement, setShowMenuAnnouncement] = useState(false);
  const { openModalCars, changeOpenModalCars, changeAnnouncementMark } =
    useContext(CarsContext);

  console.log(openModalCars);
  return (
    <ListAnnouncementsComponentsAdminStyle>
      {openModalCars === "delete" ? (
        <ModalComponentAnnouncementItens
          children={<DeleteAnnouncementComponent />}
        />
      ) : (
        openModalCars === "edit" && (
          <ModalComponentAnnouncementItens children={<EditAnnouncement />} />
        )
      )}

      {!user?.announcements ? (
        <h2>Sem anúncios no momento</h2>
      ) : (
        user.announcements.map((e) => (
          <li className="list-announcement-admin">
            <div>
              <span>
                <img src={e.photos[0].image} alt="" />
              </span>
              <div>
                <h2>{e.nome}</h2>
                <span>
                  <p>R$</p>
                  <h3>{e.valor}</h3>
                </span>
                <span>
                  <p>Ano</p>
                  <h3>{e.ano}</h3>
                </span>
              </div>
            </div>
            <img
              onClick={() => setShowMenuAnnouncement(!showMenuAnnouncement)}
              className="menu-icon"
              src={optionsImg}
              alt=""
            />
            {showMenuAnnouncement && (
              <span className="options-announcement-admin">
                <button onClick={() => navigate(`/detail/${e.id}`)}>
                  Ver anúncio
                </button>
                <button
                  onClick={() => {
                    changeAnnouncementMark(e);
                    changeOpenModalCars("edit");
                    setShowMenuAnnouncement(!showMenuAnnouncement);
                  }}
                >
                  Editar anúncio
                </button>
                <button
                  onClick={() => {
                    setShowMenuAnnouncement(!showMenuAnnouncement);
                    changeOpenModalCars("delete");
                  }}
                >
                  Deletar anúncio
                </button>
              </span>
            )}
          </li>
        ))
      )}
    </ListAnnouncementsComponentsAdminStyle>
  );
};
