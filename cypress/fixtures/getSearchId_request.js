
/**
 * @param {string} departureDate
 * @param {string} returnDate
 */
module.exports = (departureDate, returnDate) => {

  return {
    departureDate: departureDate.format('YYYY-MM-DD'),
    returnDate: returnDate.format('YYYY-MM-DD'),
  }
}