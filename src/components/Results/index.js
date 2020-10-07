import React from "react";
import "./style.css";

const Results = (props) => (
  <div id="results">
    {props.results.map((result) => (
      <img id="results-image" key={result} alt="dog" src={result} />
    ))}
  </div>
);

export default Results;
