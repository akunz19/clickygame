import React, { Component } from "react";
import ImgCard from "./imgCard";
import Nav from "./Nav";
import data from "./../imgdata.json";
import "./style.css";

class ClickyGame extends Component {
  topscoreArr = [];
  state = {
    score: 0,
    data: data,
    topscore: 0,
    gamestatus: "Click a Character to Begin!"
  };

  componentDidUpdate() {
    console.log("pippity poppity give me the zoppity", this.state);
  }

  shuffleImgs(newData) {
    let i = newData.length,
      k,
      temp;
    while (--i > 0) {
      k = Math.floor(Math.random() * (i + 1));
      temp = newData[k];
      newData[k] = newData[i];
      newData[i] = temp;
    }
    return newData;
  }

  handleTopScore(score) {
      console.log("handle topscore", score);
    this.topscoreArr.push(score);
    console.log(this.topscoreArr);
    let newTopScore = Math.max.apply(Math, this.topscoreArr);
    console.log("topscore", newTopScore);
    this.setState({ topscore: newTopScore });
  }

  doTheScarn = (element, index) => {
    const newData = JSON.parse(JSON.stringify(this.state.data));
    if (!element.click) {
      newData[index].click = true;
      this.setState({
        score: this.state.score + 1,
        data: this.shuffleImgs(newData),
        gamestatus: "Congrats! You get a SchruteBuck!"
      });
      this.handleTopScore(this.state.score);
      console.log("inif", element, this.state.score);
    } else {
      this.setState({ score: 0, data: data, gamestatus: "Wrong! You get a full Disadulation!"});
      console.log("inelse", element, this.state.score);
    }
    // console.log(element);
  };

  render() {
    return (
      <div>
        <Nav 
        gamestatus={this.state.gamestatus}
        score={this.state.score}
        topscore={this.state.topscore}
        />
        <div className="flex-grid">
        {this.state.data.map((element, index) => {
          return (
              <div
                className="col"
                onClick={() => this.doTheScarn(element, index)}
              >
                <ImgCard
                  datavalue={element.id}
                  imgUrl={element.url}
                  bool={element.click}
                />
              </div>
          );
        })}
        </div>
      </div>
    );
  }
}

export default ClickyGame;
