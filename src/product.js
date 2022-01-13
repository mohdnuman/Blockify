import web3 from './web3';
import product from './Product.json';


const exported=(address) => {
    const instance = new web3.eth.Contract(
      product.abi,
      address
    );
  
    return instance;
};

export default exported;
  