import React, { Component } from 'react';

import {FaCcMastercard} from 'react-icons/fa';

import SubscriptionComponent from "./SubscriptionComponent"

class Subscriptions extends Component {
  constructor(){
    super()
    this.state={
      elements:[]
    }
  }
  removeOne = (key) =>{
    console.log(key)
    var elements=this.state.elements
    elements.map(function (elem,i) {
      if(elem.props.id==key){
          console.log("tu")
          elements.splice(i, 1);
      }
    })
    console.log(elements)
    this.setState({elements:elements})
  }
  componentDidMount() {
    var subs=[{name:"NETFLIX",amount:"52",date:"21.12.2019"},
    {name:"GYM",amount:"100",date:"10.12.2019"}
    ]
    var this_binded=this
    var divs = subs.map(function (elem,i) {
      return <SubscriptionComponent text={"UNSUBSCRIBE"} id={i} removeSubscription={this_binded.removeOne} name={elem.name} amount={elem.amount} date={elem.date} key={"subs"+i}/>
    })
    this.setState({elements:divs})
  }
  
  render() {
    return (
      <div>{this.state.elements}</div>
    );
  }
}

export default Subscriptions;
