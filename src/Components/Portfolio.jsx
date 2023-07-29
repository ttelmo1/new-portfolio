/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/programming.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Driven.t, admnistração de eventos",
    description:
      "Interface amigável totalmtente estilizada em React pronta para buscar uma API utilizando Nodejs e banco da dados PostgreSQL.",
    url: "https://github.com/orgs/Drivent-G1-Grupo7/repositories",
  },
  {
    title: "Bate papo API",
    description:
      "Uma api pensada para ser utilizada em um chat online em tempor real, buscando e armazenando as mensagens dos usuários e também capacitada para armazenar horários.",
    url: "https://github.com/ttelmo1/batepapo-uol-api",
  },
  {
    title: "Shortly, um encurtador de links",
    description:
      "Uma aplicação web que recebe um link e retorna um link encurtado, utilizando Nodejs e banco de dados PostgreSQL.",
    url: "https://github.com/ttelmo1/shortly-api/tree/main",
  },
  {
    title: "Meus artigos no Medium!",
    description:
      "Uma página onde compartilho algumas ideias e conhecimentos comigo mesmo e para toda comunidade dev.",
    url: "https://medium.com/@telmobsj",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Alguns de meus projetos</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="medium">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
