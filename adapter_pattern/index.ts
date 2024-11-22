import { Bitcoin } from './adaptee/Bitcoin';
import { Dollar } from './adaptee/Dollar';
import { Penny } from './adaptee/Penny';

import { DollarAdapter } from './adapters/BillAdapter';
import { BitcoinAdapter } from './adapters/BitcoinAdapter';
import { PennyAdapter } from './adapters/PennyAdapter';

import { WalletClient } from './walletClient';


//Monedas diferentes (adaptee) (son tipos de monedas diferentes)
const bitcoin = new Bitcoin(1);
const dollar = new Dollar(32);
const penny = new Penny(62);


//Adaptadores (adapters) transforman la modena a pesos colombianos (COP)
const bitcoinAdapter = new BitcoinAdapter(bitcoin);
const dollarAdapter = new DollarAdapter(dollar);
const pennyAdapter = new PennyAdapter(penny);


//Mostrar el valor de la moneda en pesos colombianos
const walletClient = new WalletClient();

console.log(walletClient.showCurrentMoney(bitcoinAdapter.getMoney()));
console.log(walletClient.showCurrentMoney(dollarAdapter.getMoney()));
console.log(walletClient.showCurrentMoney(pennyAdapter.getMoney()));
