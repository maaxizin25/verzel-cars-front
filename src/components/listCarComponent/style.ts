import styled from "styled-components";

export const ListCarComponentStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1000px;
  max-width: 1020px;
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    li {
      max-width: 333px;
      background-color: #1f1f1f;
      border-radius: 16px;
      max-height: 450px;
      cursor: pointer;
      img {
        width: 100%;
        border-radius: 16px;
      }
      .texts {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: start;
        color: white;
        border-bottom: 1px solid var(--color-line-border);
        h2 {
          font-size: 32px;
          font-weight: 400;
        }
        p {
          color: #aaa;
        }
      }
      .price {
        padding: 10px;
        border-bottom: 1px solid var(--color-line-border);
        p {
          color: #aaa;
        }
        h2 {
          font-size: 32px;
          font-weight: 400;
          color: white;
        }
      }
      .saller {
        padding: 10px;
        p {
          color: #aaa;
        }
      }
    }
  }
`;
