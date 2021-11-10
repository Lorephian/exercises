//====== Exercise 6 - money converter

const request = [
  'Type the amount of money you want to exchange: ',
  'Type the current value of the currency you want to buy: ',
  'Type the tax of the transaction: '
]

const requestInput = (index = 0) => {
  process.stdout.write(request[index])
}

requestInput()

const values = []

process.stdin.on('data', data => {
  values.push(data)
  if (values.length < request.length) {
    requestInput(values.length)
  } else {
    const convertedCash = values[0] / values[1]
    const tax = values[2] / 100
    const taxValue = tax * convertedCash
    const valueReceived = convertedCash - taxValue
    console.log(' ')
    console.log('Amount without Taxes $: ' + convertedCash.toFixed(2))
    console.log('Tax Total $: ' + taxValue.toFixed(2))
    console.log('Total value you will receive $: ' + valueReceived.toFixed(2))
    process.exit()
  }
})
