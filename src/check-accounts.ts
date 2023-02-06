import Stellar from 'stellar-sdk';
import util from 'util';
import { IAccount, IAccountResponse, IBalance, IBalanceResponse, IPair } from './type';
const pairs = require('../pairs.json');

const server = new Stellar.Server('https://horizon-testnet.stellar.org')

const checkAccounts = async (pairs : Array<IPair>) => {
  const accounts = await Promise.all(
    pairs.map(async (pair : IPair) => await server.loadAccount(pair.publicKey))
  );

  return accounts.map(({ balances, id } : IAccountResponse) : IAccount => ({
    accountId: id,
    balances: balances.map(({ asset_type, balance } : IBalanceResponse) : IBalance => ({
      type: asset_type,
      balance,
    }))
  }));
};

checkAccounts(pairs)
  .then((accounts) => console.log(util.inspect(accounts, false, null)))
  .catch((e : Error) => { console.error(e); throw e});
