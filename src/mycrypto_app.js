import { cryptoTickerToIdMap, cryptoChoices } from "../config/constants.js";
import { CryptoMarket } from "./crypto_market.js";
import enquirer from "enquirer";

export class MyCryptoApp {
  constructor() {
    this.cryptoMarket = new CryptoMarket();
  }

  async getCryptoDisplayChoice() {
    const answer = await enquirer.prompt([
      {
        type: "select",
        message: "Please choose what you want to display.",
        name: "selectedData",
        choices: cryptoChoices,
      },
    ]);

    return answer.selectedData;
  }

  async requestTickerSymbol() {
    const response = await enquirer.prompt({
      type: "input",
      name: "ticker",
      message:
        "Please enter the ticker symbol of the cryptocurrency you want to search for and press Enter.",
    });

    return response.ticker.toUpperCase();
  }

  async fetchIdForSelectedTicker(userSelect) {
    let ticker = userSelect;

    if (userSelect === "Other (Ticker Search)") {
      ticker = await this.requestTickerSymbol();
    }

    const id = this.tickerToId(ticker);

    if (id === undefined) {
      throw new Error(`Ticker '${ticker}' is not supported.`);
    }
    return id;
  }

  tickerToId(ticker) {
    return cryptoTickerToIdMap[ticker];
  }
}
