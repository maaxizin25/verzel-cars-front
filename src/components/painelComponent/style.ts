import styled from "styled-components";

export const PainelComponentStyle = styled.div`
  background-color: #1f1f1f !important;
  width: 303px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      color: var(--color-primary);
    }
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      li {
        padding: 15px 0px;
        padding-left: 10px;
        width: 100%;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: start;
        cursor: pointer;
        img {
          width: 30px;
        }
      }
      li:hover {
        background-color: red;
      }
    }
  }
  .logout-button {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 20px;
    padding: 15px;
    padding-left: 10px;
    cursor: pointer;
  }
  .logout-button:hover {
    background-color: red;
  }
`;
