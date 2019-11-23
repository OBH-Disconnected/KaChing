import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        accountNumber: "",
        firstName:"",
        surname:""
    };
  }
    handleSubmit = () =>{

    }
    closeForm = () =>{
        this.props.closeForm()
    }
    changeAccount=(event)=>{
    this.setState({accountNumber: event.target.value})
  }
  render() {
    return (
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
    );
  }
}

export default Accounts;
