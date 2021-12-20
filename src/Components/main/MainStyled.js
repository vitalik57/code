import styled from "styled-components";
export const MainStyled = styled.div`
  padding: 100px 0 94px;
  .hightlight {
    background: yellow;
  }
  .finder {
    text-align: center;
  }
  h1 {
    margin: 0;
    text-align: center;
    margin: 1 em 0 0.5 em 0;
    color: #343434;
    font-family: "Ultra", sans-serif;
    font-size: 44px;
    line-height: 60px;
    text-transform: uppercase;
    text-shadow: 0 2px white, 0 3px #777;
  }
  button {
    display: block;
    font-size: 1.1em;
    width: 120px;
    height: 60px;
    -webkit-text-decoration: none;
    text-decoration: none;
    text-align: center;
    font: bold 14px arial;
    text-transform: uppercase;
    padding: 10px 15px;
    position: absolute;
    bottom: 20px;
    left: 300px;
    color: #ccc;
    background-color: #555;
    background-image: linear-gradient(top, #888 0%, #555 100%);
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #888), color-stop(1, #555));
    background-image: -moz-linear-gradient(top, #888 0%, #555 100%);
    background-image: -o-linear-gradient(top, #888 0%, #555 100%);
    border: none;
    border-radius: 3px;
    text-shadow: 0px -1px 0px #000;
    box-shadow: 0px 1px 0px #666, 0px 5px 0px #444, 0px 6px 6px rgb(0 0 0 / 60%);
    -webkit-transition: ease 0.15s all;
    -moz-transition: ease 0.15s all;
    -o-transition: ease 0.15s all;
    -webkit-transition: ease 0.15s all;
    transition: ease 0.15s all;
    -webkit-animation: none;
    -moz-animation: none;
    -o-animation: none;
    -webkit-animation: none;
    animation: none;
  }
  input {
    margin-bottom: 40px;
    width: 587px;
    opacity: 0.7;
    box-sizing: border-box;
    outline: none;
    border-radius: 16px;
    padding: 10px 10px;
    color: #5b5b5b;
    border: 3px solid #c1c1c1;
    margin-top: 8px;
    font-size: 16px;
    line-height: 20px;
  }
  .list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-right: 0;
    margin-left: -30px;
    margin-top: -30px;
  }
  .title {
    padding-left: 10px;
    color: #343434;
    font-family: "Ultra", sans-serif;
    font-size: 34px;
    line-height: 40px;
    text-transform: uppercase;
    text-shadow: 0 2px white, 0 3px #777;
  }
  .text {
    padding-left: 10px;
    color: #343434;
    font-weight: normal;
    font-family: "Ultra", sans-serif;
    font-size: 20px;
    line-height: 32px;
    text-transform: uppercase;
    text-shadow: 0 2px white, 0 3px #777;
  }
  .card {
    border: 1px solid #eeeeee;
    box-sizing: border-box;
    margin-left: 30px;
    margin-top: 30px;
    width: 370px;
    margin-bottom: unset;
    border-radius: 2px;
  }
`;
