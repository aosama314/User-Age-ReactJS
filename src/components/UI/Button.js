import React from "react";

import cssStyles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={cssStyles.button}
      type={props.buttonType || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
