import { useParams } from "react-router-dom";
import { DetailCarImgComponent } from "../../components/detailCarImgComponent";
import { DetailCarTextComponent } from "../../components/detailCarTextComponent/detailCarTextComponent";
import { NavBarComponent } from "../../components/navbarComponent";
import { DetailPageStyle } from "./style";
import { useContext } from "react";
import { CarsContext } from "../../context/carsContext";

export const DetailPage = () => {
  const { id } = useParams();
  const { announcementList } = useContext(CarsContext);

  const car = announcementList!.find((e) => e.id === Number(id));

  if (car) {
    return (
      <>
        <NavBarComponent />
        <p style={{ padding: "10px 20px" }}>{"Carros > Carro Nome"}</p>
        <DetailPageStyle>
          <DetailCarImgComponent car={car} />
          <DetailCarTextComponent car={car} />
        </DetailPageStyle>
      </>
    );
  }
};
