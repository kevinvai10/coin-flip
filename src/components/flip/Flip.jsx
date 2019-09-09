import React from 'react'
import Coin from '../../components/coin/Coin'
import './Flip.css'

class Flip extends React.Component{
    constructor(){
        super();
        this.state = {
            coinSide: '',
            heads: 0,
            tails: 0,
            flipped: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    getCoinSide(){
        const sides = ["tails", "heads"];
        const rand = Math.floor(Math.random() * sides.length);
        return sides[rand];
    }

    handleClick(){
        const selectedSide = this.getCoinSide();
            this.setState((curState) => (
                {...curState, 
                    flipped: curState.flipped + 1, 
                    coinSide: selectedSide, 
                    heads: curState.heads + (selectedSide === 'heads' ? 1 : 0),
                    tails: curState.tails + (selectedSide === 'tails' ? 1 : 0)
                }
            )
        )
        //update coinside
        //update times shown
        //increment flipped +1 
    }

    render(){
        return(
            <div>
                <h1>Let's flip a coin!</h1>
                {
                    this.state.coinSide &&
                    <Coin side={this.state.coinSide}/>
                }
                <button className="btn" onClick={this.handleClick}>Flip me!</button>
                <p>{`Out of ${this.state.flipped} flips, there have been ${this.state.heads} heads and ${this.state.tails} tails`}</p>
            </div>
        )
    }
}

export default Flip;