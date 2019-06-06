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
export function getLabelWidth (descriptors, fontSize) {
  let maxLen = 0
  if (descriptors instanceof Array) {
    maxLen = getStringLength('Item ' + descriptors.length)
  } else {
    for (const key in descriptors) {
      maxLen = Math.max(maxLen, getStringLength((descriptors[key] || {}).label || key))
    }
  }
  return `${maxLen * fontSize + 30}px` // add 30px for required char '*'
}

/**
 * darken color with offset
 * @param {String} color // HEX color
 * @param {Integer} offset // offset to darken, offset should >= 0
 */
const DARKEST_COLOR = 150
export function darkenColor (color, offset) {
  if (offset === 0) return color
  if (color[0] === '#') color = color.slice(1)
  offset = parseInt(offset)
  if (isNaN(offset)) return color

  offset = 0 - offset
  if (offset >= 0) return color

  const num = parseInt(color, 16)
  let r = (num >> 16) + offset
  let b = ((num >> 8) & 0x00FF) + offset
  let g = (num & 0x0000FF) + offset

  r = Math.max(DARKEST_COLOR, r)
  b = Math.max(DARKEST_COLOR, b)
  g = Math.max(DARKEST_COLOR, g)

  const newColor = g | (b << 8) | (r << 16)
  return `#${newColor.toString(16)}`
}

export function parseDescriptor (descriptor) {
  if (['object', 'array'].includes(descriptor.type)) {
    if (descriptor.type === 'object') {
      // object
      if (descriptor.fields) {
        const data = {}
        for (const key in descriptor.fields) {
          data[key] = parseDescriptor(descriptor.fields[key])
        }
        return data
      } else if (descriptor.defaultField) {
        // object is a hashmap
        return {}
      }
    } else {
      // array
      return []
    }
  } else {
    return null
  }
}
