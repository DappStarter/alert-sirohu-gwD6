require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe strong regret situate unfair inside light army gesture'; 
let testAccounts = [
"0x58dcb0c23997869a99894a52eccd95e964a84f25e81477fcc2338a19ed9005fe",
"0x0b97394e953e53bb3524bb666f2b640d9156693a6c188a2cc1f993b1035490c4",
"0xff295958798c574b91b42c5b135ab29ed64578b805e24093bfa77424114756c2",
"0x41d2bcd489e1e7771b934d1aa2179e75521e36fa6e4c296741112f4e85a38b77",
"0x3d1fe20799446ae75b00a0a0f049fc8358b14182a0280ff8b731fbf3801b381b",
"0x0d319b9e515a1ac079c363e708a38eec78adb45adbfa34332b7608f1890c017f",
"0x8b0576e2e65ab4fba8e6c1d98d7df2ce2095ddcdf9cf411e31f1a258e43b061f",
"0xa55e4a3930fc0bfb224db19f830e01a640c47a3bb77640dbba73cae7231ace97",
"0x14e953e0a6a51ea8ca713fddd088046060976d7c9454929e700ba1f640461231",
"0x85ed0d53a56511442bf23126b1c23325820817d0b897f5ffb00dd132f3036e73"
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
            version: '^0.8.0'
        }
    }
};

