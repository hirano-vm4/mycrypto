import axios from "axios";

export class CryptoMarketInfo {
  // APIの取得
  async getCryptoInfo(id) {
    const path = "/api/ticker/";
    const query = `?id=${id}`;
    const url =
      id === 0
        ? "https://api.coinlore.net/api/global/"
        : "https://api.coinlore.net" + path + query;

    const response = await axios.get(url);
    const responseTime = new Date(response.headers.date);

    return {
      data: response.data[0],
      time: responseTime,
    };
  }
}
