import styled from "styled-components";

export const SlideImgComponentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  .container-slide {
    position: relative;
    margin: 0 auto;
    height: 300px;
    width: 100%;
    max-width: 1600px;
    img {
      z-index: -1;
      height: 100%;
      width: 100%;
    }
    .text-and-input {
      position: absolute;
      top: 40%;
      position: absolute;
      margin: 0 auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      p,
      h2 {
        color: white;
        font-weight: 900;
      }
      h2 {
        font-size: 32px;
      }
      input {
        width: 100%;
        max-width: 619px;
        height: 50px;
        border-radius: 16px;
        border: none;
        padding-left: 20px;
      }
      input::placeholder {
        font-size: 17px;
        color: #aaa;
      }
    }
  }
`;
