import React, { Component } from 'react';
import Product from '../product';
// import web3 from "../web3";

class ProductShow extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'Loading....',
            owner:'Loading....'
        }
    }

    async componentDidMount() {
        const address = this.props.match.params.address;
        console.log(address);
        const product = Product(address);

        const name= await product.methods.name().call();
        const owner= await product.methods.owner().call();

        this.setState({
            name:name,
            owner:owner
        });
    }
    

    
    render() {
        return (
            <div>
                <div>
                    <img src={`/${this.state.name}.jfif`} />
                </div>
                <div id="product-name">
                    {this.state.name}
                </div>
                <div id="owner-address">
                    {this.state.owner}
                </div>
            </div>
        );
    }
}

export default ProductShow;