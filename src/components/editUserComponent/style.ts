import styled from "styled-components";

export const EditUserComponentStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  width: 100% !important;
  border-radius: 8px;
  padding: 20px;
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    div:nth-child(1) {
      display: flex;
      width: 100%;
      div {
        display: flex;
        flex-direction: column;
      }
    }
    input,
    select,
    .fake-input {
      width: 404px;
      height: 50px;
      border: none;
      border-bottom: 1px solid var(--color-line-border);
      border-radius: 16px;
      margin-bottom: 15px;
      padding-left: 10px;
    }
    input:focus,
    select:focus {
      outline: none;
    }
    button {
      width: 450px;
      height: 55px;
      margin-bottom: 30px;
      padding: 10px;
      margin-top: 17px;
      background-color: red;
      color: white;
      font-size: 20px;
      border-radius: 8px;
    }
  }
`;
