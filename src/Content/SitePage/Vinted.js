import React from "react";
import { useState } from "react";

import Site from "../../Components/Site/Site";

import Vinted from "../../Images/Sites/Vinted.png";
import GitUb from "../../Images/Logos/gitub.png";

import Languages from "../../Components/Languages/Language";
import Icon from "../../Components/Icon/Icon";

function VintedPage() {
  const [languages] = useState({
    react: true,
    html: true,
    css: true,
    js: true,
    nodejs: true,
    reactNative: false,
    mongodb: true,
  });
  return (
    <div className="VintedPage">
      <div className="BoxSite">
        <h2>Vinted Clone</h2>
        <div className="BoxDescription">
          <Site image={Vinted} alt="Site Clone vinted" />
          <div className="Description">
            <p>
              Clone du célèbre site e-commerce circulaire Vinted, que j'ai
              entièrement coder.
            </p>
            <p>
              Le Site est entièrement fonctionnelle, un utilisateur peur
              s'inscrire, publier une offre, la modifier ou la suprimer. Il va
              aussi pouvoir acheter un article présent sur le site.
            </p>
            <p>
              Pour cela il m'a fallu une base de données faite avec Atlas
              MongoDb
            </p>
            <p>
              Le backend quand à lui à été fait avec NodeJS ainsi que le
              Framework Express.
            </p>
            <p>
              Afin d'effectuer le traitement des paiements en ligne, j'utilise
              l'API dédiée au commerce Stripe.
            </p>
            <div className="LinkGit">
              <p>Voir </p>
              <a href="https://clone-vinted-ld-frontend.netlify.app/">
                <Icon images={GitUb} name={"GitUb"} />
              </a>
            </div>
          </div>
        </div>

        <Languages languages={languages} />
      </div>
    </div>
  );
}

export default VintedPage;
