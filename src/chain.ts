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
    name: string;
    symbol: string;
    price: number;
    totalBond: number;
    threshold: number;
    coeff: number;
    bribe: number;
  }>;
}
