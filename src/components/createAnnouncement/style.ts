import styled from "styled-components";

export const CreateAnnouncementeComponentStyle = styled.div`
  background-color: whitesmoke;
  padding: 20px;
  form {
    display: flex;
    flex-direction: column;
    gap: 50px;
    height: 700px;
    position: relative;
    input,
    select,
    .label-photo {
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
    .container-form {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 50px;
      div {
        display: flex;
        flex-direction: column;
      }
    }
    textarea {
      vertical-align: top;
      padding: 10px;
    }
    .submit-button {
      left: 350px;
      width: 200px;
      height: 50px;
      border-radius: 8px;
      background-color: red;
      color: white;
      font-weight: 900;
      font-size: 18px;
      margin: 0 auto;
    }
    .description-input {
      display: flex;
      align-items: flex-start;
      height: 200px !important;
    }
    .photo-div {
      input[type="file"] {
        display: none;
      }
      .label-photo {
        padding-top: 10px;
        display: flex;
        text-align: center;
        justify-content: center;
        border: 1px solid gray;
        cursor: pointer;
      }
      .label-photo:hover {
        color: white;
        background-color: black;
      }
    }
    p {
      color: red;
    }
  }
`;
