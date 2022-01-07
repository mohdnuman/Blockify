import React, { Component } from "react";
import "animate.css";

class MiddleBanner extends Component {
  render() {
    return (
      <div id="middle-banner">
        <p className="animate__animated animate__fadeInDown">
          Verify Your Product.
        </p>
       
        <button>Verify</button>
      </div>
    );
  }
}

export default MiddleBanner;
