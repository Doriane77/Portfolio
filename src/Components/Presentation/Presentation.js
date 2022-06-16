import React from "react";
import Me from "../../Images/Moi.jpg";

function Presentation() {
  return (
    <div className="Box-Presentation">
      <div className="Img-Me">
        <img src={Me} alt="Lollia Doriane" />
      </div>
      <div className="AboutMe">
        <div className="Welcome">
          <h2>BONJOUR</h2>
          <div className="colone">
            <div className="barre1"></div>
            <div className="barre2"></div>
            <div className="barre3"></div>
            <p>et bienvenue !</p>
          </div>
          <p className="welcome">Sur mon Portfolio !</p>
        </div>
        <div className="Infos">
          <p>Je m'appelle</p>
          <span>Lollia Doriane.</span>
          <p>Je suis une</p>
          <span>développeuse Full Stack</span>
          <p>avec 2 années d'expériences en autodidacte.</p>

          {/* <div>
            <p>Perfectionniste, avide de connaissance et d'expérience.</p>
            <p>
              Je suis quelqu'un de patient, obstiné et très concentré dans mon
              travail.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Presentation;
