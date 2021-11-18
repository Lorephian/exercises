//====== Exercise 9 - Sum all the input numbers

var numberOfNumbers = 0

const typedNumbers = []

var sumOfNumbers = 0

var counter = -1

const question0 = () => {
  process.stdout.write('How many numbers you want to sum? ')
}

const question1 = () => {
  process.stdout.write(
    'Type number ' + (parseInt(typedNumbers.length) + 1) + ': '
  )
}

question0()

process.stdin.on('data', data => {
  if (counter >= 0) {
    counter = counter + 1
    if (parseInt(numberOfNumbers) > parseInt(counter)) {
      typedNumbers.push(parseInt(data))
      question1()
    } else {
      counter = -2
      typedNumbers.push(parseInt(data))
    }
  }
  if (counter == -1) {
    numberOfNumbers = parseInt(data)
    counter = 0

    question1()
  }
  if (counter == -2) {
    for (let i = 0; i < typedNumbers.length; i++) {
      console.log(typedNumbers[i])
      sumOfNumbers = parseInt(sumOfNumbers) + parseInt(typedNumbers[i])
    }
    console.log('TOTAL: ' + parseInt(sumOfNumbers))
    process.exit()
  }
})
