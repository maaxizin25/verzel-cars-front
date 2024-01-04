import styled from "styled-components";

export const DetailCarImgComponentStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 810px;
  div:nth-child(1) {
    img {
      border-radius: 16px;
      width: 100%;
    }
  }
  .img-preview {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    img {
      max-width: 150px;
      border-radius: 16px;
    }
  }
  .container-info {
    display: flex;
    gap: 20px;
    .info-one,
    .info-two {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 50%;
      div {
        padding-bottom: 10px;
        border-bottom: 1px solid var(--color-line-border);
      }
    }
  }
`;
