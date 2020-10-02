import React from "react";

const Row = (props) => (
  <div
    className={`row${props.fluid ? "-fluid" : ""}`}
    {...props}
    style={{ fontFamily: "Proxima Nova Soft" }}
  />
);

export default Row;
