export class Dollar {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  getAmountDollar(): number {
    return this.amount;
  }
}