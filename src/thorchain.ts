import axios from "axios";
import { findCoeff, formatInteger, parseBigInt } from "./helpers";
import { Chain } from "./chains";

interface Node {
  status: "Active" | "Standby" | "Whitelisted";
  bond: string;
}

const thorchain = new Chain("thorchain", "RUNE", 1 / 3);

thorchain["compute"] = async () => {
  // RUNE price
  const price = (
    await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=thorchain&vs_currencies=usd"
    )
  ).data.thorchain.usd;

  // list of nodes
  const nodes: Node[] = (
    await axios.get("https://midgard.thorchain.info/v2/thorchain/nodes")
  ).data;

  // filter off inactive nodes
  const activeNodes = nodes.filter((node) => {
    return node.status === "Active";
  });

  // the bonded amount of each active node
  const bonds = activeNodes.map((node) => {
    return parseBigInt(node.bond, 8); // RUNE has 8 decimal places
  });

  // thorchain can be halted by 33%+1 validators
  const { totalBond, cummBond, coeff } = findCoeff(bonds, 1 / 3);

  const bribe = cummBond * price;

  console.log(`totalBond = ${formatInteger(totalBond)} RUNE`);
  console.log(`coeff = ${coeff}`);
  console.log(`bribe = $${formatInteger(bribe)}`);

  return { totalBond, coeff, bribe };
};

// test
if (require.main === module) {
  thorchain.compute();
}

export default thorchain;
