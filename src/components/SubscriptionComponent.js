import React, { Component } from 'react';
import "./Subscription.css"
import { Button } from 'react-bootstrap';


class SubscriptionComponent extends Component {
    constructor(props){
        super(props)
    }
remove = () =>{
    this.props.removeSubscription(this.props.id)
}
  render() {
    return (
      <div className='sub-row'>
        <div className='sub-item'>{this.props.name}</div>
        <div className='sub-item'>{this.props.amount} zł</div>
        <div className='sub-item'>{this.props.date}</div>
        <div className='sub-item'><Button onClick={this.remove}>USNUBSCRIBE</Button></div>
      </div>
    );
  }
}

export default SubscriptionComponent;
