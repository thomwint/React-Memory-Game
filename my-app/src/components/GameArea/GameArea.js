import React, { Component } from "react";
import minions from "./minions.json";

class GameArea extends Component {
  //setting this.state.image to equal the images json array:
  state = {
    minions,
    score: 0,
    topScore: 0,
  };

  componenetDidMount() {
    this.setState({
      image: this.RandomizeMinionOrder(this.state.minions.image)
    });
  };

  // Random Array sorter for Minion pictures
  RandomizeMinionOrder = image => {
    let currentIndex = minions.image.length - 1;
    while (currentIndex > 0) {
      const randomNum = Math.floor(Math.random() * (currentIndex + 1));
      const lastIndex = image[currentIndex];
      image[currentIndex] = image[randomNum];
      image[randomNum] = lastIndex;
      currentIndex--;
    }
    return image;
  };
  
  // Handle the incorrect guesses
  IncorrectGuess = image => {
    this.setState({
      image: this.reset(image),
      score: 0
    });
  };

  // Handle the correct guesses
  CorrectGuess = remainingImage => {
    const { topScore, score } = this.state;
    const increaseScore = score + 1;
    const newTopScore = increaseScore > topScore ? increaseScore : topScore;
    this.setState({
      images: this.RandomizeMinionOrder(remainingImage),
      score: increaseScore,
      topScore: newTopScore,
    });
  };

  WinGame = image => {
    this.setState ({
      images: this.reset(image),
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
    
    const imagesLeft = this.state.minions.image.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if(!newItem.clicked) {
          newItem.clicked = true;
          correctGuess = true;

          if(this.state.score === 8) {
            return this.WinGame(this.state.minions.image)
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
      <Nav score={this.state.score} topScore={this.state.topScore} />
      <Header/>

      <Container className="game-board">
        {this.state.images.map(item => (      
          <PicButton
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            handleClick={this.handleItemClick}
            gameOver={this.state.lives !== 0 && this.state.topScore}
          />
        ))}
      </Container>

      <Footer/>
    </div>
    );

  }


}

export default GameArea;