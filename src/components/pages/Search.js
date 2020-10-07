import React, { Component } from "react";
import Container from "../Container/";
import Form from "../Form";
import Results from "../Results";
import Alert from "../Alert";
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

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getDogBreed(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    return (
      <Container style={{ fontFamily: "Proxima Nova Soft", minHeight: "80%" }}>
        <h1
          className="text-center"
          style={{ fontFamily: "Proxima Nova Soft", marginTop: "20px" }}
        >
          Search By Breed
        </h1>
        <Alert
          type="danger"
          style={{ opacity: this.state.error ? 1 : 0, marginButton: 10 }}
        >
          {this.state.error}
        </Alert>
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          breeds={this.state.breeds}
        />
        <Results results={this.state.results} />
      </Container>
    );
  }
}

export default Search;
