import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./Main.css"
import Mapa from "./Mapa"
import Przelew from "./Mapa"
import Subscription from "./Mapa"

class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      display: "none",
      accountNumber: "",
      showMapa: "none"
    }
  }
  changeDiv = () =>{
    this.setState({display:"block"})
  }
  changeAccount=(event)=>{
    this.setState({accountNumber: event.target.value})
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    this.setState({display:"none"})
  }
  closeForm =()=>{
    this.setState({
      accountNumber:"",
      display:"none"
    })
  }
  showMap = () =>{
    this.setState({showMapa:"block"})
  }
  hideMap = () =>{
    this.setState({showMapa: "none"})
  }
  render() {
    return (
      <div>
      <div className='row' style={{justifyContent: 'space-around'}}>
        <Button className="tile2" onClick={this.showMap}>SUBSCRIPTIONS</Button>
        <Button className="tile2" onClick={this.changeDiv}>YOUR ACCOUNT BALANCE</Button>
        <Button className="tile2" onClick={this.showMap}>SHOW LOCATIONS</Button>
        </div>
        <div className="row" style={{justifyContent: 'space-around'}}>
        <Button className="tile2" onClick={this.changeDiv}>TRANSFER MONEY</Button>
        <Button className="tile2" onClick={this.changeDiv}>ADD RECEIPT</Button>
        <Button className="tile2" onClick={this.changeDiv}>SAVE MONEY AUTOMATICLY</Button>
        </div>
        <div className="overlay" style={{display: this.state.display}}>
        <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formLogin">
              <Form.Label>Account number</Form.Label>
              <Form.Control type="text" placeholder="Enter account number" value={this.state.accountNumber} onChange={this.changeAccount} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
            <Button onClick={this.closeForm}>Close</Button>
          </Form>
        </div>
        <div className="overlay-mapa" style={{display: this.state.showMapa}}>
        <Button className="buttonmapa" onClick={this.hideMap}>Close</Button>
        <Mapa />
        </div>
      </div>
    );
  }
}

export default Main;
