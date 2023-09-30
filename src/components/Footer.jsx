import React from "react";
import { AiFillGithub as GhLogo } from "react-icons/ai";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <>
      <section className="more-info">
        <div className="section-title">
          <h2>More information</h2>
        </div>

        <div className="info-content">
          <div className="description">
            <h3>About us</h3>
            <p>
              We're a worldwide pizzeria. We're using our own proprietary
              teleportation technology to deliver our pizzas, from our only
              location in Germany to anywhere in the world in under 42 minutes.
              Order and test it for yourself, if it's late the pizza is on us!
            </p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.59189135198!2d11.572873575702308!3d48.13739317124352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e248d37632d%3A0xdead51b35f0e0bb3!2sMarijin%20trg!5e0!3m2!1shr!2sde!4v1696015558117!5m2!1shr!2sde"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <footer>
        <p>Made by Kristijan Božinović, 2023.</p>
        <a href="https://github.com/krisboz" target="_blank">
          <GhLogo />
        </a>
      </footer>
    </>
  );
};

export default Footer;
