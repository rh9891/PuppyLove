import React from "react";
import "./style.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`card-btn ${props["data-value"]}`}
      {...props}
    />
  );
};

export default Button;
