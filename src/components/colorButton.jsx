import React, { Component } from 'react'
import './colorButton.css'
export class colorButton extends Component {
    render() {
        return (
            <div className='button'>
                {this.props.text}
            </div>
        )
    }
}

export default colorButton
