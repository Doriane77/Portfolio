import React from "react";

// Language img
import HTML from "../../Images/Logos/HTML.png";
import CSS from "../../Images/Logos/CSS.png";
import JS from "../../Images/Logos/JS.png";
import ReactLogo from "../../Images/Logos/logo-react.png";
import ReactNative from "../../Images/Logos/ReactNative.png";
import NodeJsLogo from "../../Images/Logos/nodejs.png";
// Outil img
import GitLogo from "../../Images/Logos/gitub.png";
import MongoDB from "../../Images/Logos/mongoDB.jpg";
import VScode from "../../Images/Logos/vs-logo.jpg";

// Site img
import Vinted from "../../Images/Sites/Vinted.png";
import Deliveroo from "../../Images/Sites/Deliveroo.png";
import Netflix from "../../Images/Sites/Netflix.png";
import Marmitton from "../../Images/Sites/Marmitton.png";
import Tripadvisor from "../../Images/Sites/Tripadvisor.png";

// Components
import Competence from "../../Components/Competence/Competence";
import AllWebSite from "../../Components/AllWebSite/AllWebSite";

function Creation() {
  return (
    <div className="Creation">
      <div className="Box-Competence">
        <Competence images={HTML} name="HTML" />
        <Competence images={CSS} name="CSS" />
        <Competence images={JS} name="Js" />
        <Competence images={ReactLogo} name="REACT" />
        <Competence images={ReactNative} name="ReactNative" />
        <Competence images={NodeJsLogo} name="NODE JS" />
        <Competence images={GitLogo} name="GITUB" />
        <Competence images={MongoDB} name="MONGODB" />
        <Competence images={VScode} name="VISUAL STUDIO CODE" />
      </div>
      <div className="BoxAllSite">
        <AllWebSite image={Vinted} alt="Site Vinted" nav="vinted" />
        <AllWebSite image={Deliveroo} alt="Site Deliveroo" nav="deliveroo" />
        <AllWebSite
          image={Tripadvisor}
          alt="Site Tripadvisor"
          nav="tripadvisor"
        />
        <AllWebSite image={Netflix} alt="Site Netflix" nav="netflix" />
        <AllWebSite image={Marmitton} alt="Site Marmiton" nav="marmiton" />
      </div>
    </div>
  );
}

export default Creation;
