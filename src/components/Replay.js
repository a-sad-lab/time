import React, { Component } from "react";
// import { Player } from "timecatjs";

export default class Replay extends Component {
  // player = undefined;
  async componentDidMount() {
    // this.player = new Player({
    //   target: ".timecat-replay"
    // });
  }
  async componentWillUnmount() {
    // this.player.destroy && this.player.destroy()
  }
  render() {
    return (
      <div>
        <h2>Replay</h2>
        <div
          className="timecat-replay"
          style={{ margin: "0 auto", width: "600", height: "400" }}
        ></div>
      </div>
    );
  }
}
