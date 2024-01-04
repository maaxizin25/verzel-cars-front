import { useContext } from "react";
import { CarsContext } from "../../context/carsContext";
import { ListCarComponentStyle } from "./style";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export const ListCarComponent = () => {
  const { announcementList } = useContext(CarsContext);
  const { loading } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <ListCarComponentStyle>
      <h2>Carros</h2>
      <ul>
        {loading ? (
          <h2>Carregando</h2>
        ) : (
          announcementList?.map((e) => (
            <li onClick={() => navigate(`detail/${e.id}`)} key={e.id}>
              <div>
                <img src={e.photos[0].image} alt="" />
              </div>
              <div className="texts">
                <h2>
                  {e.marca} • {e.model}
                </h2>
                <p>
                  {e.ano} • {e.km + "KM"} • {e.nome}
                </p>
              </div>
              <div className="price">
                <p>Preço a vista</p>
                <h2>R$ {e.valor}</h2>
              </div>
              <div className="saller">
                <p>Vendedor: {e.user.name}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </ListCarComponentStyle>
  );
};
