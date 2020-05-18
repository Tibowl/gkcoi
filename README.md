node-gkcoi  
[![License](https://img.shields.io/npm/l/express.svg)](https://github.com/Tibowl/gkcoi/blob/master/LICENSE)
====

Generate KC organization images in node. Original by Nishisonic

パラメータから艦これ編成画像をCanvas形式で出力します

![](https://i.imgur.com/1edg6hX.png)

## Description

[七四式電子観測儀(ElectronicObserver)](https://github.com/andanteyk/ElectronicObserver)で作られた編成画像をWeb上でも再現可能にするライブラリです  
また、オリジナル版(Dark ver. 上図参照)も提供します

※多言語対応(日本語・English・한국어・中文(簡体))

## Requirement

- [Chart.js](https://github.com/chartjs/Chart.js)
- [chartjs-plugin-labels](https://github.com/emn178/chartjs-plugin-labels)
- [chartjs-plugin-colorschemes](https://github.com/nagix/chartjs-plugin-colorschemes)

Dark ver.&連合艦隊&基地航空隊使用時のみ使用  
ドーナツ円グラフの表示に使用します

## Usage

``` JS
import { generate } from "gkcoi";

// DeckBuilder
const deck = {
  lang: "en",
  theme: "dark",
  hqlv: 120,
  f1: {
    s1: {
      id: 548,
      lv: 133,
      hp: 38,
      fp: 64,
      tp: 90,
      aa: 65,
      ar: 53,
      asw: 129,
      ev: 106,
      los: 55,
      luck: 21,
      items: {
        i1: { id: 262, rf: 0, mas: 0 },
        i2: { id: 261, rf: 0, mas: 0 },
        i3: { id: 288, rf: 0, mas: 0 },
        i4: { id: 173, rf: 0, mas: 0 },
      },
    },
  },
};

generate(deck); // Promise<Canvas>
```

![](https://i.imgur.com/Sgj2SVz.png)

## Format

?は無くても動く部分

### deckbuilder

```
{
  /**
   * 言語
   * jp=日本語(default)
   * en=英語
   * kr=韓国語
   * scn=中国語
   */
  lang?: "jp" | "en" | "kr" | "scn";
  /**
   * テーマ
   * dark=オリジナル(default)
   * 74lc=七四式(大型)
   * 74mc=七四式(中型)
   * 74sb=七四式(小型)
   */
  theme?: "dark" | "74lc" | "74mc" | "74sb";
  /** 司令部Lv(default=120) */
  hqlv?: number;
  /** 艦隊 */
  f1~f4?: {
    /** 艦隊名(七四式のときのみ表示) */
    name?: string;
    /** 艦娘 */
    s1~s7?: {
        /** 艦ID */
        id: number;
        /** レベル */
        lv: number;
        /** 装備 */
        items: {
          i1~ix?: {
              /** 装備ID*/
              id: number;
              /** 改修 */
              rf: number;
              /** 熟練度 */
              mas: number;
          };
        };
        /** 耐久 */
        hp: number;
        /** 火力 */
        fp: number;
        /** 雷装 */
        tp: number;
        /** 対空 */
        aa: number;
        /** 装甲 */
        ar: number;
        /** 対潜 */
        asw: number;
        /** 回避 */
        ev: number;
        /** 索敵 */
        los: number;
        /** 運 */
        luck: number;
    }
  }
  /** 基地航空隊 */
  a1~a3?: {
    /** 基地状態(使わない) */
    mode?: number;
    /** 装備 */
    items: {
      i1~i4?: {
          /** 装備ID*/
          id: number;
          /** 改修 */
          rf: number;
          /** 熟練度 */
          mas: number;
      };
    }
  }
  /**
   * チャート表示
   * オリジナル(dark)&基地航空隊使用&複数艦隊表示時のみ
   * as+ = 制空権確保(default)
   * as  = 航空優勢
   * ap  = 航空劣勢
   */
  as?: AirState;
  /**
   * コメント表示
   * オリジナル(dark)&基地航空隊使用&複数艦隊表示時のみ
   * 改行は\n
   */
  cmt?: string;
}
```

### options

この引数を指定すると、画像・マスターデータ取得先をデフォルトから変えることができます  
これにより、ライブラリの更新が遅れたとしても独自で更新することが可能になります

* start2URL(マスターデータ)
  * デフォルト:https://raw.githubusercontent.com/Nishisonic/gkcoi/master/static/START2.json

設定する場合はファイルを直指定してください

* shipURL(艦娘画像)
  * デフォルト:https://raw.githubusercontent.com/Nishisonic/gkcoi/master/static/ship

設定する場合は途中まで指定  
その先はライブラリが``` `${shipURL}/card/1.png` ```等といった形で取得します

## Install

``` shell
$ npm install gkcoi
```

## License

[MIT License](https://github.com/Nishisonic/gkcoi/blob/master/LICENSE)  
※コードのみ

- Chart.js
  - ドーナツ円グラフの表示に使用
  - [MIT License](https://github.com/chartjs/Chart.js/blob/master/LICENSE.md)

- chartjs-plugin-labels
  - ドーナツ円グラフの表示に使用
  - [MIT License](https://github.com/emn178/chartjs-plugin-labels/blob/master/LICENSE.txt)

- chartjs-plugin-colorschemes
  - ドーナツ円グラフの表示に使用
  - [MIT License](https://github.com/nagix/chartjs-plugin-colorschemes/blob/master/LICENSE.md)

- ElectronicObserver
  - 七四式ver.のアイコンで使用
  - [MIT License](https://github.com/andanteyk/ElectronicObserver/blob/develop/LICENSE)

- kc3-translations
  - 翻訳で使用
  - [MIT License](https://github.com/KC3Kai/kc3-translations/blob/master/LICENSE)

## Author

[にしくま(Nishisonic)](https://github.com/Nishisonic)
