import React from "react";
import "./style.css";

const Results = (props) => (
  <div className="container">
    {props.results.map((result) => (
      <div key={result} className="card col-sm">
        <div key={result} className="img-container">
          <img className="img-responsive" alt="" key={result} src={result} />
        </div>
      </div>
    ))}
  </div>
);

export default Results;
