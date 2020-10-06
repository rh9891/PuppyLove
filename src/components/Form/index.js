import React from "react";
import "./style.css";

const Form = (props) => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="breed">Breed Name:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="breed"
        type="text"
        className="form-control"
        placeholder="Search a dog breed..."
        id="breed"
      />
    </div>
  </form>
);

export default Form;
