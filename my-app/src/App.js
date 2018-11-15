import React, { Component } from "react";
import MinionsCard from "./components/MinionsCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import minions from "./minions.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    minions
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.minions.map(friend => (
          <MinionsCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            value={friend.value}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
