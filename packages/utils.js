/**
 * get font length of string
 * @param {String} str
 */
export function getStringLength (str) {
  let len = 0
  for (let i = 0; i < str.length; i++) {
    str.charCodeAt(i) > 255 ? len += 2 : len++
  }
  return Math.round(len / 2)
}

/**
 * get longest key's font length of object
 * @param {Object} object
 */
export function getLongestKeyLength (object) {
  if (typeof object !== 'object') return 0
  let maxLen = 0
  Object.keys(object || {}).forEach(key => {
    maxLen = Math.max(getStringLength(key), maxLen)
  })
  return maxLen
}

/**
 * darken color with offset
 * @param {String} color // HEX color
 * @param {Integer} offset // offset to darken, offset should >= 0
 */
const DARKEST_COLOR = 150
export function darkenColor (color, offset) {
  if (color[0] === '#') color = color.slice(1)
  offset = parseInt(offset)
  if (isNaN(offset)) return color

  offset = 0 - offset
  if (offset >= 0) return color

  const num = parseInt(color, 16)
  let r = (num >> 16) + offset
  let b = ((num >> 8) & 0x00FF) + offset
  let g = (num & 0x0000FF) + offset

  r = Math.min(DARKEST_COLOR, r)
  b = Math.min(DARKEST_COLOR, b)
  g = Math.min(DARKEST_COLOR, g)

  const newColor = g | (b << 8) | (r << 16)
  return `#${newColor.toString(16)}`
}
