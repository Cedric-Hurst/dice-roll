import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Die.css';
class Die extends Component { 
    render() {
        return (
            <div className='Die-div'>
                <FontAwesomeIcon icon={`fa-solid fa-dice-${this.props.num}`} className={this.props.jig} />
            </div>
        )
    }
}

export default Die;