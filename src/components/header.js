import { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import imgWeb from "../images/logoweb.png";
import imgAR from "../images/AR.png";
import imgVR from "../images/VR.png";
const HeaderContainer = styled.header`
  background: linear-gradient(-45deg, #01095e, #1a6ec1, #1a6ec1, #000a5f);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 300px;
  grid-template-columns: repeat(12, 0fr);

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @media (max-width: 414px) {
    height: 160px;
    background-size: 200% 200%;
  }
`;

const Nav = styled.nav`
  float: right;
  padding-top: 5rem;
  a {
    text-align: right;
    padding: 4rem 5rem;
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }
  a:hover {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #00094b,
      0 0 80px #00094b, 0 0 90px #00094b, 0 0 100px #00094b, 0 0 150px #00094b;
    text-align: center;
    font-size: 1.3rem;
    -moz-webkit-transition: 0.2s;
    -webkit-transition: 0.2s;
    animation: textColor 10s ease infinite;
    cursor: pointer;
  }
  @media (max-width: 414px) {
    padding-top: 2.2rem;

    a {
      font-size: 0.85rem;
    }
    a:hover {
      font-size: 0.85rem;
      cursor: none;
    }
  }
  @media (max-width: 360px) {
    a {
      padding: 5rem 4rem;
    }
  }
`;

const Iconos = styled.div`
  text-align: center;

  ul li {
    display: inline-block;
    margin: 90px 65px;
  }

  img {
    grid-column: 4 / 9;
    width: 90px;
    height: 90px;
    animation-duration: 3s;
    animation-name: slidein;
    float: right;
  }

  h3 {
    color: #fff;
    text-align: center;
    font-size: 1rem;
  }
  ul {
    display: inline-block;
    margin: 0 0.5rem;
    animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
  }

  @media (max-width: 414px) {
    ul li {
      display: inline-block;
      margin: 20px 5px;
    }
    h3 {
      font-size: 0.5rem;
    }
    img {
      grid-column: 9 / 9;
      width: 40px;
      height: 40px;
      animation: fadeIn;
    }
  }
`;
// const imgs = sty;

class header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Nav>
          <Link to="/">Inicio</Link>
          <Link to="acercaDe">Acerca De</Link>
        </Nav>
        <Iconos className="images">
          <ul className="animate__animated animate__fadeInLeft">
            <li>
              <img src={imgVR} alt="VR" />
              <h3 className="txt">Realidad Virtual</h3>
            </li>
            <li>
              <img src={imgAR} alt="AR" />
              <h3 className="txt">Realidad Aumentada</h3>
            </li>
            <li>
              <img
                className="animate__animated animate__bounceIn"
                src={imgWeb}
                alt="Web"
              />
              <h3 className="txt">Web</h3>
            </li>
          </ul>
        </Iconos>
      </HeaderContainer>
    );
  }
}

export default header;
