/*
pt-br
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

    en-us
    Create a function that receives a string in celsius or fahrenheit
and make the transformation from one unit to another
     C = (F - 32) * 5/9
     F = C * 9/5 + 32

*/

// attempt number three

console.log('===== START of exercise | Temperature Conversion | =====')
console.log('===== Attempt number three =====')
function temperatureConversion(temperature) {
  let splitTemperature = temperature.toUpperCase().split(' ')

  let temperatureNumber = Number
  temperatureNumber = splitTemperature[0]

  let mesureUnit = String
  mesureUnit = splitTemperature[1] === 'C' || splitTemperature[1] === 'F'

  if ((splitTemperature[0] = isNaN(splitTemperature[0]))) {
    splitTemperature[0] === true
    console.log('ERRO: insira um número válido')
  } else if (mesureUnit === false) {
    console.log('ERRO: insira uma unidade de medida válida')
  } else if (splitTemperature[1] === 'F') {
    temperature = (temperatureNumber - 32) * (5 / 9)
    console.log(temperature.toFixed(1), 'C')
  } else {
    temperature = temperatureNumber * (9 / 5) + 32
    console.log(temperature.toFixed(1), 'F')
  }
}

temperatureConversion('0 C')
temperatureConversion('a C')
temperatureConversion('0 F')
temperatureConversion('0 G')

console.log('===== Attempt number two =====')

function temperatureConversionSettingTrueOrFalse(degrees, celsius) {
  let temperature

  if (celsius) {
    celsius = true
    temperature = degrees * (9 / 5) + 32

    console.log(temperature.toFixed(1), 'F')
  } else {
    temperature = (degrees - 32) * (5 / 9)

    console.log(temperature.toFixed(1), 'C')
  }
}

temperatureConversionSettingTrueOrFalse(0, true)
temperatureConversionSettingTrueOrFalse(0, false)

console.log('===== Attempt number one =====')

function celsiusToFahrenheint(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32

  console.log(fahrenheit.toFixed(1), 'F')
}

celsiusToFahrenheint(0)

function fahrenheitToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9)

  console.log(celsius.toFixed(1), 'C')
}

fahrenheitToCelsius(0)

console.log('===== END of exercise | Temperature Conversion | =====')
