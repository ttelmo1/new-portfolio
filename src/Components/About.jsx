/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description = "Desenvolvedor full stack especializado em .NET e React.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "HTML/CSS",
  "JavaScript/SAPUI5",
  "React/Next.js",
  "C#/.NET",
  "Banco de dados SQL e NoSQL",
  "Metodologias ágeis",
  "Testes automatizados",
  "DevOps deployment",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
// const detailOrQuote =
//   "Atualmente trabalhando em soluções baseadas em JavaScript utilizando o framework SAPui5 e também C# utilizando .Net";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Um pouco sobre mim e curiosidades</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="facts" style={{ padding: "1rem 3rem 0" }}>
          Fora do trabalho sou voluntário como embaixador estudante da Microsoft no Brasil e
          anteriormente a minha transição de carreira, fui por 5 anos Cadete Aspirante a Oficial do
          Exército Brasileiro, onde pude conhecer a programação e de fato me apaixonar por resolver
          problemas utilizando a tecnologia, lá também participei de diversas atividades conjuntas
          conjuntas com militares de outras nações amigas, onde obtive certificações de idiomas em
          Inglês e Espanhol.
        </p>
      </div>
    </section>
  );
};

export default About;
