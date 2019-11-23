import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./Main.css"
import Mapa from "./Mapa"
import Przelew from "./Mapa"
import Accounts from "./Accounts"
import Subscription from "./Subscription"
import { FaCalendarCheck,FaMoneyBillWave,
FaMapMarkedAlt,FaUniversity,FaReceipt, FaPiggyBank,FaRegWindowClose
 } from 'react-icons/fa';

class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      showAccounts: "none",
      showMapa: "none",
      money: 24556.87,
      showSubs:"none"
    }
  }
  showAccounts = () =>{
    this.setState({showAccounts:"block"})
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    this.setState({display:"none"})
  }
  closeForm =()=>{
    this.setState({
      showAccounts:"none"
    })
  }
  showMap = () =>{
    this.setState({showMapa:"block"})
  }
  hideMap = () =>{
    this.setState({showMapa: "none"})
  }
  showSubs = () =>{
    this.setState({showSubs: "block"})
  }
  hideSubs = () =>{
    this.setState({showSubs: "none"})
  }
  render() {
    return (
      <div>
      <div className='row' style={{justifyContent: 'space-around'}}>
        <Button className="tile2" onClick={this.showSubs}>SUBSCRIPTIONS <h1><FaCalendarCheck /></h1></Button>
        <Button className="tile2" onClick={this.showAccounts}>
        YOUR ACCOUNT BALANCE: <br/>{this.state.money} zł<h1><FaMoneyBillWave/></h1><b className="tile-desc">CLICK FOR DETAILS</b>
        </Button>
        <Button className="tile2" onClick={this.showMap}>SHOW LOCATIONS <h1><FaMapMarkedAlt/></h1></Button>
        </div>
        <div className="row" style={{justifyContent: 'space-around'}}>
        <Button className="tile2" onClick={this.changeDiv}>TRANSFER MONEY <h1><FaUniversity/></h1></Button>
        <Button className="tile2" onClick={this.changeDiv}>ADD RECEIPT<h1><FaReceipt/></h1></Button>
        <Button className="tile2" onClick={this.changeDiv}>SAVE MONEY AUTOMATICLY <h1><FaPiggyBank/></h1></Button>
        </div>
        <div className="overlay" style={{display: this.state.showAccounts}}>
        <Accounts closeForm={this.closeForm}/>
        </div>
        <div className="overlay-mapa" style={{display: this.state.showMapa}}>
        <Button className="buttonmapa" onClick={this.hideMap}>Close</Button>
        <Mapa />
        </div>
        <div className="overlay-mapa" style={{display: this.state.showSubs}}>
        <div className="close-btn" onClick={this.hideSubs}><FaRegWindowClose/></div>
        <Subscription/>
        </div>
      </div>
    );
  }
}

export default Main;
