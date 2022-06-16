import React, { useEffect } from "react";

import { useRef } from "react";
import { gsap } from "gsap";

function Competence({ images, name }) {
  const boxRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { x: -boxRef.current.clientWidth, opacity: 0 },
      { x: 0, rotation: 360, opacity: 1, duration: 1 }
    );
  });
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      marginTop: 30,
      width: 140,
      height: 120,
      duration: 0.5,
    });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      marginTop: 0,
      width: 122,
      height: 100,
      duration: 0.5,
    });
  };
  return (
    <div
      className="Competence"
      ref={boxRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <img src={images} alt={name} />
    </div>
  );
}

export default Competence;
