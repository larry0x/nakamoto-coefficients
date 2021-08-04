import { BN } from "bn.js";

export function parseBigInt(big: string, decPlaces: number) {
  const decimals = new BN("10").pow(new BN(decPlaces));
  const int = new BN(big).div(decimals).toNumber();
  const dec = new BN(big).mod(decimals).toNumber() / decimals.toNumber();
  return int + dec;
}

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
export function formatInteger(int: number) {
  return Math.floor(int)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatMoney(amount: number, decPlaces = 2) {
  const dec = amount % 1;
  return (
    "$" + formatInteger(amount) + (decPlaces > 0 ? dec.toFixed(decPlaces).slice(1) : "")
  );
}

export function formatPercentage(percent: number, decPlaces = 0) {
  return (percent * 100).toFixed(decPlaces) + "%";
}

export function findCoeff(bonds: number[], threshold: number) {
  // sort bond amounts descendingly
  bonds.sort((a, b) => {
    if (a > b) {
      return -1;
    } else {
      return 1;
    }
  });

  // find Nakamoto coefficient
  let totalBond = bonds.reduce((a, b) => a + b, 0);
  let cummBond = 0;
  let coeff = 0;
  for (let i = 0; i < bonds.length; i++) {
    cummBond += bonds[i];
    // thorchteain can be halted by 33%+1 nodes
    if (cummBond > totalBond * threshold) {
      coeff = i + 1;
      break;
    }
  }

  return { totalBond, cummBond, coeff };
}

// test
if (require.main === module) {
  // should be 123.456789
  console.log(`parseBigInt("123456789", 6) = ${parseBigInt("123456789", 6)}`);
  // should be 1.23456789
  console.log(`parseBigInt("123456789", 8) = ${parseBigInt("123456789", 8)}`);

  // should be 123,456,789
  console.log(`formatInteger(123456789) = ${formatInteger(123456789)}`);
  // should be 1,234,567 (decimal part is rounded down)
  console.log(`formatInteger(1234567.89) = ${formatInteger(1234567.89)}`);
}
