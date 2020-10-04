import React, { Component, Fragment } from "react";
import Card from "../Card";
import API from "../../utils/API";

class Discover extends Component {
  state = {
    image: "",
    matchCount: 0,
  };

  componentDidMount() {
    this.loadNextDog();
  }

  handleBtnClick = (event) => {
    console.log(event);
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
        <h1 className="text-center" style={{ fontFamily: "Proxima Nova Soft" }}>
          Make New Friends
        </h1>
        <h3 className="text-center" style={{ fontFamily: "Proxima Nova Soft" }}>
          Show some love if there are any pups that you'd like to meet.
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <h1 className="text-center" style={{ fontFamily: "Proxima Nova Soft" }}>
          Made friends with {this.state.matchCount} pups so far!
        </h1>
      </Fragment>
    );
  }
}

export default Discover;
