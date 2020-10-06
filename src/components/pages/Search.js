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

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
    console.log(this.state.search);
  };

  render() {
    return (
      <Container style={{ fontFamily: "Proxima Nova Soft", minHeight: "80%" }}>
        <h1 className="text-center" style={{ fontFamily: "Proxima Nova Soft" }}>
          Search By Breed
        </h1>
        <Form handleInputChange={this.handleInputChange} />
        <Results />
      </Container>
    );
  }
}

export default Search;
