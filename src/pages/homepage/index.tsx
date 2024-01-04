import { FilterCarComponent } from "../../components/filterCarComponent";
import { ListCarComponent } from "../../components/listCarComponent/listCarComponent";
import { NavBarComponent } from "../../components/navbarComponent";
import { SlideImgComponent } from "../../components/slideImgComponent";
import { HomePageStyled } from "./style";

export const HomePage = () => {
  return (
    <>
      <NavBarComponent />
      <SlideImgComponent />
      <HomePageStyled>
        <FilterCarComponent />
        <ListCarComponent />
      </HomePageStyled>
    </>
  );
};
