import { Penny } from "../adaptee/Penny";

export class PennyAdapter {
  private penny: Penny;

  constructor(penny: Penny) {
    this.penny = penny;
  }

  getMoney(): number {
    return this.penny.getAmountPenny() * 44.11;
  }
}