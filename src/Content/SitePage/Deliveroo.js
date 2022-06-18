import React from "react";

import Site from "../../Components/Site/Site";

import Deliveroo from "../../Images/Sites/Deliveroo.png";

function DeliverooPage() {
  return (
    <div className="Deliveroo">
      <div className="BoxSite">
        <Site
          title="Deliveroo page test clone"
          image={Deliveroo}
          alt="Site Deliveroo"
          description="Decrire le site Deliveroo"
        />
      </div>
    </div>
  );
}

export default DeliverooPage;
