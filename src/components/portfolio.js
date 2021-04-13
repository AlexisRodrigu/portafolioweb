import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";

import criptoWeb from "../images/PortfolioWeb/AppCripto.jpg";
import climaWeb from "../images/PortfolioWeb/Appclima.jpg";
import discoWeb from "../images/PortfolioWeb/Discoteca.png";

import tiendaWeb from "../images/PortfolioWeb/TiendaOnline.png";

import styled from "styled-components";

const Section = styled.section`
  margin-top: 1rem;
  grid-template-columns: repeat(12, 1fr);
`;

const Titulo = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;

  @media (max-width: 414px) {
    font-size: 1.5rem;
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-wrap: wrap;

  .videoLeft {
    flex: 0 2 300px;
    flex: 1 2 300px;
    border: 1px solid #ececec;
    background: #f3faff;
    font-size: 1rem;
    text-align: center;
    border-radius: 0.5rem;
  }

  img {
    width: 512px;
    height: 256px;
  }
  .videoRight {
    flex: 1 2 300px;
    flex: 2 2 300px;
    border: 1px solid #fdfdfd;
    background: #f1ffff;
    font-size: 2rem;
    text-align: center;
    border-radius: 0.5rem;
  }
  p {
    line-height: 2rem;
    text-align: center;
    font-size: 1.3rem;
    margin: 6rem 2rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    text-align: justify;
    -webkit-hyphens: auto; /* A día de hoy aún es necesario el prefijo para soportar a Safari */
    hyphens: auto;
  }

  @media (max-width: 414px) {
    border: 0.5px solid rgba(0, 0, 0, 0.25);
    margin-bottom: 1rem;
    iframe {
      width: 300px;
      height: 250px;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const contenido = [
  {
    id: 0,
    infoVideo:
      "App que te da el clima - HTML, CSS & Javascript. Clic en la imagen para visitar el sitio web",

    urlgit: (
      <a title="appclima" href="https://webmiclima.netlify.app">
        <img src={climaWeb} alt="appclima" />
      </a>
    ),
    urlVideo: (
      <a title="appclima" href="https://webmiclima.netlify.app">
        <img src={climaWeb} alt="criptoweb" />
      </a>
    ),
  },
  {
    id: 1,
    infoVideo:
      "App que te da el valor de una criptomoneda de acuerdo a la moneda que eligas - HTML, CSS & Javascript. Clic en la imagen para visitar el sitio web",
    urlVideo: (
      <a title="criptoweb" href="https://valorcriptomoneda.netlify.app">
        <img src={criptoWeb} alt="criptoweb" />
      </a>
    ),
  },
  {
    id: 2,
    infoVideo:
      "Landing Page Discoteca - HTML, CSS, Javascript & JQuery. Clic en la imagen para visitar el sitio web",
    urlVideo: (
      <a
        title="discoweb"
        href="https://alexisrodrigu.github.io/WebsiteDiscoteca/"
      >
        <img src={discoWeb} alt="discoweb" />
      </a>
    ),
  },
  {
    id: 3,
    infoVideo:
      "Landing Page Tienda Online - HTML & CSS. Clic en la imagen para visitar el sitio web",
    urlVideo: (
      <a
        title="tiendaonline"
        href="https://alexisrodrigu.github.io/WebsiteTiendaRopa/"
      >
        <img src={tiendaWeb} alt="tiendaonline" />
      </a>
    ),
  },
  {
    id: 4,
    infoVideo:
      "Echa un vistazo a los productos Idemitsu con este catálogo en realidad aumentada donde podras ver los diferentes productos de una forma interactiva. Realizado con Unity & Vuforia.",
    urlVideo: (
      <iframe
        title="catalogoar"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QNipeUKXZ4s"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 5,
    infoVideo:
      "¿Quieres sentirte bombero por un día? Prueba este simulador y muestra que puedes ser igual que uno e intenta apagar el fuego. Realizado con Unity & GoogleVR ",
    urlVideo: (
      <iframe
        title="bomberVR"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/W4jgYvxSM20"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    id: 6,
    infoVideo:
      "Entra en un mundo jurasico y realiza un recorrido en realidad virtual disfrutando de los dinosaurios en tamaño real que estan a tu alrededor. Realizado con GoogleVR",
    urlVideo: (
      <iframe
        title="jurasicvr"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Y1AwH4Gg8AE"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
];

const portfolio = () => {
  return (
    <Section>
      <Titulo> Portafolio</Titulo>
      <Container>
        {contenido.map((seccion) =>
          seccion.id % 2 === 0 ? (
            <Fragment>
              <Contenido id="textbox">
                <div class="videoLeft">
                  <p>{seccion.infoVideo}</p>
                </div>
                <div class="videoLeft">{seccion.urlVideo}</div>
              </Contenido>
              ​
            </Fragment>
          ) : (
            <Fragment>
              <Contenido id="textbox">
                <div class="videoRight">{seccion.urlVideo}</div>

                <div class="videoRight">
                  <p>{seccion.infoVideo}</p>
                </div>
              </Contenido>
            </Fragment>
          )
        )}
      </Container>
    </Section>
  );
};

export default portfolio;
