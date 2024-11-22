import { Money } from '../interface/Money';
import { Dollar } from '../adaptee/Dollar';

export class DollarAdapter implements Money {
  private dollar: Dollar;

  constructor(dollar: Dollar) {
    this.dollar = dollar;
  }

  getMoney(): number {
    return this.dollar.getAmountDollar() * 4_411;
  }
}
