import axios from "axios";
import { findCoeff, formatInteger, formatMoney, parseBigInt } from "./helpers";
import { Chain } from "./chains";

interface Validator {
  voting_power: string;
}

const cosmos = new Chain("cosmos", "cosmos", "ATOM", 1 / 3);

cosmos["compute"] = async function () {
  // LUNA price
  const price = (
    await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${this.coingeckoId}&vs_currencies=usd`
    )
  ).data[this.coingeckoId].usd;

  // list of validators
  const validators: Validator[] = (
    await axios.get("https://cosmos.sg-1.online/validatorsets/latest")
  ).data.result.validators;

  // the bonded amount of each validator
  const bonds = validators.map((validator) => {
    return parseBigInt(validator.voting_power, 0); // 1 voting power = 1 ATOM
  });

  // cosmos can be halted by 33%+1 validators
  const { totalBond, cummBond, coeff } = findCoeff(bonds, 1 / 3);

  const bribe = cummBond * price;

  console.log(`totalBond = ${formatInteger(totalBond)} ${this.symbol}`);
  console.log(`coeff = ${coeff}`);
  console.log(`bribe = ${formatMoney(bribe, 0)}`);
  console.log(`price = ${formatMoney(price, 2)}`);

  return { totalBond, coeff, bribe, price };
};

// test
if (require.main === module) {
  cosmos.compute();
}

export default cosmos;
