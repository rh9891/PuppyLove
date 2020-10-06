import React, { Component } from "react";
import Container from "../Container/";
import Form from "../Form";
import Results from "../Results";

class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
  };

  render() {
    return (
      <Container style={{ fontFamily: "Proxima Nova Soft", minHeight: "80%" }}>
        <h1 className="text-center" style={{ fontFamily: "Proxima Nova Soft" }}>
          Search By Breed
        </h1>
        <Form />
        <Results />
      </Container>
    );
  }
}

export default Search;
