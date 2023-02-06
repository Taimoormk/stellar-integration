import fs from 'fs';
import { IPair } from './type';
import Stellar from 'stellar-sdk';

fs.writeFileSync(
  'pairs.json',
  JSON.stringify(
    ['pairA', 'pairB'].map(() : IPair => {
      const pair = Stellar.Keypair.random();

      return {
        secretSeed: pair.secret(),
        publicKey: pair.publicKey(),
      };
    })
  ),
);
