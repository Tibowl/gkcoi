node-gkcoi  
[![License](https://img.shields.io/npm/l/express.svg)](https://github.com/Tibowl/gkcoi/blob/master/LICENSE)
====

Generate KC organization images in Node.js. [Originally](https://github.com/Nishisonic/gkcoi) developed by Nishisonic for web canvas.

Exports Deckbuilder format fleets into an image.

![](https://i.imgur.com/1edg6hX.png)
* There might be some visual differences due to changes

## Description

Allows you to create [ElectronicObserver](https://github.com/andanteyk/ElectronicObserver) style fleet images on server-side.
Also includes dark theme.

Supports Japanese, English, Korean and Chinese (Simplified)

## Usage

``` JS
import { generate } from "@tibowl/node-gkcoi";

// DeckBuilder
const deck = {
  hqlv: 120,
  theme: "dark",
  lang: "en",
  f1 = {
    s1: {
      id: 463,
      lv: 175,
      hp: 38,
      fp: 71,
      tp: 118,
      ar: 55,
      aa: 70,
      asw: 108,
      ev: 127,
      los: 94,
      luck: 62,
      items: {
        i1: { id: 122, rf: 10 },
        i2: { id: 122, rf: 10 },
        i3: { id: 106 },
        i4: { id: 173, rf: 4 },
      },
    },
  },
};

const output = await generate(deck); // returns node-canvas Canvas

await writeFile("deck.png", output.toBuffer());
```

![](https://i.imgur.com/30bjM0H.png)

## Format

Refer to [original gkcoi documentation](https://github.com/Nishisonic/gkcoi#deckbuilder).

### Differences

Also comes with a `configure` function to set cache directory. This is to reduce HTTP requests on server-side.
If you already have api_start2 data within your application, it can be passed through via `generate(..., { start2Data })`.

## Examples

See [./test/index.ts](https://github.com/Tibowl/node-gkcoi/blob/master/test/index.ts) for a small example. Asashio's [randomfleet.ts](https://github.com/Tibowl/Asashio/blob/master/src/commands/tools/randomfleet.ts) is a larger use-case, includes setting up cache, converting TsunDB format and passes own api_start2 data.

## Install
Fork, for use in node.js
``` shell
$ npm install @tibowl/node-gkcoi
```
Original, for use on web
``` shell
$ npm install gkcoi
```

## License

[MIT License](https://github.com/Nishisonic/gkcoi/blob/master/LICENSE)  
※コードのみ

- Chart.js
  - ドーナツ円グラフの表示に使用
  - [MIT License](https://github.com/chartjs/Chart.js/blob/master/LICENSE.md)

- chartjs-plugin-datalabels
  - ドーナツ円グラフの表示に使用
  - [MIT License](https://github.com/chartjs/chartjs-plugin-datalabels/blob/master/LICENSE.md)

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
