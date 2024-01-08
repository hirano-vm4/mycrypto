import Table from "cli-table2";
import colors from "colors";

export class CryptoTable {
  create() {
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
