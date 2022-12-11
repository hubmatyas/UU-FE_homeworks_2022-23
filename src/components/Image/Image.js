import React from "react";
import "./Image.css";

const Image = (props) => {
  return (
    <div className="image">
      <img src={props.imgSrc} alt={props.alt} />
    </div>
  );
};

export default Image;
