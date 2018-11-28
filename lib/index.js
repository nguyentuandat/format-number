"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
function formatNumber(number, locale) {
  return number.toLocaleString(locale);
}

;
var _default = formatNumber;
exports.default = _default;