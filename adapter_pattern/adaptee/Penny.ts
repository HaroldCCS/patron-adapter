export class Penny {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  getAmountPenny(): number {
    return this.amount;
  }
}