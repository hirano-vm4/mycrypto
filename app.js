#!/usr/bin/env node

import { CryptoSearchHandler } from "./src/crypto_search_handler.js";
import { CryptoCurrency } from "./src/crypto_currency.js";

async function main() {
  const prompt = new CryptoSearchHandler();
  const cryptoCurrency = new CryptoCurrency();

  try {
    const userSelect = await prompt.getCryptoDisplayChoice();
    const id = await prompt.fetchIdForSelectedTicker(userSelect);
    const response = await prompt.apiFetcher.getCryptoInfo(id);

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
