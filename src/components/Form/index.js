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
        list="breeds"
        type="text"
        className="form-control"
        placeholder="Search a dog breed..."
        id="breed"
      />
    </div>
    <datalist id="breeds">
      {props.breeds.map((breed) => (
        <option value={breed} key={breed} />
      ))}
    </datalist>
  </form>
);

export default Form;
