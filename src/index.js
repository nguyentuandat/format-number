/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
function formatNumber(number, locale) {
    return number.toLocaleString(locale);
};
export default formatNumber;
