import React from "react";
import { DetailCarImgComponentStyle } from "./style";
import { tAnnouncement } from "../../context/carsContext/types";

interface DetailCarImgComponentProps {
  car: tAnnouncement;
}

export const DetailCarImgComponent: React.FC<DetailCarImgComponentProps> = ({
  car,
}) => {
  return (
    <DetailCarImgComponentStyle>
      <div>
        <img src={car.photos[0].image} alt="" />
      </div>
      <div className="img-preview">
        {car.photos.map((e) => {
          return <img src={e.image} key={e.id} alt="" />;
        })}
      </div>
      <span>
        <h2>Informações Báicas</h2>
      </span>
      <div className="container-info">
        <div className="info-one">
          <div>
            <p>Cidade</p>
            <h3>São paulo</h3>
          </div>
          <div>
            <p>Placa</p>
            <h3>{car.placa}</h3>
          </div>
        </div>
        <div className="info-two">
          <div>
            <p>Tranmissão</p>
            <h3>{car.transmissao == "M" ? "Manual" : "Automático"}</h3>
          </div>
          <div>
            <p>Loja</p>
            <h3>Online</h3>
          </div>
        </div>
      </div>
      <div className="description">
        <span>
          <h2>Descrição do Vendedor</h2>
        </span>
        <p>{car.descricao}</p>
      </div>
    </DetailCarImgComponentStyle>
  );
};
