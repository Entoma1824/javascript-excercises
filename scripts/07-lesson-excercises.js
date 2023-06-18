//7a & 7b
function greet(name) {
  //7c
  if(name !== undefined) {
    console.log(`Hello ${name}`);
  } else {
    console.log('Hello there!');
  } 
}

//7d
function convertToFahrenheit(celsius) {
  const fahrenheit = (celsisus *(9/5)) +32;

  return fahrenheit;
}

//7e
function convertToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) *(5/9)

  return celsius;
}
//7f
function converTemperature(degrees, unit) {
  if(!unit) {
    if(unit === ('F'|| 'f')) {
      const celsius = convertToCelsius(degrees);
      console.log(`${celsius}C`);
    } else if(unit === ('C'|| 'c')) {
      const fahrenheit = convertToFahrenheit(degrees);
      console.log(`${fahrenheit}F`);
    }
  } else {
    console.log('Kindly add the unit of temperature.');
  }
}