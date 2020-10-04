import React from "react";
import Button from "../Button";
import "./style.css";

const Card = (props) => {
  return (
    <div
      className="card"
      style={{ backgroundImage: props.image ? `url(${props.image})` : "none" }}
    >
      {!props.image && (
        <i className="fas fa-spinner fa-pulse" aria-hidden="true" />
      )}
      <Button
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pass"
      ></Button>
      <Button
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pick"
      ></Button>
    </div>
  );
};

export default Card;
