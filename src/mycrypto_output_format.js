import Table from "cli-table2";
import colors from "colors";

export class MyCryptoOutputFormat {
  createTable() {
    return new Table({
      head: ["Market Overview".rainbow.bold, "Value".grey.bold],
      colWidths: [30, 30],
      chars: {
        top: "═",
        "top-mid": "╤",
        "top-left": "╔",
        "top-right": "╗",
        bottom: "═",
        "bottom-mid": "╧",
        "bottom-left": "╚",
        "bottom-right": "╝",
        left: "║",
        "left-mid": "╟",
        mid: "─",
        "mid-mid": "┼",
        right: "║",
        "right-mid": "╢",
        middle: "│",
      },
    });
  }

  displayMarketOverview(response) {
    const table = this.createTable();

    const marketData = [
      ["Price Checked At", response.time.toLocaleString()],
      ["Total Market Cap", this.formatNumber(response.data.total_mcap, "USD")],
      ["Market Cap Change(24h)", response.data.mcap_change + "%"],
      ["Total Volume", this.formatNumber(response.data.total_volume, "USD", 3)],
      ["Volume Change(24h)", response.data.volume_change + "%"],
      ["Bitcoin Market Dominance", response.data.btc_d + "%"],
      ["Ethereum Market Dominance", response.data.eth_d + "%"],
      [
        "All-Time High Volume",
        this.formatNumber(response.data.volume_ath, "USD"),
      ],
      [
        "All-Time High Market Cap",
        this.formatNumber(response.data.mcap_ath, "USD"),
      ],
    ];

    marketData.forEach(([title, value]) => {
      table.push([this.titleStyle(title), this.valueStyle(value)]);
    });

    console.log(table.toString());
  }

  displayCurrencyDetails(response) {
    const table = this.createTable();

    const marketData = [
      ["Price Checked At", response.time.toLocaleString()],
      ["Currency Name", response.data.name],
      ["Ticker Symbol", response.data.symbol],
      ["Market Cap Rank", "Rank " + response.data.rank],
      [
        "Price",
        this.formatNumber(response.data.price_usd, "USD", 10) +
          `/${response.data.symbol}`,
      ],
      ["Price Change(1h)", response.data.percent_change_1h + "%"],
      ["Price Change(24h)", response.data.percent_change_24h + "%"],
      ["Price Change(7d)", response.data.percent_change_7d + "%"],
      ["Market Cap", this.formatNumber(response.data.market_cap_usd, "USD")],
      ["Volume(24h)", this.formatNumber(response.data.volume24, "USD")],
      [
        "Circulating Supply",
        this.formatNumber(response.data.csupply) + ` ${response.data.symbol}`,
      ],
      [
        "Total Supply",
        this.formatNumber(response.data.tsupply) + ` ${response.data.symbol}`,
      ],
    ];

    marketData.forEach(([title, value]) => {
      table.push([this.titleStyle(title), this.valueStyle(value)]);
    });

    console.log(table.toString());
  }

  formatNumber(number, currencyCode = "", digits = 0) {
    const numericValue = parseFloat(number);

    if (currencyCode) {
      return numericValue.toLocaleString("ja-JP", {
        style: "currency",
        currency: currencyCode,
        maximumFractionDigits: digits,
      });
    }

    return numericValue.toLocaleString("ja-JP", {
      maximumFractionDigits: digits,
    });
  }

  titleStyle(text) {
    return text.bold.magenta.underline;
  }

  valueStyle(value) {
    return value.bold.white;
  }
}
