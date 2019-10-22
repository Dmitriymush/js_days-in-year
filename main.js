function daysInYear(year) {
  try {
    if (!Number.isInteger(year) || year < 0) {
      throw new Error();
    }
    return year % 4 === 0 ?  366 : 365;
  } catch (err) {
    alert('INPUT EXCEPTION');
  }
}
