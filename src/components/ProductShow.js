import React, { Component } from "react";
import Product from "../product";
import web3 from "../web3";

class ProductShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Loading....",
      owner: "Loading....",
      recipient:''
    };
  }

  async componentDidMount() {
    const address = this.props.match.params.address;
    // console.log(address);
    const product = Product(address);

    const name = await product.methods.name().call();
    const owner = await product.methods.owner().call();

    this.setState({
      name: name,
      owner: owner,
    });
  }

  handleTransfer = async() => {
    const address = this.props.match.params.address;
    // console.log(address);
    const product = Product(address);
    const accounts= await web3.eth.getAccounts();
    console.log(accounts);

    await product.methods.transfer(this.state.recipient).send({from:accounts[0]});



  }
  handleChange=(e)=>{
    this.setState({
      recipient:e.target.value
    })
  }

  render() {
    return (
      <div>
        <div id="image-block">
          <img
            src={`/${this.state.name}.gif`}
            className="product-image"
            alt="product"
          />
        </div>
        <span>
          <h1 className="verification-green-product">Verified</h1>
          {"  "}
          <img
            alt="verified"
            src="https://cdn-icons-png.flaticon.com/512/390/390973.png"
            className="tick-image-product"
          />
        </span>
        <span className="product-name">{this.state.name}</span>
        <span className="owner-address">Owned By-{this.state.owner}</span>

        
            <input name="recipient" type="text" id="recipient-address" placeholder="Enter Recipient's Address" onChange={this.handleChange}/>
          <button id="transfer-button" onClick={this.handleTransfer} >
            Transfer OwnerShip
          </button>
      </div>
    );
  }
}

export default ProductShow;
