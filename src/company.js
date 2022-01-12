import web3 from './web3';
import Company from './Company.json';

const instance=new web3.eth.Contract(Company.abi,"0x08023915725999ff35C6615D2D4eae290a7D9CEE");

export default instance;