import React from "react";
import cssStyles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${cssStyles.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
