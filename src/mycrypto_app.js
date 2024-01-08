import { cryptoTickerToIdMap, cryptoChoices } from "../config/constants.js";
import { CryptoMarket } from "./crypto_market.js";
import { MarketOverView } from "./market_overview.js";
import { CurrencyDetail } from "./currency_detail.js";
import enquirer from "enquirer";

export class MyCryptoApp {
  constructor() {
    this.cryptoMarket = new CryptoMarket();
  }

  async exec() {
    try {
      const ticker = await this.selectCryptoOption();
      const id = await this.getIdForTicker(ticker);
      const response = await this.cryptoMarket.getCryptoInfo(id);

      this.displayCryptoInfo(id, response);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        throw err;
      }
    }
  }

  async selectCryptoOption() {
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

  async getIdForTicker(userSelect) {
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

  displayCryptoInfo(id, response) {
    if (id === 0) {
      const marketOverView = new MarketOverView();
      marketOverView.display(response);
    } else {
      const currencyDetail = new CurrencyDetail();
      currencyDetail.display(response);
    }
  }
}
