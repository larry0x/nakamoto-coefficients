import axios from "axios";
import { findCoeff, formatInteger, formatMoney, parseBigInt } from "./helpers";
import { Chain } from "./chain";

interface Validator {
  tokens: string;
}

const terra = new Chain("terra", "terra-luna", "LUNA", 1 / 3);

terra["compute"] = async function () {
  // LUNA price
  const price = (
    await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=terra-luna&vs_currencies=usd"
    )
  ).data[this.coingeckoId].usd;

  // list of validators
  const validators: Validator[] = (
    await axios.get("https://lcd.terra.dev/staking/validators")
  ).data.result;

  // the bonded amount of each validator
  const bonds = validators.map((validator) => {
    return parseBigInt(validator.tokens, 6); // LUNA has 6 decimal places
  });

  // terra can be halted by 33%+1 validators
  const { totalBond, cummBond, coeff } = findCoeff(bonds, 1 / 3);

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

export default terra;
