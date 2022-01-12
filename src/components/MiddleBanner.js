import React, { Component } from "react";
import "animate.css";
import web3 from '../web3';
import company from '../company';
import {Link} from 'react-router-dom';

class MiddleBanner extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      recieved:undefined
    }
  }

  // async componentDidMount(){
  //   const accounts=await web3.eth.getAccounts();
  // }
  handleChange=(e)=>{
      this.setState({
        id:e.target.value
      })
  }

  handleSubmit=async ()=>{
    const ans=await company.methods.verifyProduct(this.state.id).call();
    
    if(ans===true){
      this.setState({
        recieved:true
      })
    }
    else{
      this.setState({
        recieved:false
      })
    }

    
  }
  render() {
    return (
      <div id="middle-banner">
        <p className="animate__animated animate__fadeInDown">
          Verify Your <span id="product-text">Product.</span>
        </p>
        <input id="id-input" placeholder="Enter product ID" onChange={this.handleChange}/>

        <button id="verify-button" onClick={this.handleSubmit}>Verify</button>

        {this.state.recieved &&<div> <h6 id="verification-green">Verified</h6> <img src="https://cdn-icons-png.flaticon.com/512/390/390973.png" id="tick-image"/></div>}
        {this.state.recieved===false && <div><h6 id="verification-red">Not Verified</h6> {'  '} <img src="https://cdn-icons-png.flaticon.com/512/594/594598.png" id="cross-image"/></div>}

        {this.state.recieved && <Link to={`/product/${this.state.address}`}><button id="detail-button">View details</button></Link>}


        
      </div>
    );
  }
}

export default MiddleBanner;
