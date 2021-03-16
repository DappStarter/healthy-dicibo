require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note museum cluster harvest beach slot gather'; 
let testAccounts = [
"0xdfa868ccc399dcf6e7ed6bf593dea66164a28b1bcd669ed22c5b31f3355eccba",
"0x14691035aae8fe6bde13c6ef7ff625edea67a68b17f021408d0daaeb08c800db",
"0xed9084a04acb07d1e0dfaab8e9cc301ce705c3e0a1e77834990306266b77e5b7",
"0x987ddd7a995953bafc000f2ea4b439352c015786465bbdbfa6ead55f007297fb",
"0x9c192a9e9fab19510e8035871b43feaefff353ab80ee985638069ba010f89bab",
"0x9d481548961477a103bbe9ae4cde2d925b024c396da78169272b9dd354648345",
"0x97b5c6fa4c33d38d350732c76f7be2a0de8892a7a3aacc3a4d8793c1cefc99f5",
"0x281cdc562d5f6f3c4bdcd38f85c9d2e398393eb64970f68cd35337fcf0be2add",
"0x3d25aca9c5b49f8fa8c7411ade9bd99624fa74fcbec390a7947b512bc0696312",
"0x9c8442b4f1b7158f6a65b5b7c79967ef0c934d580d70c17600aca6852c5c2d05"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
