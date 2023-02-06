import axios from 'axios';
import { IPair } from './type';
const pairs = require('../pairs.json');

const fundAccounts = async (pairs : Array<IPair>) => await Promise.all(
  pairs.map(
    async (pair : IPair) => await axios.get('/friendbot', {
      baseURL: 'https://horizon-testnet.stellar.org/',
      params: { addr: pair.publicKey },
    })
  ),
);

fundAccounts(pairs)
  .then(() => console.log('ok'))
  .catch((e : Error) => { console.error(e); throw e});
