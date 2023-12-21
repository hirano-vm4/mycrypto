## mycrypto

日本語の README は README(JP).md を確認してください

mycrypto is a command-line tool that allows you to easily access detailed trading data and market transaction information of the entire cryptocurrency market right from your terminal. It enables access to a wide range of data, including real-time price fluctuations, market trends, and vital statistical information for each cryptocurrency.

This tool facilitates quick and efficient information gathering. It supports approximately 2400 different cryptocurrency assets, and you can search for any asset not displayed at the top by using the Ticker search.

## Features

- Access to comprehensive market trading information for the entire cryptocurrency market
- Supports approximately 2,400 cryptocurrency assets (using the [Coinlore](https://www.coinlore.com/ja/cryptocurrency-data-api) API)
- Ticker search functionality

## Prerequisites

Before installing mycrypto, ensure that your system meets the following prerequisites:

- Node.js: You need to have Node.js installed on your system. The version required for mycrypto is version 10.0.0 or higher. You can download and install Node.js from [Node.js official website](https://nodejs.org/en).
  Additionally, mycrypto relies on the following Node.js packages, which will be installed automatically when you install the tool:

- axios (v1.6.2 or higher): Used for making HTTP requests to fetch cryptocurrency data.
- cli-table2 (v0.2.0 or higher): Utilized for rendering tables in the terminal.
- enquirer (v2.4.1 or higher): Employed for interactive command-line interfaces.
  No other specific software or libraries are required to run mycrypto beyond what is listed here. Ensure that your Node.js environment is set up correctly to proceed with the installation.

## Table Overview

The mycrypto application provides a detailed table view of cryptocurrency data. Below is an overview of the information provided in each table row:

### Market Overview Table

| Title                     | Description                                                            |
| ------------------------- | ---------------------------------------------------------------------- |
| Price Checked At          | The time when the information was fetched. Format: YYYY/MM/DD HH:MM:SS |
| Total Market Cap          | Total market capitalization of all cryptocurrencies                    |
| Market Cap Change (24h)   | Market cap change rate of the entire market over the past 24 hours     |
| Total Volume              | Total trading volume of all cryptocurrencies in the market             |
| Volume Change (24h)       | Trading volume change rate of the market over the past 24 hours        |
| Bitcoin Market Dominance  | The percentage of the total market cap represented by Bitcoin          |
| Ethereum Market Dominance | The percentage of the total market cap represented by Ethereum         |
| All-Time High Volume      | The highest recorded trading volume in the entire crypto market        |
| All-Time High Market Cap  | The highest recorded market capitalization in the crypto market        |

### Individual Cryptocurrency Table

| Title              | Description                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| Price Checked At   | The time when the information was fetched. Format: YYYY/MM/DD HH:MM:SS |
| Currency Name      | Name of the cryptocurrency, e.g., Bitcoin                              |
| Ticker Symbol      | Market symbol of the cryptocurrency, e.g., BTC                         |
| Market Cap Rank    | Rank of the cryptocurrency based on market capitalization              |
| Price              | Current price of the cryptocurrency, displayed as $43,376.11/BTC       |
| Price Change (1h)  | Price change rate over the past 1 hour                                 |
| Price Change (24h) | Price change rate over the past 24 hours                               |
| Price Change (7d)  | Price change rate over the past 7 days                                 |
| Market Cap         | Total market capitalization of the cryptocurrency                      |
| Volume (24h)       | Total trading volume of the cryptocurrency over the past 24 hours      |
| Circulating Supply | Total amount of the cryptocurrency currently in circulation            |
| Total Supply       | Total amount of the cryptocurrency available                           |

## Usage Examples

### Getting an Overview of the Entire Market

Select Cryptocurrency Market Overview
![Market Overview](https://gyazo.com/4db495281bd96e70922719f5d8ccd0db/raw)

### Getting Information on Individual Cryptocurrencies

Select a ticker displayed at the top
![Individual Cryptocurrencies](https://gyazo.com/c33fec491611f1cca9fa853314abc27a/raw)

### Searching for Information by Ticker

Select Other (Ticker Search)
![Ticker Search](https://gyazo.com/6b6750cb606d18ab009624f541f4843a/raw)

## LICENSE

This software is released under the MIT License, see LICENSE.txt.
