import { useState } from "react";
import { FilterCarComponentStyle } from "./style";

export const FilterCarComponent = () => {
  const [priceValue, setPriceValue] = useState(0);
  const [priceKm, setPriceKm] = useState(0);

  const handleRangeChange = (
    name: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (name === "price") {
      setPriceValue(Number(e.target.value));
    } else if (name === "km") {
      setPriceKm(Number(e.target.value));
    }
  };

  return (
    <FilterCarComponentStyle>
      <div>
        <h2>Filtros - Em andamento</h2>
        <p className="clear-filter">Limpar Filtros</p>
      </div>
      <ul>
        <li>
          <span>
            <h2>Marca</h2>
          </span>
          <div>
            <button>Hyudai</button>
            <button>Hyudai</button>
            <button>Hyudai</button>
            <button>Hyudai</button>
            <button>Hyudai</button>
          </div>
        </li>
        <li>
          <span>
            <h2>Ano</h2>
          </span>
          <div>
            <button>Hyudai</button>
            <button>Hyudai</button>
            <button>Hyudai</button>
            <button>Hyudai</button>
            <button>Hyudai</button>
          </div>
        </li>
        <li>
          <span>
            <h2>Preço</h2>
          </span>
          <div>
            <p className="value">{priceValue}</p>
            <input
              className="range-input"
              type="range"
              min={1}
              max={100}
              value={priceValue}
              onChange={(e) => handleRangeChange("price", e)}
            />
          </div>
        </li>
        <li>
          <span>
            <h2>Cor</h2>
          </span>
          <div>
            <button>Branco</button>
            <button>Cinza</button>
          </div>
        </li>
        <li>
          <span>
            <h2>KM</h2>
          </span>
          <div>
            <p className="value">{priceKm} </p>
            <input
              type="range"
              min={1}
              max={100}
              value={priceKm}
              onChange={(e) => handleRangeChange("km", e)}
            />
          </div>
        </li>
      </ul>
    </FilterCarComponentStyle>
  );
};
