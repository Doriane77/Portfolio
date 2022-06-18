import React from "react";

import Site from "../../Components/Site/Site";

import Tripadvisor from "../../Images/Sites/Tripadvisor.png";

function TripadvisorPage() {
  return (
    <div className="TripadvisorPage">
      <div className="BoxSite">
        <Site
          title="Tripadvisor clone"
          image={Tripadvisor}
          alt="home tripadvison"
          description="Decrire le site"
        />
      </div>
    </div>
  );
}

export default TripadvisorPage;
