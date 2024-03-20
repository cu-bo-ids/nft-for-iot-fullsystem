const nft_for_iot_tool = require('nft-for-iot-tool');
const nft_for_iot_fullsystem = require('nft-for-iot-fullsystem');
const solc = require('solc');
const body_parser = require('body-parser');
const multer = require('multer');
const webpack_cli = require('webpack-cli');
const express = require('express');
const web3 = require('web3');
const webpack = require('webpack');
const eth_crypto = require('eth-crypto');
const supertest = require('supertest');
const bluebird = require('bluebird');
const helmet = require('helmet');
const ethers = require('ethers');
const nodemon = require('nodemon');
const ethereumjs_util = require('ethereumjs-util');
const redux = require('redux');

// Get the list of supported Ethereum networks
web3.eth.net.getNetworkType().then(networkType => {
  console.log('Network type:', networkType);
}).catch(err => {
  console.error('Error getting network type:', err);
});

const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));

const assert = require('assert');
assert.ok(true, 'This will not fail');

// Call a view or pure function on a smart contract using Hardhat
async function callContractFunction() {
  const contractAddress = '0xcontractAddress';
  const YourContract = await ethers.getContractFactory('YourContract');
  const contract = await YourContract.attach(contractAddress);

  const result = await contract.someViewFunction();
  console.log('View function result:', result);
}

callContractFunction().catch(err => {
  console.error('Error calling contract function:', err);
});

const os = require('os');
console.log(`Free memory: ${os.freemem()} bytes`);

// Generate a random alphanumeric string of a specified length
const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
console.log('Random String:', generateRandomString(10));