import styled from "styled-components";

export const DeleteAnnouncementComponentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  .container-button {
    width: 100%;
    display: flex;
    gap: 10px;
    button {
      width: 100%;
      height: 50px;
      border-radius: 16px;
      background-color: transparent;
      font-size: 16px;

      border: 1px solid var(--color-line-border);
    }
    button:hover {
      color: white;
      background-color: red;
    }
  }
`;
