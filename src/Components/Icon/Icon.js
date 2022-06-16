import React from "react";

function Icon({ images, name }) {
  return (
    <div className="Icon">
      <img src={images} alt={name} />
    </div>
  );
}

export default Icon;
