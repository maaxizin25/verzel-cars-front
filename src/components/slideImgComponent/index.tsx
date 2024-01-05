import { useContext } from "react";
import imgCar from "../../assets/Img-Slide.png";
import { SlideImgComponentStyle } from "./style";
import { CarsContext } from "../../context/carsContext";

export const SlideImgComponent = () => {
  const { carFilter } = useContext(CarsContext);
  return (
    <SlideImgComponentStyle>
      <div className="container-slide">
        <img src={imgCar} alt="" />
        <div className="text-and-input">
          <p>Concessionária número 1 em vendas</p>
          <h2>Seu próximo carro está pertinho de você</h2>
          <input
            type="text"
            onChange={(e) => carFilter(e.target.value.toLowerCase())}
            placeholder="Busque por marca, modelo, ano, cor..."
          />
        </div>
      </div>
    </SlideImgComponentStyle>
  );
};
