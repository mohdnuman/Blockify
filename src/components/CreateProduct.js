import React, { Component } from 'react';
import {Navbar} from './index';
import { v4 as uuidv4 } from 'uuid';
import company from '../company';
import web3 from '../web3';

class CreateProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            id:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            name:e.target.value
        });
    }

    handleCreate=async()=>{
        let id=await uuidv4();
        console.log(id);
        const accounts= await web3.eth.getAccounts();


        await company.methods.createProduct(id,this.state.name).send({from:accounts[0]});

        this.setState({
            id:id
        })


    }
    render() {
        const id=this.state.id;
        return (
            <div>
                <Navbar />
                
                {!id &&<div>
                    <h1 id="create-heading">
                    Create A <span id="product-text">Product</span>
                </h1>
                <div>
                <input placeholder='Enter name of the product' onChange={this.handleChange} id="name-input"/>
                <button onClick={this.handleCreate} id="create-button">
                    Create
                </button>
                </div>
                </div>}
                {id&&<div>Product created with id-{id}</div>}
            </div>
        );
    }
}

export default CreateProduct;