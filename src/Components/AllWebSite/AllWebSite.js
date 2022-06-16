import React from "react";

import gsap from "gsap";
import { useNavigate } from "react-router";

function AllWebSite({ image, alt, nav }) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/creation/${nav}`);
  }

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { width: 460, duration: 0.5 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { width: 420, duration: 0.5 });
  };
  return (
    <div
      className="AllWebSite"
      onClick={handleClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <img src={image} alt={alt} />
    </div>
  );
}

export default AllWebSite;
