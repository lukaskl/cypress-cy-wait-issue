
/**
 * @param {moment} departureDate
 * @param {moment} returnDate
 */
module.exports = (departureDate, returnDate) => {
  departureDate =departureDate.clone();
  returnDate =returnDate.clone();
  const departureDateString = departureDate.format('YYYY-MM-DD');
  const departureNextDateString = departureDate.add(1, 'day').format('YYYY-MM-DD');
  const returnDateString = returnDate.format('YYYY-MM-DD');
  return {
    searchResults: {
      tes1: departureDateString,
      test2: departureNextDateString,
      test3: returnDateString
    }
  }
}