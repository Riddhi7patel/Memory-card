import React, { Component } from 'react';
import Item from './Item';

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ["Apple", "Banana", "Cherry", "Grape", "Lemon", "Mango", "Orange", "Peach", "Pear", "Strawberry", "Watermelon", "Blueberry"],
            score: 0,
            bestScore: 0,
            clickedItems: [],
        };
    }
    
    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    
    handleClick = (id) => {
        const { clickedItems, score, bestScore } = this.state;
        if (clickedItems.includes(id)) {
            this.setState({
                score: 0,
                clickedItems: [],
            });
        } else {
            this.setState({
                score: score + 1,
                bestScore: Math.max(bestScore, score + 1),
                clickedItems: [...clickedItems, id],
            });
        }
    };
    
    render() {
        const { items, score, bestScore } = this.state;
        return (
            <div className="game-board">
                <div className="score-board">
                    <div className="current-score">
                        Current Score: {score}
                    </div>
                    <div className="best-score">
                        Best Score: {bestScore}
                    </div>
                </div>
                <div className="items-container">
                    {this.shuffleArray(items).map((item, index) => (
                        <Item 
                            key={item} 
                            value={item} 
                            handleClick={this.handleClick} 
                            id={item}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default GameBoard;
