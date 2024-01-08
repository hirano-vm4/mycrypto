import { CryptoTable } from "./crypto_table.js";

export class CurrencyDetail {
  constructor() {
    this.cryptoTable = new CryptoTable();
  }

  display(response) {
    const table = this.cryptoTable.create();
    const marketData = [
      ["Price Checked At", response.time.toLocaleString()],
      ["Currency Name", response.data.name],
      ["Ticker Symbol", response.data.symbol],
      ["Market Cap Rank", "Rank " + response.data.rank],
      [
        "Price",
        this.cryptoTable.formatNumber(response.data.price_usd, "USD", 10) +
          `/${response.data.symbol}`,
      ],
      ["Price Change(1h)", response.data.percent_change_1h + "%"],
      ["Price Change(24h)", response.data.percent_change_24h + "%"],
      ["Price Change(7d)", response.data.percent_change_7d + "%"],
      [
        "Market Cap",
        this.cryptoTable.formatNumber(response.data.market_cap_usd, "USD"),
      ],
      [
        "Volume(24h)",
        this.cryptoTable.formatNumber(response.data.volume24, "USD"),
      ],
      [
        "Circulating Supply",
        this.cryptoTable.formatNumber(response.data.csupply) +
          ` ${response.data.symbol}`,
      ],
      [
        "Total Supply",
        this.cryptoTable.formatNumber(response.data.tsupply) +
          ` ${response.data.symbol}`,
      ],
    ];

    marketData.forEach(([title, value]) => {
      table.push([
        this.cryptoTable.titleStyle(title),
        this.cryptoTable.valueStyle(value),
      ]);
    });

    console.log(table.toString());
  }
}
