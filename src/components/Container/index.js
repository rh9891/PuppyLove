import React from "react";

const Container = (props) => (
  <div
    className={`container${props.fluid ? "-fluid" : ""}`}
    {...props}
    style={{ fontFamily: "Proxima Nova Soft", marginBottom: "80px" }}
  />
);

export default Container;
