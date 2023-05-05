require('dotenv').config()

// Azure Key Vault service to use
// const { KeyClient } = require("@azure/keyvault-keys");
// Azure authentication library to access Azure Key Vault
const { DefaultAzureCredential } = require("@azure/identity");
const credential = new DefaultAzureCredential();
console.log(credential)
// Create authenticated client
// const client = new KeyClient(vaultUrl, credential);