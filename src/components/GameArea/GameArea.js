import React, { Component } from "react";
import minions from "../../minions.json";
import GameContainer from "../GameContainer/GameContainer";
import NavBar from "../NavBar/NavBar";
import Wrapper from "../Wrapper/Wrapper";
import MinionsCard from "../MinionsCard/index.js";

class GameArea extends Component {
  state = {
    minions,
    score: 0,
    topScore: 0,
  };

  componenetDidMount() {
    this.setState({
      minions: this.RandomizeMinionOrder(this.state.minions)
    });
  };

  // Random Array sorter for Minion pictures
  RandomizeMinionOrder = images => {
    let currentIndex = images.length - 1;
    while (currentIndex > 0) {
      const randomNum = Math.floor(Math.random() * (currentIndex + 1));
      const lastIndex = images[currentIndex];
      images[currentIndex] = images[randomNum];
      images[randomNum] = lastIndex;
      currentIndex--;
    }
    return images;
  };
  
  // Handle the incorrect guesses
  IncorrectGuess = image => {
    this.setState({
      minions: this.reset(image),
      score: 0,
    });
    alert('OH NO, YOU LOST! TRY AGAIN.')
  };

  // Handle the correct guesses
  CorrectGuess = remainingImages => {
    let { topScore, score } = this.state;
    const increaseScore = score + 1;
    const newTopScore = increaseScore > topScore ? increaseScore : topScore;
    this.setState({
      minions: this.RandomizeMinionOrder(remainingImages),
      score: increaseScore,
      topScore: newTopScore,
    });
    if(newTopScore === 12 ) {
      alert('YOU WIN - CLICK ANY PICTURE TO START AGAIN');
      this.setState({
        score: 0,
        topScore: 0
      })
    }
  };

  WinGame = image => {
    this.setState ({
      minions: this.reset(image),
      score: 0
    })
  }

  // resets the minions
  reset = image => {
    const resetImages = image.map(item => ({ ...item, clicked: false}) );
    return this.RandomizeMinionOrder(resetImages);
  }

  ItemClick = id => {
    let correctGuess = false;
    
    const imagesLeft = this.state.minions.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if(!newItem.clicked) {
          newItem.clicked = true;
          correctGuess = true;

          if(this.state.score === 12) {
            return this.WinGame(this.state.minions);
          }
          
        }
      }
      return newItem;
    });
    correctGuess ? this.CorrectGuess(imagesLeft) : this.IncorrectGuess(imagesLeft);
  }

  render() {
    return (
    <div>
      
      <Wrapper/>
      <NavBar score={this.state.score} topScore={this.state.topScore} />

      <GameContainer>
        
        {this.state.minions.map(item => (    
          <MinionsCard  
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            ItemClick={this.ItemClick}
          />
        ))}
      </GameContainer>

    </div>
    );

  }


}

export default GameArea;