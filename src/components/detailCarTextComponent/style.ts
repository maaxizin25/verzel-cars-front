import styled from "styled-components";

export const DetailCarTextComponentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 40%;
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-line-border);
    border-radius: 16px;
    span {
      padding: 10px;
      border-bottom: 1px solid var(--color-line-border);
    }
    span:nth-child(1) {
      display: flex;
      flex-direction: column;
    }
    .button-span {
      padding: 20px;
    }
    button {
      width: 100%;
      height: 60px;
      border-radius: 16px;
      background-color: var(--color-primary);
      color: white;
      font-size: 26px;
      font-weight: 400;
    }
  }
  ul {
    width: 100%;
    border-radius: 16px;
    border: 1px solid var(--color-line-border);
    padding: 10px;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      border-bottom: 1px solid var(--color-line-border);
    }
    .last-item {
      border: none;
      padding-bottom: 0px;
    }
  }
`;
