import { Container, Image, List, Label } from "semantic-ui-react";

import IconoHmtl from "../images/Icons/html.png";

import IconoCSS from "../images/Icons/css3logo.png";
import IconoJS from "../images/Icons/js.png";
import IconoReact from "../images/Icons/reactjs.png";
import IconoFigma from "../images/Icons/figmalogo.png";
import IconoAdobexd from "../images/Icons/xdlogo.png";
import IconoPython from "../images/Icons/pythonlogo.png";
import IconoGit from "../images/Icons/githublogo.png";
import IconoUnity from "../images/Icons/UnityIcon.png";
import IconoCsharp from "../images/Icons/CSharplogo.png";
import IconoGoogleVR from "../images/Icons/GoogleVRIcon.png";
import IconoIlustrator from "../images/Icons/AILogo.png";
import IconoPhotoshop from "../images/Icons/phslogo.png";

import MikeRod from "../images/MikeRod.png";
import styled from "styled-components";

// StyledComponents
const Section = styled.section`
  grid-template-columns: repeat(12, 1fr);
`;
const Titulo = styled.h2`
  padding: 2rem;
  text-align: center;

  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  @media (max-width: 414px) {
    font-size: 1.5rem;
    padding: 0.5rem;
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-wrap: wrap;
  .left {
    flex: 0 2 100px;
    flex: 1 2 100px;
    border: 1px solid #fdfdfd;

    font-size: 2rem;
    text-align: center;
  }

  p {
    text-align: justify;
    -webkit-hyphens: auto; /* A día de hoy aún es necesario el prefijo para soportar a Safari */
    hyphens: auto;
    font-size: 1.2rem;
    color: #0f0f0f;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    line-height: 3rem;
    margin-top: 8rem;
  }
  @media (max-width: 414px) {
    img {
      height: 280px;
    }
    p {
      margin-top: 3.8rem;
      font-size: 1rem;
      line-height: 1.2rem;
    }
  }
  @media (max-width: 360px) {
    p {
      margin-top: 3rem;
      font-size: 0.8rem;
    }
  }
`;

const ListaContainer = styled.div`
  h1 {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin-top: 2rem;
  }
  .horizontal {
    margin-left: 3rem;
  }
  .image {
    animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2.5s;
    padding: 40px 20px;
  }

  //Etiquetas
  .labels {
    margin: 1rem 10rem;
  }
  @media (max-width: 414px) {
    h1 {
      font-size: 1.5rem;
      margin-top: 0.5rem;
    }
    .horizontal {
      margin-left: 3.85rem;
    }
    .image {
      padding: 1px 25px;
    }
  }
  @media (max-width: 360px) {
    .horizontal {
      margin-left: 3rem;
    }
    .image {
      padding: 1px 25px;
    }
  }
`;

///Termina estilos

const acercaDe = () => {
  return (
    <Section>
      <Titulo> Acerca de mi</Titulo>
      <Container>
        <Contenido id="textbox">
          <div class="left">
            <img src={MikeRod} alt="MikeRod" />
          </div>
          <div class="left">
            <p>
              Programador con alta capacidad creativa, en mi instancia como
              desarrollador me he enfocado a los retos y cumplir con los
              diversos objetivos que se van poniendo en mi camino, conservando
              la calidad del producto y mi código.
            </p>
          </div>
        </Contenido>
        <ListaContainer>
          <h1>Conocimientos</h1>
          <List horizontal>
            <List.Item>
              <Image src={IconoHmtl} size="tiny" />
              <Image src={IconoCSS} size="tiny" />
              <Image src={IconoJS} size="tiny" />
              <Image src={IconoReact} size="tiny" />
              <Image src={IconoFigma} size="tiny" />
              <Image src={IconoAdobexd} size="tiny" />
              <Image src={IconoUnity} size="tiny" />
              <Image src={IconoCsharp} size="tiny" />
              <Image src={IconoGoogleVR} size="tiny" />
              <Image src={IconoIlustrator} size="tiny" />
              <Image src={IconoPhotoshop} size="tiny" />
              <Image src={IconoPython} size="tiny" />
              <Image src={IconoGit} size="tiny" />
            </List.Item>
          </List>

          <Label.Group size="small">
            <Label color="blue">Html5</Label>
            <Label color="blue">CCS</Label>
            <Label color="blue">JS</Label>
            <Label color="blue">ReactJS</Label>
            <Label color="blue">Figma</Label>
            <Label color="blue">AdobeXd</Label>
            <Label color="blue">Unity</Label>
            <Label color="blue">C#</Label>
            <Label color="blue">AR & VR</Label>
            <Label color="blue">Adobe Ilustrator</Label>
            <Label color="blue">Adobe Photoshop</Label>
            <Label color="blue">Python</Label>
            <Label color="blue">GitHub</Label>
          </Label.Group>
        </ListaContainer>
      </Container>
    </Section>
  );
};
export default acercaDe;
