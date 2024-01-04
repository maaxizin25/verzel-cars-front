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
      margin-left: 60px;
      padding-left: 5px;
      border-left: 1px solid black;
      height: 100%;
      position: relative;
      cursor: pointer;
      button {
        background-color: transparent;
        font-size: 22px;
      }
      .loginUser {
        font-size: 15px;
      }
    }
    .modalOptions {
      top: 45px;
      z-index: 1000;
      display: flex;
      padding: 20px 0px;
      flex-direction: column;
      gap: 10px;
      align-items: start;
      width: 80px;
      position: absolute;
      background-color: white;
      height: 80px;
      right: 0px;
      padding: 20px 10px;
      border-radius: 0px 0px 8px 8px;
      p {
        cursor: pointer;
        padding: 5px;
        border-radius: 8px;
        font-weight: 900;
      }
      p:hover {
        background-color: red;
        color: white;
      }
    }
  }
`;
