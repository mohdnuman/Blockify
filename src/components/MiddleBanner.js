import React, { Component } from "react";
import "animate.css";


class MiddleBanner extends Component {
  render() {
    return (
      <div id="middle-banner">
        <p className="animate__animated animate__fadeInDown">
          Verify Your <span id="product-text">Product.</span>
        </p>
        <input id="id-input" placeholder="Enter product ID"/>

        <button id="verify-button">Verify</button>

        
      </div>
    );
  }
}

export default MiddleBanner;
