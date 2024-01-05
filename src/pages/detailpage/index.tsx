import { useParams } from "react-router-dom";
import { DetailCarImgComponent } from "../../components/detailCarImgComponent";
import { DetailCarTextComponent } from "../../components/detailCarTextComponent/detailCarTextComponent";
import { NavBarComponent } from "../../components/navbarComponent";
import { DetailPageStyle } from "./style";
import { useContext, useEffect, useState } from "react";
import { CarsContext } from "../../context/carsContext";
import { useNavigate } from "react-router-dom";
import { tAnnouncement } from "../../context/carsContext/types";

export const DetailPage = () => {
  const { id } = useParams();
  const { announcementList } = useContext(CarsContext);
  const [car, setCar] = useState<tAnnouncement | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (announcementList) {
      const foundCar = announcementList.find((e) => e.id === Number(id));
      if (foundCar) {
        setCar(foundCar);
      }
    }
  }, [announcementList, id]);

  return (
    <>
      <NavBarComponent />
      {car ? (
        <DetailPageStyle>
          <div className="return-title">
            <p onClick={() => navigate("home")}>Carros</p>
            <p>{`> ${car.nome}`}</p>
          </div>

          <div className="container-details">
            <DetailCarImgComponent car={car} />
            <DetailCarTextComponent car={car} />
          </div>
        </DetailPageStyle>
      ) : (
        <h2>Carregando..</h2>
      )}
    </>
  );
};
