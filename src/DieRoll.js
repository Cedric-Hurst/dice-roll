import React, { Component } from 'react';
import Die from './Die';
import './DieRoll.css';
class DieRoll extends Component { 
    constructor(props) {
        super(props)
        this.state = {
          num1: 'one',  
            num2: 'one',
            isRolling: false
        }
        this.roll = this.roll.bind(this);
    }
    roll() {
        const dieArray = ['one', 'two', 'three', 'four', 'five', 'six'];
        const rand = Math.floor(Math.random() * dieArray.length);
        const rand2 = Math.floor(Math.random() * dieArray.length);
        this.setState({
            num1: dieArray[rand],
            num2: dieArray[rand2],
            isRolling: true
        })
        setTimeout(() => {
            this.setState({
                isRolling: false
            })
        }, 800);

    }
    render() {
        return(
            <div className='DieRoll-main'>
                <Die num={this.state.num1} jig={this.state.isRolling ? 'Die-jig' : ''} />
                <Die num={this.state.num2} jig={this.state.isRolling ? 'Die-jig' : ''} />
                <div>
                    <button className='DieRoll-btn' onClick={this.roll} disabled={this.state.isRolling}>
                        {this.state.isRolling ? '...Rolling' : 'Roll Dice'}
                    </button>
                </div>
            </div>
        )
    }
}

export default DieRoll;