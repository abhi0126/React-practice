import React, { Component } from "react";

class Display extends Component {
  state = {
    title: "Display Component",
    imageUrl: 'https://picsum.photos/800/200'
  };
  render() {
    return (
      <React.Fragment>
        <h2>{this.state.title}</h2>
        <img src={this.state.imageUrl} alt="Scenery" />
        <h3>Hello World!</h3>
      </React.Fragment>
    );
  }
}

export default Display;
