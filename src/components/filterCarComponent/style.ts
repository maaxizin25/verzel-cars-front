import styled from "styled-components";

export const FilterCarComponentStyle = styled.div`
  max-width: 258px;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    p {
      color: red;
      font-weight: 900;
    }
  }
  ul {
    width: 100%;
    li {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 100%;
      border-bottom: 1px solid var(--color-line-border);
      span {
        padding: 10px;
        h2 {
          font-size: 18px;
        }
      }
      input {
        border: 1px solid;
        border-radius: 16px;
        width: 100%;
        accent-color: red;
      }
      div {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding: 10px;
        button {
          width: 110px;
          height: 30px;
          border: 1px solid var(--color-line-border);
          background-color: white;
          border-radius: 8px;
        }
        button:hover {
          background-color: red;
          color: white;
        }
      }
    }
  }
`;
