#!/usr/bin/env node

import { CryptoSearchHandler } from "./src/crypto_search_handler.js";
import { DisplayManager } from "./src/display_manager.js";

async function main() {
  const prompt = new CryptoSearchHandler();
  const displayManager = new DisplayManager();

  try {
    const userSelect = await prompt.getCryptoDisplayChoice();
    const id = await prompt.fetchIdForSelectedTicker(userSelect);
    const response = await prompt.apiFetcher.getCryptoInfo(id);

    if (id === 0) {
      displayManager.displayMarketOverview(response);
    } else {
      displayManager.displayCurrencyDetails(response);
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      throw err;
    }
  }
}

main();
