import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";

import MAP from "../../Images/map.png";
import MoreInfo from "../../Components/MoreInfo/Moreinfo";
import Footer from "../../Components/Footer/Footer";

function Contact() {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "white", backgroundColor: "#FF3841" });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#FF3841", backgroundColor: "#21272f" });
  };
  const [see, setSee] = useState(true);
  function handleSeeClick() {
    setSee(!see);
    console.log(see);
  }

  return (
    <div className="Contact">
      <div className="ContactImg">
        <a href="https://www.google.com/maps/dir/Paris+Gare+de+Lyon,+Place+Louis-Armand,+Paris">
          <img src={MAP} alt="google map" />
        </a>
      </div>

      {see ? (
        <div className="BoxContact">
          <p>Ou suis-je ?</p>
          <h2>Mon adresse</h2>
          <div>
            <div>
              <p>
                <FontAwesomeIcon
                  className="ContactIcon"
                  icon="fa-solid fa-location-dot"
                />
                77710 Lorrez-le-Bocage
              </p>
              <p>
                <FontAwesomeIcon
                  className="ContactIcon"
                  icon="fa-solid fa-phone"
                />
                06 79 91 51 31
              </p>
            </div>
            <div>
              <p>
                <FontAwesomeIcon
                  className="ContactIcon"
                  icon="fa-solid fa-location-arrow"
                />
                Paris îles-de-France
              </p>
              <p>
                <FontAwesomeIcon
                  className="ContactIcon"
                  icon="fa-solid fa-car"
                />
                Véhiculé
              </p>
            </div>
          </div>
          <div
            className="ContactButton"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            onClick={handleSeeClick}
          >
            <FontAwesomeIcon
              className="ContactIconButton"
              icon="fa-solid fa-map-location"
            />
            VOIR LOCALISATION
          </div>
        </div>
      ) : (
        <div className="ContactSeeLocation" onClick={handleSeeClick}>
          <FontAwesomeIcon
            className="ContactIconButton"
            icon="fa-solid fa-eye-slash"
          />
          VOIR COORDONNER
        </div>
      )}
      <MoreInfo />
      <Footer />
    </div>
  );
}

export default Contact;
