import axios from "axios";
import { formatInteger, parseBigInt } from "./helpers";
import { Chain } from "./chains";

interface Node {
  status: "Active" | "Standby" | "Whitelisted";
  bond: string;
}

const thorchain = new Chain("thorchain", "thorchain", 1 / 3);

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
    // thorchain can be halted by 33%+1 nodes
    if (cummBond > totalBond / 3) {
      coeff = i + 1;
      break;
    }
  }

  const bribe = cummBond * price;

  console.log(`totalBond = ${formatInteger(totalBond)} RUNE`);
  console.log(`coeff = ${coeff}`);
  console.log(`bribe = $${formatInteger(bribe)}`);

  return { totalBond, coeff, bribe };
};

export default thorchain;

if (require.main === module) {
  thorchain.compute();
}
