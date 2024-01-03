import styled from "styled-components";

export const NavBarStyled = styled.nav`
  .global-container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    max-width: 1600px;
    margin: 0 auto;
  }
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  div:nth-child(1) {
    h2 {
      color: var(--color-primary);
    }
  }
  .links-and-buttons-navbar {
    display: flex;
    align-items: center;
    gap: 20px;
    a {
      font-size: 22px;
      font-weight: 400;
      text-decoration: none;
      color: black;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding-left: 5px;
      border-left: 1px solid black;
      height: 100%;
      button {
        background-color: transparent;
        font-size: 22px;
      }
    }
  }
`;
