import React from "react";
import "./App.scss";
import axios from "axios";

import Tier from "./components/Tier/Tier";
import StagingArea from "./components/StagingArea/StagingArea";
import HookTest from "./components/HookTest/HookTest";

class App extends React.Component {
  state = {
    tierTemplate: [
      { name: "S", color: "ff797c" },
      { name: "A", color: "febf7a" },
      { name: "B", color: "ffff75" },
      { name: "C", color: "80ff78" },
      { name: "D", color: "7dbcff" },
      { name: "E", color: "7c71ff" },
      { name: "F", color: "ff6cff" }
    ],
    cardStack: []
  };

  commitRanking =()=>{
    axios.post('http://localhost:8080/',{
     cardStack: this.state.cardStack, 
    }
    )
        .then(response=>console.log(response.data))
  }

  changeTier = (path, newTier) => {
    let newState = this.state.cardStack;
    newState[
      this.state.cardStack.findIndex(card => card.path === path)
    ].tier = newTier;

    this.setState({ cardStack: newState });
  };

  componentDidMount() {
    axios.get("http://localhost:8080/").then(response => {
      if (response.data.length > 2) {
        this.setState({cardStack: response.data})
      } else {
        response.data.files.map(imagePath => {
          this.setState({
            cardStack: this.state.cardStack.concat({
              path: response.data.path + imagePath,
              tier: "N/A"
            })
          });
        });
      }
    });
  }

  render() {
    return (
      <div className="app">
        {this.state.tierTemplate.map(tier => (
          <Tier
            name={tier.name}
            changeTier={this.changeTier}
            color={tier.color}
            cards={this.state.cardStack.filter(card => card.tier === tier.name)}
          />
        ))}
        <StagingArea
          cards={this.state.cardStack.filter(card => card.tier === "N/A")}
          changeTier={this.changeTier}
        />
        {this.state.cardStack.filter(
          card => card.tier ==="N/A"
        ).length === 0 ? <button onClick={this.commitRanking}>Commit</button> : null}
      </div>
    );
  }
}

export default App;
