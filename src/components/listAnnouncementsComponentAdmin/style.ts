import styled from "styled-components";

export const ListAnnouncementsComponentsAdminStyle = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  height: 780px;
  width: 100%;
  max-width: 1000px;
  border-radius: 8px;
  .list-announcement-admin {
    width: 100%;
    display: flex;
    width: 100%;
    position: relative;
    padding: 30px;
    border-bottom: 1px solid var(--color-line-border);
    img {
      width: 242px;
      border-radius: 8px;
    }
    width: 100%;
    div {
      display: flex;
      gap: 10px;
      div {
        max-width: 443px;
        display: flex;
        flex-direction: column;
        span:nth-child(2) {
          display: flex;
          align-items: end;
          gap: 10px;
          height: 50px;
          position: relative;
          h3 {
            position: absolute;
            font-size: 40px;
            top: 10px;
            left: 25px;
          }
          p {
            text-align: s;
          }
        }
        span:nth-child(3) {
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }
    }
  }
  .menu-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    width: 20px !important;
    cursor: pointer;
  }
  .options-announcement-admin {
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 110px;
    height: 90px;
    right: 40px;
    top: 60px;
    background-color: white !important;
    button {
      padding: 10px;
      background-color: white;
      border-radius: 10px !important;
      border-bottom: 1px solid var(--color-line-border);
    }
    button:hover {
      color: white;
      background-color: red;
    }
  }
`;
