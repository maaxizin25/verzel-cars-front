import { ReactNode, useContext } from "react";
import { ModalComponentItensStyle } from "./style";
import { CarsContext } from "../../context/carsContext";

interface PropsModalComponent {
  children: ReactNode;
}

export const ModalComponentAnnouncementItens: React.FC<PropsModalComponent> = ({
  children,
}) => {
  const { changeOpenModalCars } = useContext(CarsContext);
  return (
    <ModalComponentItensStyle>
      <div className="modal">
        <p onClick={() => changeOpenModalCars(null)} className="closed-button">
          X
        </p>
        {children}
      </div>
    </ModalComponentItensStyle>
  );
};
