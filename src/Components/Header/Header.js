import React from "react";

import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  let navigate = useNavigate();

  function handleNav(nav) {
    navigate(`/${nav}`);
  }

  return (
    <div className="box-Header">
      <div className="Header">
        <h1>Lollia Doriane</h1>

        <nav>
          <div className="nav-home" onClick={() => handleNav("")}>
            <FontAwesomeIcon icon="fa-solid fa-house" />
          </div>
          <ul onClick={() => handleNav("creation")}>CREATION</ul>
          <ul onClick={() => handleNav("contact")}>CONTACT</ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
