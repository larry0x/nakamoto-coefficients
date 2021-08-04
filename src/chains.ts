export class Chain {
  name: string;
  coingeckoId: string;
  threshold: number;

  constructor(name: string, coingeckoId: string, threshold: number) {
    this.name = name;
    this.coingeckoId = coingeckoId;
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
