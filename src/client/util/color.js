/**
 * Return color-code easiry to see of white and black aginst backgroundColor.
 * @param  {String} backgroundColor #rgb or #rrggbb
 * @return {String}                 #FFFFFF or #000000
 */
export function visibleColor(backgroundColor) {
  const white = '#FFFFFF';
  const black = '#000000';
  const threthold = 128;

  if (backgroundColor.length !== 4 && backgroundColor.length !== 7) {
    return black;
  }

  // '#123' or '#112233' => [17, 34, 51]
  const [r, g, b] = pickRGB(backgroundColor);

  // calc YUV
  // https://ja.wikipedia.org/wiki/YUV
  const yuv = 0.299 * r + 0.587 * g + 0.114 * b;

  return yuv >= threthold ? black : white;
}

/**
 * Convert #rgb or #rrggbb to [r, g, b].
 * @param  {String} colorCode #rgb or #rrggbb
 * @return {Array<Integer>}   [r, g, b]
 */
function pickRGB(colorCode) {
  let [r, g, b] = [255, 255, 255];

  if (colorCode.length === 4) {
    r = colorCode.substring(1,2);
    g = colorCode.substring(2,3);
    b = colorCode.substring(3,4);
    r = parseInt(r + r, 16);
    g = parseInt(g + g, 16);
    b = parseInt(b + b, 16);
  }
  else if (colorCode.length === 7) {
    r = parseInt(colorCode.substring(1,3), 16);
    g = parseInt(colorCode.substring(3,5), 16);
    b = parseInt(colorCode.substring(5,7), 16);
  }

  return [r, g, b];
}
