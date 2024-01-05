#!/usr/bin/env node

import { MyCryptoApp } from "./src/mycrypto_app.js";
import { MyCryptoOutputFormat } from "./src/mycrypto_output_format.js";

async function main() {
  const prompt = new MyCryptoApp();
  const cryptoCurrency = new MyCryptoOutputFormat();

  try {
    const userSelect = await prompt.getCryptoDisplayChoice();
    const id = await prompt.fetchIdForSelectedTicker(userSelect);
    const response = await prompt.cryptoMarket.getCryptoInfo(id);

    if (id === 0) {
      cryptoCurrency.displayMarketOverview(response);
    } else {
      cryptoCurrency.displayCurrencyDetails(response);
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      throw err;
    }
  }
}

await main();
