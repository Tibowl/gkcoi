import { generate, configure, DeckBuilder } from "../src"; // "@tibowl/node-gkcoi"

import { writeFile, ensureDir } from "fs-extra";
import { join } from "path";
import { Theme } from "../src/type";

(async (): Promise<void> => {
  const target = "./test/out/";
  await ensureDir(target);
  configure({ cacheDir: join(target, "cache") });

  const f1 = {
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
  };

  const deckSF: DeckBuilder = {
    hqlv: 120,
    theme: "dark",
    lang: "en",
    f1: { ...f1 },
  };

  const deckCF: DeckBuilder = {
    ...deckSF,
    f2: { ...f1 },
  };

  for (const theme of ["dark", "74lc", "74mc", "74sb"] as Theme[]) {
    deckSF.theme = theme;
    deckCF.theme = theme;

    console.time("generateSF");
    const canvasSF = await generate(deckSF);
    console.timeEnd("generateSF");

    console.time("generateCF");
    const canvasCF = await generate(deckCF);
    console.timeEnd("generateCF");

    await writeFile(join(target, `test-sf-${theme}.png`), canvasSF.toBuffer());
    await writeFile(join(target, `test-cf-${theme}.png`), canvasCF.toBuffer());
  }
})();
