import {
  createCanvas,
  Canvas as ccanvas,
  Image as cimage,
  CanvasRenderingContext2D as crc2d,
  loadImage,
} from "canvas";
import { join } from "path";
import { ensureDir, readFile, writeFile } from "fs-extra";
import fetch from "node-fetch";

import { MASTER_URL } from "./utils";

export type Image = cimage;
export type Canvas = ccanvas;

export { createCanvas };

export const createCanvas2D = (
  width: number,
  height: number
): { canvas: Canvas; ctx: crc2d } => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw "Failed to create Canvas 2D Context";
  }

  return { canvas, ctx };
};

let cacheDir: string | undefined = undefined;
export function setCacheDir(dir: string): void {
  cacheDir = dir;
}

export const fetchImage = async (src: string): Promise<Image> => {
  if (cacheDir && /^https?:/.test(src)) {
    const img = src.replace(MASTER_URL, "").replace("://", "/");
    const path = join(cacheDir, img);
    try {
      return loadImage(await readFile(path));
    } catch (error) {
      const out = await (await fetch(src)).buffer();
      await ensureDir(join(path, ".."));
      await writeFile(path, out);
      return loadImage(out);
    }
  }

  return loadImage(src);
};
