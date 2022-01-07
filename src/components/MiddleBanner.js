import React, { Component } from "react";
import "animate.css";

class MiddleBanner extends Component {
  render() {
    return (
      <div id="middle-banner">
        <p className="animate__animated animate__fadeInDown">
          Verify Your Product.
        </p>
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Product Id"
            name="id"
            id="name"
            required
          />
        </div>
        <button>Verify</button>
      </div>
    );
  }
}

export default MiddleBanner;
