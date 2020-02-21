/* eslint-disable immutable/no-mutation */

// Set up i18n formats to avoid format-message warnings:
import { initFormatMessage } from '../src/format'
initFormatMessage()

window.scrollBy = () => {}
window.scrollTo = () => {}
window.Element.prototype.scrollIntoView =
  window.Element.prototype.scrollIntoView || (() => {})
