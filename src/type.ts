export interface IPair {
  secretSeed : string;
  publicKey : string;
}

export interface IBalanceResponse {
  asset_type : string;
  balance : string;
}

export interface IAccountResponse {
  id: string;
  balances : Array<IBalanceResponse>;
}

export interface IBalance {
  type : string;
  balance : string;
}

export interface IAccount {
  accountId : string;
  balances : Array<IBalance>;
}