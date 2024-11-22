export class Bitcoin {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  getAmountBitcoin(): number {
    return this.amount;
  }
}