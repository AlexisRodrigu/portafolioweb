import { Component, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

import { Icon } from "semantic-ui-react";

import styled from "styled-components";

const FooterContainer = styled.div`
  display: grid;
  height: 19vh;
  grid-template: auto 1fr auto / auto 1fr auto;
  text-align: center;
  background: #104598;

  @media (max-width: 414px) {
    height: 20vh;
  }
  @media (max-width: 360px) {
    height: 22vh;
  }
`;

const Footer = styled.footer`
  padding: 2rem;
  grid-column: 1 / 4;
  color: #fff;
  /* espacio entre iconos */
  .icono {
    text-align: center;
    padding: 0 8rem;
  }
  h1 {
    font-family: "Montserrat", sans-serif;
    text-align: center;
    font-size: 1.8rem;
  }
  @media (max-width: 414px) {
    .icono {
      padding: 0rem 2.8rem;
    }
    h1 {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 360px) {
    .icono {
      text-align: center;
    }
    h1 {
      font-size: 0.95rem;
    }
  }
`;

class footer extends Component {
  render() {
    return (
      <FooterContainer>
        <Footer contenteditable>
          {window.screen.width >= 414 ? (
            <Fragment>
              <a
                href="https://api.whatsapp.com/send?phone=
								5215520112411&text=Que%20tal%20:D"
              >
                <Icon
                  inverted
                  color="white"
                  link
                  name="whatsapp"
                  size="huge"
                  className="icono"
                />
              </a>
              <a href="https://github.com/AlexisRodrigu?tab=repositories">
                <Icon
                  inverted
                  color="white"
                  link
                  name="github"
                  size="huge"
                  className="icono"
                />
              </a>
              <a href="mailto:dev.mikerod@gmail.com">
                <Icon
                  inverted
                  color="white"
                  link
                  name="mail"
                  size="huge"
                  className="icono"
                />
              </a>

              <h1>&copy; MikeRod Games</h1>
            </Fragment>
          ) : (
            <Fragment>
              <a
                href="https://api.whatsapp.com/send?phone=
              5215520112411&text=Que%20tal%20:D"
              >
                <Icon
                  inverted
                  color="white"
                  link
                  name="whatsapp"
                  size="big"
                  className="icono"
                />
              </a>
              <a href="https://github.com/AlexisRodrigu?tab=repositories">
                <Icon
                  inverted
                  color="white"
                  link
                  name="github"
                  size="big"
                  className="icono"
                />
              </a>
              <a href="mailto:dev.mikerod@gmail.com">
                <Icon
                  inverted
                  color="white"
                  link
                  name="mail"
                  size="big"
                  className="icono"
                />
              </a>

              <h1>&copy; MikeRod Games</h1>
            </Fragment>
          )}
        </Footer>
      </FooterContainer>
    );
  }
}

export default footer;
