import React from "react";

import Site from "../../Components/Site/Site";

import Marmitton from "../../Images/Sites/Marmitton.png";

function MarmittonPage() {
  return (
    <div className="MarmittonPage">
      <div className="BoxSite">
        <Site
          title="Marmitton"
          image={Marmitton}
          alt="recette Marmitton"
          description="Decrire le site"
        />
      </div>
    </div>
  );
}

export default MarmittonPage;
