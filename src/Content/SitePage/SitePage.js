import React from "react";

function SitePage() {
  return (
    <div className="SitePage">
      <Site
        title="Deliveroo page test clone"
        image={Deliveroo}
        alt="Site Deliveroo"
        description="Decrire le site Deliveroo"
      />
      <Site
        title="Marmitton"
        image={Marmitton}
        alt="recette Marmitton"
        description="Decrire le site"
      />
      <Site
        title="Netflix"
        image={Netflix}
        alt="home Netflix"
        description="Decrire le site"
      />
      <Site
        title="Tripadvisor clone"
        image={Tripadvisor}
        alt="home tripadvison"
        description="Decrire le site"
      />
      <Site
        title="Vinted clone"
        image={Vinted}
        alt="Site Clone vinted"
        description="Decrire le site"
      />
    </div>
  );
}

export default SitePage;
