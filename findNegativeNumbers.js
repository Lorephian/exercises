//====== Exercise 10 - Find out how many negative numbers in a set of numbers typed by the user

const setOfNumbers = []

const negativeNumbers = []

var setLength = -1

const question0 = () => {
  process.stdout.write('How many numbers the set will have? ')
}

const question1 = () => {
  process.stdout.write(
    'Type the number for position ' +
      (parseInt(setOfNumbers.length) + 1) +
      ' of the set: '
  )
}

question0()

if (setLength == -1) {
  process.stdin.on('data', data => {
    if (setLength < parseInt(setOfNumbers.length)) {
      setLength = -2
    }
    if (setLength - 1 > parseInt(setOfNumbers.length)) {
      setOfNumbers.push(parseInt(data))
      question1()
    } else if (setLength - 1 == parseInt(setOfNumbers.length)) {
      setOfNumbers.push(parseInt(data))

      for (let i = 0; i < parseInt(setOfNumbers.length); i++) {
        if (setOfNumbers[i] < 0) {
          negativeNumbers.push(setOfNumbers[i])
        }
      }
      console.log('===== RESULT ======')
      console.log('The numbers in this set are: ' + setOfNumbers)
      console.log(
        'The total of negative numbers in this set is: ' +
          parseInt(negativeNumbers.length)
      )
      console.log('The negative numbers are: ' + negativeNumbers)
      process.exit()
    }
    if (setLength == -2) {
      setLength = parseInt(data)
      question1()
    }
  })
}
