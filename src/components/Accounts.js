import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaRegWindowClose } from 'react-icons/fa';
import SubscriptionComponent from "./SubscriptionComponent"

class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        accountNumber: "",
        firstName:"",
        surname:"",
        accounts:[]
    };
  }
  removeOne = () =>{

  }
    handleSubmit = (event) =>{
        event.preventDefault()
        var accounts=this.state.accounts
        accounts.push(
            <SubscriptionComponent text={"DELETE"} id={accounts.length} removeSubscription={this.removeOne} 
            name={event.target[0].value} amount={event.target[1].value} 
            date={event.target[2].value} key={"acc"+accounts.length}/>)
        this.setState({accounts:accounts})    
    }
    closeForm = () =>{
        this.props.closeForm()
    }
    changeAccount=(event)=>{
    this.setState({accountNumber: event.target.value})
    }
    changeName=(event)=>{
    this.setState({firstName: event.target.value})
    }
    changeSurname=(event)=>{
    this.setState({surname: event.target.value})
    }

  render() {
    return (
        <div>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formLogin">
        <Form.Label>Account number</Form.Label>
        <Form.Control type="number" placeholder="Enter account number" value={this.state.accountNumber} onChange={this.changeAccount} required />
        </Form.Group>
        <Form.Group controlId="formLogin">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name of the account's owner" value={this.state.firstName} onChange={this.changeName} required />
        </Form.Group>
        <Form.Group controlId="formLogin">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="text" placeholder="Enter surname of the account's owner" value={this.state.surname} onChange={this.changeSurname} required />
        </Form.Group>

        <Button variant="primary" type="submit">
            Add
        </Button>
        <div className="close-btn" onClick={this.closeForm}><FaRegWindowClose/></div>
    </Form>
    {this.state.accounts}
    </div>
    );
  }
}

export default Accounts;
