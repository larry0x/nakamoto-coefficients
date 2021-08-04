export class Chain {
  name: string;
  coingeckoId: string;
  symbol: string;
  threshold: number;

  constructor(name: string, coingeckoId: string, symbol: string, threshold: number) {
    this.name = name;
    this.coingeckoId = coingeckoId;
    this.symbol = symbol;
    this.threshold = threshold;
  }
}

export interface Chain {
  compute(): Promise<{
    totalBond: number;
    coeff: number;
    bribe: number;
    price: number;
  }>;
}
