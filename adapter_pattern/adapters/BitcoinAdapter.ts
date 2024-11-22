import { Bitcoin } from "../adaptee/Bitcoin";

export class BitcoinAdapter {
  private bitcoin: Bitcoin;

  constructor(bitcoin: Bitcoin) {
    this.bitcoin = bitcoin;
  }

  getMoney(): number {
    return this.bitcoin.getAmountBitcoin() * 433_795_528;
  }
}