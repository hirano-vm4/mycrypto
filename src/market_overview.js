import { CryptoTable } from "./crypto_table.js";

export class MarketOverView {
  constructor() {
    this.cryptoTable = new CryptoTable();
  }

  display(response) {
    const table = this.cryptoTable.create();
    const marketData = [
      ["Price Checked At", response.time.toLocaleString()],
      [
        "Total Market Cap",
        this.cryptoTable.formatNumber(response.data.total_mcap, "USD"),
      ],
      ["Market Cap Change(24h)", response.data.mcap_change + "%"],
      [
        "Total Volume",
        this.cryptoTable.formatNumber(response.data.total_volume, "USD", 3),
      ],
      ["Volume Change(24h)", response.data.volume_change + "%"],
      ["Bitcoin Market Dominance", response.data.btc_d + "%"],
      ["Ethereum Market Dominance", response.data.eth_d + "%"],
      [
        "All-Time High Volume",
        this.cryptoTable.formatNumber(response.data.volume_ath, "USD"),
      ],
      [
        "All-Time High Market Cap",
        this.cryptoTable.formatNumber(response.data.mcap_ath, "USD"),
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
