module.exports = function zeros(expression) {
  const arrayOfStrings = expression.split("*");
  let result = 0;
  let sumOfTwos = 0;
  let sumOfFives = 0;

  for (let i = 0; i < arrayOfStrings.length; i++) {
    let factorialType = 0;
    const factorialNumeral = parseInt(arrayOfStrings[i], 10);
    let numberOfFives = 0;
    let numberOfTwos = 0;
    let zeros = 0;
    if (arrayOfStrings[i].indexOf('!!') !== -1) {
      factorialType = 2;
    } else {
      factorialType = 1;
    }

    if (factorialType === 1) {
      numberOfFives = Math.floor(factorialNumeral / 5) + Math.floor(factorialNumeral / 25) + Math.floor(factorialNumeral / 125) + Math.floor(factorialNumeral / 625);
      numberOfTwos = Math.floor(factorialNumeral / 2) + Math.floor(factorialNumeral / 4) + Math.floor(factorialNumeral / 8) + Math.floor(factorialNumeral / 16) + Math.floor(factorialNumeral / 32) + Math.floor(factorialNumeral / 64) + Math.floor(factorialNumeral / 128);
      zeros = Math.min(numberOfFives, numberOfTwos);

    } else if (factorialNumeral % 2 === 0) {
      zeros = Math.floor(factorialNumeral / 10) + Math.floor(factorialNumeral / 50) + Math.floor(factorialNumeral / 250);
      numberOfTwos = Math.floor(factorialNumeral / 2) + Math.floor(factorialNumeral / 4) + Math.floor(factorialNumeral / 8) + Math.floor(factorialNumeral / 16) + Math.floor(factorialNumeral / 32) + Math.floor(factorialNumeral / 64) + Math.floor(factorialNumeral / 128) - zeros;
      numberOfFives = 0;
    } else {
      numberOfFives = Math.floor(factorialNumeral / 5) - Math.floor(factorialNumeral / 10) + Math.floor(factorialNumeral / 25) + Math.floor(factorialNumeral / 125) + Math.floor(factorialNumeral / 625) - Math.floor(factorialNumeral / 250) - Math.floor(factorialNumeral / 1250) - Math.floor(factorialNumeral / 50);
      zeros = Math.min(numberOfFives, numberOfTwos);
      numberOfTwos = 0;
    }
    if (numberOfFives > numberOfTwos) {
      sumOfFives += numberOfFives - zeros;
    } else {
      sumOfTwos += numberOfTwos - zeros;
    }
    result += zeros;
  }

  if (sumOfTwos > 0 && sumOfFives > 0) {
    result += Math.min(sumOfTwos, sumOfFives);
  }

  return result;
}