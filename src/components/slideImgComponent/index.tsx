import imgCar from "../../assets/Img-Slide.png";
import { SlideImgComponentStyle } from "./style";

export const SlideImgComponent = () => {
  return (
    <SlideImgComponentStyle>
      <div className="container-slide">
        <img src={imgCar} alt="" />
        <div className="text-and-input">
          <p>Concessionária número 1 em vendas</p>
          <h2>Seu próximo carro está pertinho de você</h2>
          <input
            type="text"
            placeholder="Busque por marca, modelo, ano, cor..."
          />
        </div>
      </div>
    </SlideImgComponentStyle>
  );
};
