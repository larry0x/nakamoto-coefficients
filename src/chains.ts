export class Chain {
  name: string;
  symbol: string;
  threshold: number;

  constructor(name: string, symbol: string, threshold: number) {
    this.name = name;
    this.symbol = symbol;
    this.threshold = threshold;
  }
}

export interface Chain {
  compute(): Promise<{
    totalBond: number;
    coeff: number;
    bribe: number;
  }>;
}
