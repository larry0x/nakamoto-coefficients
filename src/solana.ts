import axios from "axios";
import { findCoeff, formatInteger, formatMoney, parseBigInt } from "./helpers";
import { Chain } from "./chain";

interface Validator {
  activatedStake: number;
}

const solana = new Chain("solana", "solana", "SOL", 1 / 3);

solana["compute"] = async function () {
  // SOL price
  const price = (
    await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${this.coingeckoId}&vs_currencies=usd`
    )
  ).data[this.coingeckoId].usd;

  // list of validators
  const validators: Validator[] = (
    await axios.post("https://solana-api.projectserum.com", {
      jsonrpc: "2.0",
      id: 1,
      method: "getVoteAccounts",
    })
  ).data.result.current;

  // the bonded amount of each validator
  const bonds = validators.map((validator) => {
    return parseBigInt(validator.activatedStake.toFixed(0), 9); // SOL has 9 decimal places
  });

  // cosmos can be halted by 33%+1 validators
  const { totalBond, cummBond, coeff } = findCoeff(bonds, this.threshold);

  const bribe = cummBond * price;

  console.log(this.name);
  console.log(`totalBond = ${formatInteger(totalBond)} ${this.symbol}`);
  console.log(`coeff = ${coeff}`);
  console.log(`bribe = ${formatMoney(bribe, 0)}`);
  console.log(`price = ${formatMoney(price, 2)}`);

  return {
    name: this.name,
    symbol: this.symbol,
    threshold: this.threshold,
    price,
    totalBond,
    coeff,
    bribe,
  };
};

export default solana;
