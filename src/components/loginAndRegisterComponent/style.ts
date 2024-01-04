import styled from "styled-components";

export const LoginAndRegisterComponentStyle = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  div:nth-child(1) {
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 350px;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .closed-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: transparent;
      cursor: pointer;
      font-size: 20px;
    }
    span:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px 0px;
      border-bottom: 1px solid var(--color-line-border);
      width: 100%;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
      input {
        border: none;
        border-bottom: 1px solid var(--color-line-border);
        padding-bottom: 10px;
      }
      input::placeholder {
        font-size: 16px;
      }
      input:focus {
        outline: none;
      }
      button {
        height: 50px;
        background-color: var(--color-primary);
        color: white;
        font-weight: 900;
        font-size: 18px;
      }
    }
    .register-section {
      padding-left: 20px;
    }
  }
`;
