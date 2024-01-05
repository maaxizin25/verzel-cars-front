import styled from "styled-components";

export const DetailPageStyle = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
  .return-title {
    position: absolute;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    p:nth-child(1) {
      text-decoration: underline;
      color: blue;
      cursor: pointer;
    }
  }
  max-width: 1600px;
  .container-details {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 20px;
    margin-top: 20px;
    gap: 50px;
    width: 100%;
  }
`;
