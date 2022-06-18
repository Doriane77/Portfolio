import React from "react";

import Site from "../../Components/Site/Site";

import Netflix from "../../Images/Sites/Netflix.png";

function NetflixPage() {
  return (
    <div className="NetflixPage">
      <div className="BoxSite">
        <Site
          title="Netflix"
          image={Netflix}
          alt="home Netflix"
          description="Decrire le site"
        />
      </div>
    </div>
  );
}

export default NetflixPage;
