import { cryptoTickerToIdMap, cryptoChoices } from "../config/constants.js";
import { ApiFetcher } from "./api_fetcher.js";
import enquirer from "enquirer";

export class CryptoSearchHandler {
  constructor() {
    this.apiFetcher = new ApiFetcher();
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
    let id;
    let tickerToCheck;

    if (userSelect === "Other (Ticker Search)") {
      const otherTicker = await this.requestTickerSymbol();
      tickerToCheck = otherTicker;
      id = this.tickerToId(otherTicker);
    } else {
      tickerToCheck = userSelect;
      id = this.tickerToId(userSelect);
    }

    if (id === undefined) {
      throw new Error(`Ticker '${tickerToCheck}' is not supported.`);
    }
    return id;
  }

  tickerToId(ticker) {
    return cryptoTickerToIdMap[ticker];
  }
}
