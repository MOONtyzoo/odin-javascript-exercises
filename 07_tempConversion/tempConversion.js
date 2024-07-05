const convertToCelsius = function(temp) {
  temp = (5.0/9.0)*(temp - 32)
  return Math.round(temp*10)/10
};

const convertToFahrenheit = function(temp) {
  temp = (9.0/5.0)*temp + 32;
  return Math.round(temp*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
