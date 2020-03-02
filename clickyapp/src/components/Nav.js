import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <div class="sitenav">
          <span class="navspan" id="title">
            Dunder Shufflin
          </span>
          <span class="navspan" id="gamestatus">
            {this.props.gamestatus}
          </span>
          <span class="navspan" id="score">
            Score: {this.props.score}
          </span>
          <span class="navspan" id="top-score">
            Top Score: {this.props.topscore}
          </span>
        </div>
        <div className="flex-grid"></div>
      </div>
    );
  }
}
export default Nav;
