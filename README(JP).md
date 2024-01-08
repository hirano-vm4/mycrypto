## mycrypto

mycrypto は、暗号資産市場全体の市場取引情報や各銘柄の詳細な取引データをターミナル上で簡単に取得できるコマンドラインツールです。ターミナルを通じて、リアルタイムの価格変動、市場の傾向、銘柄ごとの重要な統計情報など、幅広いデータへのアクセスが可能です。

このツールは、迅速かつ効率的な情報収集を可能にします。約 2400 種類の暗号資産銘柄に対応し、
トップに表示されていない銘柄については Ticker で検索が可能です。

## 特徴

- 暗号資産市場全体の市場取引情報の取得
- 約 2,400 種類の暗号資産銘柄に対応([Coinlore](https://www.coinlore.com/ja/cryptocurrency-data-api)の API を使用)
- ティッカー検索

## 前提条件

mycrypto をインストールする前に、以下の前提条件がシステムに満たされていることを確認してください：

- Node.js: システムに Node.js がインストールされている必要があります。mycrypto に必要なバージョンは 10.0.0 以上です。Node.js は[Node.js 公式ウェブサイト](https://nodejs.org/en)からダウンロードしてインストールできます。
  さらに、mycrypto は以下の Node.js パッケージに依存しており、ツールをインストールする際に自動的にインストールされます：

- axios（バージョン 1.6.2 以上）: 暗号通貨データの取得に使用する HTTP リクエストを行うために使用されます。
- cli-table2（バージョン 0.2.0 以上）: ターミナルでのテーブル表示に利用されます。
- enquirer（バージョン 2.4.1 以上）: 対話型コマンドラインインターフェースに使用されます。
  ここに挙げられているものを除いて、mycrypto を実行するために特定のソフトウェアやライブラリが必要とされることはありません。インストールに進む前に、Node.js 環境が正しくセットアップされていることを確認してください。

## 使用方法

npx を利用して、mycrypto を実行します。

```javascript
npx @hirano-vm4/mycrypto
```

## 表示データの説明

mycrypto は、暗号通貨の詳細な取引情報表にして提供します。以下は、テーブルの各行で提供される情報の概要です：

### 市場全体の概要

| タイトル                  | 説明                                             |
| ------------------------- | ------------------------------------------------ |
| Price Checked At          | 情報を取得した日時。形式: YYYY/MM/DD HH:MM:SS    |
| Total Market Cap          | 市場全体の暗号通貨の総時価総額                   |
| Market Cap Change (24h)   | 過去 24 時間での市場全体の時価総額の変動率       |
| Total Volume              | 市場全体の暗号通貨の総取引量                     |
| Volume Change (24h)       | 過去 24 時間での市場全体の取引量の変動率         |
| Bitcoin Market Dominance  | ビットコインが市場全体の時価総額に占める割合     |
| Ethereum Market Dominance | イーサリアムが市場全体の時価総額に占める割合     |
| All-Time High Volume      | 市場全体の暗号通貨で記録された史上最高の取引量   |
| All-Time High Market Cap  | 市場全体の暗号通貨で記録された史上最高の時価総額 |

### 個別通貨情報

| タイトル           | 説明                                          |
| ------------------ | --------------------------------------------- |
| Price Checked At   | 情報を取得した日時。形式: YYYY/MM/DD HH:MM:SS |
| Currency Name      | 暗号通貨の名前、例: Bitcoin                   |
| Ticker Symbol      | 暗号通貨の市場シンボル、例: BTC               |
| Market Cap Rank    | 時価総額における暗号通貨のランク              |
| Price              | 暗号通貨の現在価格、$43,376.11/BTC として表示 |
| Price Change (1h)  | 過去 1 時間の価格変動率                       |
| Price Change (24h) | 過去 24 時間の価格変動率                      |
| Price Change (7d)  | 過去 7 日間の価格変動率                       |
| Market Cap         | 暗号通貨の総時価総額                          |
| Volume (24h)       | 過去 24 時間の暗号通貨の総取引量              |
| Circulating Supply | 現在流通している暗号通貨の総量                |
| Total Supply       | 利用可能な暗号通貨の総量                      |

## 使用例

### 市場全体の概要を取得

`Cryptocurrency Market Overview`を選択
![市場全体の概要](https://gyazo.com/4db495281bd96e70922719f5d8ccd0db/raw)

### 個別の暗号資産の情報を取得

トップに表示されるティッカーを選択
![市場全体の概要](https://gyazo.com/c33fec491611f1cca9fa853314abc27a/raw)

### ティッカーで検索して情報を取得

`Other (Ticker Search)`を選択
![ティッカーで検索](https://gyazo.com/6b6750cb606d18ab009624f541f4843a/raw)

## ライセンス

このソフトウェアは、MIT ライセンスの下で公開されています。LICENSE.txt を参照してください。
