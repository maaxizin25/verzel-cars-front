import styled from "styled-components";

export const ModalComponentItensStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  .modal {
    background-color: white;
    position: relative;
    max-width: 1200px;
    padding: 20px;
    border-radius: 16px;
    .closed-button {
      position: absolute;
      right: 20px;
      cursor: pointer;
    }
  }
`;
