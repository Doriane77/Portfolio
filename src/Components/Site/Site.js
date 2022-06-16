import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";

function Site({ image, alt }) {
  let navigate = useNavigate();
  function handleClick() {
    navigate(`/creation`);
  }
  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        ".return",
        { duration: 0.2, rotate: 0 },
        { duration: 0.2, rotate: -20 }
      )
      .fromTo(
        ".return",
        { duration: 0.2, rotate: -20 },
        { duration: 0.2, rotate: 0 }
      )
      .fromTo(
        ".return",
        { duration: 0.2, rotate: 0 },
        { duration: 0.2, rotate: 20 }
      )
      .fromTo(
        ".return",
        { duration: 0.2, rotate: 20 },
        { duration: 0.2, rotate: 0 }
      )
      .repeat(1);
  });
  return (
    <div className="Site">
      <div className="return" onClick={handleClick}>
        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
      </div>
      <div className="SiteDescription">
        <div className="ImgSite">
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
}

export default Site;
