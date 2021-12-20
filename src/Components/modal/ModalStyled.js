import styled from "styled-components";
export const ModalStyled = styled.div`
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
  }
  .suumary {
    margin: 0;
    padding-top: 10px;
    font-style: bold;
    text-shadow: -1px -1px #000, 0 1px 0 #444;
    color: #222;
    -webkit-transition: all 1s;
    transition: all 1s;
    font-size: 25px;
    line-height: 32px;
    padding: 5px;
  }
  .Modal {
    position: relative;
    width: 660px;
    height: 360px;
    background: #ffffff;
    border-radius: 20px;
    padding: 20px;
  }
`;
