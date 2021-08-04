import axios from "axios";
import { findCoeff, formatInteger, parseBigInt } from "./helpers";
import { Chain } from "./chains";

interface Validator {
  tokens: string;
}

const terra = new Chain("terra", "LUNA", 1 / 3);

terra["compute"] = async () => {
  // LUNA price
  const price = (
    await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=terra-luna&vs_currencies=usd"
    )
  ).data["terra-luna"].usd;

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

  console.log(`totalBond = ${formatInteger(totalBond)} LUNA`);
  console.log(`coeff = ${coeff}`);
  console.log(`bribe = $${formatInteger(bribe)}`);

  return { totalBond, coeff, bribe };
};

// test
if (require.main === module) {
  terra.compute();
}

export default terra;
