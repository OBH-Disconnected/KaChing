import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./Main.css"

class Main extends Component {
  constructor(){
    super()
    this.state={
      display: "none",
      accountNumber: ""
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
  render() {
    return (
      <div> 
        <Button onClick={this.changeDiv}>ADD ACCOUNT</Button>
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
      </div>
    );
  }
}

export default Main;
