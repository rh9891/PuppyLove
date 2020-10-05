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
    const buttonType = event.target.attribute.getNamedItem("data-value").value;
    console.log(buttonType);
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
          style={{ fontFamily: "Proxima Nova Soft", marginBottom: "20px" }}
        >
          Made friends with {this.state.matchCount} pups so far!
        </h1>
      </Fragment>
    );
  }
}

export default Discover;
