import React, { Component, Fragment } from "react";
import Card from "../Card";
import API from "../../utils/API";

class Discover extends Component {
  state = {
    image: "",
    matchCount: 0,
  };

  // When the component mounts, loads the next dog to be displayed.
  componentDidMount() {
    this.loadNextDog();
  }

  handleBtnClick = (event) => {
    // Gets the data-value of the clicked button.
    const buttonType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object. The object is modified and used to set the component's state.
    const newState = { ...this.state };

    if (buttonType === "pick") {
      // Sets the newState.match to be either true or false depending on whether or not the dog likes the user (1 out of 5 probability).
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Sets newState.matchCount equal to its current value (or its current value + 1) dependent on whether the dog likes the user back.
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If the dog is passed on, there is no match with the user.
      newState.match = false;
    }
    // Replaces the component's state with newState and loads the next dog image.
    this.setState(newState);
    this.loadNextDog();
  };

  loadNextDog = () => {
    API.getRandomDog()
      .then((res) =>
        this.setState({
          image: res.data.message,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Fragment>
        <h1
          className="text-center"
          style={{ fontFamily: "Proxima Nova Soft", marginTop: "20px" }}
        >
          Make New Friends
        </h1>
        <h3 className="text-center" style={{ fontFamily: "Proxima Nova Soft" }}>
          Show some love if there are any pups that you'd like to meet.
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1
          className="text-center"
          style={{ fontFamily: "Proxima Nova Soft", marginBottom: "80px" }}
        >
          You have matched with {this.state.matchCount} pups so far!
        </h1>
      </Fragment>
    );
  }
}

export default Discover;
