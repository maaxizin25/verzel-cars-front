import styled from "styled-components";

export const EditAnnouncementStyle = styled.div`
  span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  form {
    display: flex;
    width: 600px;
    gap: 20px;
    height: 400px;
    div {
      display: flex;
      flex-direction: column;
      width: 50%;
    }
  }
  label {
    color: #575757;
    font-size: 12px;
  }
  input,
  select {
    margin-bottom: 10px;
    border: none;
    height: 30px;
    background-color: transparent;
    border-bottom: 1px solid var(--color-line-border);
  }
  input:focus {
    outline: none;
  }
  select:focus {
    outline: none;
  }
  .submit-button {
    position: absolute;
    bottom: 20px;
    left: 220px;
    width: 200px;
    height: 50px;
    border-radius: 8px;
    background-color: red;
    color: white;
    font-weight: 900;
    font-size: 18px;
  }
  p {
    color: red;
    font-size: 12px;
  }
`;
