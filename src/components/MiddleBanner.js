import React, { Component } from "react";
import "animate.css";
// import web3 from '../web3';
import company from '../company';
import {Link} from 'react-router-dom';

class MiddleBanner extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      address:'',
      recieved:undefined,
      loading:false
    }
  }

 
  handleChange=(e)=>{
      this.setState({
        id:e.target.value
      })
  }

  handleSubmit=async ()=>{
    this.setState({loading:true});
    const ans=await company.methods.verifyProduct(this.state.id).call();
    
    
    if(ans===true){
      const address=await company.methods.products(this.state.id).call();
      this.setState({
        recieved:true,
        address:address,
        loading:false
      })
    }
    else{
      this.setState({
        recieved:false,
        loading:false
      })
    }

    
  }
  render() {
    const loading=this.state.loading;
    return (
      <div id="middle-banner">
        <p className="animate__animated animate__fadeInDown">
          Verify Your <span id="product-text">Product.</span>
        </p>
        <input id="id-input" placeholder="Enter product ID" onChange={this.handleChange}/>

        <button id="verify-button" onClick={this.handleSubmit}>Verify</button>

        {loading && <h6 id="verifying">Verifying...</h6>}

        {this.state.recieved &&<div> <h6 className="verification-green">Verified</h6> <img alt="verified" src="https://cdn-icons-png.flaticon.com/512/390/390973.png" className="tick-image"/></div>}
        {this.state.recieved===false && <div><h6 className="verification-red">Not Verified</h6> {'  '} <img alt="not verified" src="https://cdn-icons-png.flaticon.com/512/594/594598.png" className="cross-image"/></div>}

        {this.state.recieved && <Link to={`/product/${this.state.address}`}><button id="detail-button">View details</button></Link>}


        
      </div>
    );
  }
}

export default MiddleBanner;
