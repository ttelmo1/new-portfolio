/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
// import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/capa-branca.png";
import iconems from "../images/iconems.png";
import perfil from "../images/perfil-zap.png";

const imageAltText = "Meu perfil no Hub da Microsoft Student Ambassadors";

const Home = ({ name, title, subtitle }) => {
  return (
    <section id="home" className="min-height">
      <div
        style={{
          background: "radial-gradient(circle, rgba(165,81,213,1) 0%, rgba(248,248,248,1) 61%)",
          minHeight: "100%",
        }}
      >
        <img className="profile" src={perfil} alt="" />
        <div style={{ position: "absolute", top: "40%", left: "36%", width: "45%" }}>
          <h1>{name}</h1>
          <h2>{title}</h2>
          <h2>{subtitle}</h2>
        </div>
        <div style={{ position: "absolute", bottom: "3rem", left: "80%" }}>
          <a href="https://mvp.microsoft.com/pt-BR/studentambassadors/profile/7c62eb51-9c42-4875-8116-0b30c75d3ab4">
            <img src={iconems} style={{ height: "100%", width: "100%" }} alt={imageAltText} />
          </a>
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
  subtitle: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Home;
