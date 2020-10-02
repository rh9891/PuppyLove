import React from "react";

const Container = (props) => (
  <div
    className={`container${props.fluid ? "-fluid" : ""}`}
    {...props}
    style={{ fontFamily: "Proxima Nova Soft" }}
  />
);

export default Container;
