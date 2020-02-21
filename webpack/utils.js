function toEmoji(n) {
  const lo = 0x1f300
  const hi = 0x1f9d0
  const delta = hi - lo
  const emojis = []
  do {
    emojis.push(String.fromCodePoint(lo + (n % delta)))
    n = Math.floor(n / delta)
  } while (n > 0)
  return emojis.join('')
}

// The custom getLocalIdent function is only used for dev.
// In prod, it is recommended to use `localIdentName` so as to get consistent idempotent builds
// https://github.com/webpack-contrib/css-loader#localidentname
function devIdentity(classIndex, localName) {
  return `${localName}${toEmoji(classIndex)}`
}

const getLocalIdent = identFn => () => {
  // incremented class names
  const classes = new Map()
  let classIndex = 0

  return (context, localIdentName, localName) => {
    const key = context.resourcePath + '.' + localName
    if (!classes.has(key)) {
      classes.set(key, identFn(classIndex, localName))
      classIndex += 1
    }
    return classes.get(key)
  }
}

module.exports = {
  getDevLocalIdent: getLocalIdent(devIdentity),
}
