import React, { Component } from "react";
import "animate.css";
import web3 from '../web3';
import company from '../company';

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

        {this.state.recieved && <h1>Verified</h1>}
        {this.state.recieved===false && <h1>Not Verified</h1>}


        
      </div>
    );
  }
}

export default MiddleBanner;
