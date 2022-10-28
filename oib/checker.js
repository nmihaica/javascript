module.exports = function (input) {
  let re = /\d{11}/
  let re2 = /^(?:HR)?(\d{10}(\d))$/
  let oib = input.toString();

  if (
    oib.match(re) === null &&
    oib.match(re2) === null
    ) {
      return false;
  }

  // if has HR prefix, strip it
  if (oib.substring(0, 2) === 'HR'){
    oib = oib.substring(2, 13)
  }

  // algorithm
  let calculated = 10;
  for (const digit of oib.substring(0, 10)) {
      calculated += parseInt(digit);
      calculated %= 10;

      if (calculated === 0) {
          calculated = 10;
      }
      calculated *= 2;
      calculated %= 11;
  }
  const check = 11 - calculated;
  if (check === 10) {
      check = 0;
  }
  return check === parseInt(oib[10]);
}

