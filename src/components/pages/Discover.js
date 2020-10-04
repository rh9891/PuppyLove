import React, { Component, Fragment } from "react";

class Discover extends Component {
  state = {
    image: "",
    matchCount: 0,
  };
  //   <h1 style={{ fontFamily: "Proxima Nova Soft" }}>Discover</h1>
  render() {
    return (
      <Fragment>
        <h1 className="text-center" style={{ fontFamily: "Proxima Nova Soft" }}>
          Make New Friends
        </h1>
        <h3 className="text-center" style={{ fontFamily: "Proxima Nova Soft" }}>
          Show some love if there are any pups that you'd like to meet.
        </h3>
        <h1 className="text-center" style={{ fontFamily: "Proxima Nova Soft" }}>
          Made friends with {this.state.matchCount} pups so far!
        </h1>
      </Fragment>
    );
  }
}

export default Discover;
