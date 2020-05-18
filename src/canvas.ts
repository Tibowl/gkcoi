import {
  createCanvas,
  Canvas as ccanvas,
  Image as cimage,
  CanvasRenderingContext2D as crc2d,
  loadImage,
} from "canvas";

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

export const fetchImage = async (src: string): Promise<Image> => {
  return loadImage(src);
};
