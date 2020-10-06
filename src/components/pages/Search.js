import React, { Component } from "react";
import Container from "../Container/";
import Form from "../Form";
import Results from "../Results";
import API from "../../utils/API";

class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
  };

  // When the component mounts, a list of the dog breeds will be made available and update the state (breeds).
  componentDidMount() {
    API.getBreedsList()
      .then((res) => this.setState({ breeds: res.data.message }))
      .catch((err) => console.log(err));
  }

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
        <Form
          handleInputChange={this.handleInputChange}
          breeds={this.state.breeds}
        />
        <Results />
      </Container>
    );
  }
}

export default Search;
