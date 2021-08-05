import cosmos from "./cosmos";
import solana from "./solana";
import terra from "./terra";
import thorchain from "./thorchain";
import { formatInteger, formatMoney, formatPercentage } from "./helpers";

const chains = [cosmos, solana, terra, thorchain];
const promises = chains.map((chain) => chain.compute());

async function run() {
  Promise.all(promises).then((results) => {
    // sort chains from highest coeff to lowest
    // if same, sort by bribe
    results.sort((a, b) => {
      if (a.coeff > b.coeff) {
        return -1;
      } else if (a.coeff < b.coeff) {
        return 1;
      } else {
        if (a.bribe > b.bribe) {
          return -1;
        } else {
          return 1;
        }
      }
    });

    // generate table
    const rows = results.map((result) => {
      let row = "<tr>";
      row += `<td>${result.name}</td>`;
      row += `<td>${result.symbol}</td>`;
      row += `<td>${formatMoney(result.price)}</td>`;
      // row += `<td>${formatInteger(result.totalBond)} ${result.symbol}</td>`;
      row += `<td>${formatPercentage(result.threshold)}</td>`;
      row += `<td>${result.coeff}</td>`;
      row += `<td>${formatMoney(result.bribe, 0)}</td>`;
      row += "</tr>";
      return row;
    });

    (document.getElementById("tbody") as HTMLElement).innerHTML = rows.join("\n");
  });
}

run();
