import React, { Component } from "react";
import "animate.css";


class MiddleBanner extends Component {
  constructor(props){
    super(props);
    this.state={
      id:''
    }
  }

  handleSubmit=async ()=>{
    

  }
  render() {
    return (
      <div id="middle-banner">
        <p className="animate__animated animate__fadeInDown">
          Verify Your <span id="product-text">Product.</span>
        </p>
        <input id="id-input" placeholder="Enter product ID"/>

        <button id="verify-button" onClick={this.handleSubmit}>Verify</button>

        
      </div>
    );
  }
}

export default MiddleBanner;
