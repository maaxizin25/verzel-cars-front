import React from "react";
import warranty1 from "../../assets/item-warranty1.svg";
import warranty2 from "../../assets/item-warranty2.svg";
import warranty3 from "../../assets/item-warranty3.svg";
import warranty4 from "../../assets/item-warranty4.svg";
import warranty5 from "../../assets/item-warranty5.svg";
import { DetailCarTextComponentStyled } from "./style";
import { tAnnouncement } from "../../context/carsContext/types";

interface DetailCar {
  car: tAnnouncement;
}

export const DetailCarTextComponent: React.FC<DetailCar> = ({ car }) => {
  return (
    <DetailCarTextComponentStyled>
      <div>
        <span>
          <h2>{car.nome}</h2>
          <p>
            {car.km + "KM"} • {"São Paulo"}
          </p>
        </span>
        <span>
          <p>R$</p>
          <h3>{car.valor}</h3>
        </span>
        <span>
          <p>Ano</p>
          {car.ano}
        </span>
        <span>
          <p>Versão</p>
          <h3>{car.model}</h3>
        </span>
        <span>
          <p>Transmissão</p>
          <h3>{car.transmissao === "M" ? "Manual" : "Automático"}</h3>
        </span>
        <span className="button-span">
          <button>Reservar ou Agendar Visita</button>
        </span>
      </div>
      <ul>
        <li>
          <img src={warranty1} alt="" />
          <p>90 dias de garantia legal</p>
        </li>
        <li>
          <img src={warranty2} alt="" />
          <p>Teste de 7 dias ou 300 km</p>
        </li>
        <li>
          <img src={warranty3} alt="" />
          <p>Inspeção de 240 itens</p>
        </li>
        <li>
          <img src={warranty4} alt="" />
          <p>Bônus na troca</p>
        </li>
        <li className="last-item">
          <img src={warranty5} alt="" />
          <p>Compramos seu carro em até 24 hrs</p>
        </li>
      </ul>
    </DetailCarTextComponentStyled>
  );
};
