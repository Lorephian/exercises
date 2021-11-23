//====== Exercise 14 - Display all combinations of numbers from the given number to 1

const setOfNumbers = []
var number = null

const question0 = () =>
  process.stdout.write(
    'Type one number to see all the possible combinations from 1 to your number: '
  )

question0()

process.stdin.on('data', data => {
  if (number == null) {
    number = parseInt(data)
  }

  if (parseInt(setOfNumbers.length) < parseInt(number)) {
    for (i = 1; number >= i; i++) {
      setOfNumbers.push(i)
    }
  }

  function allTimesAll(y) {
    var first = y
    for (y = 1; y <= setOfNumbers.length; y++) {
      console.log(first + ', ' + setOfNumbers[y - 1])
      if (y == setOfNumbers.length) {
        console.log(`\n`)
      }
    }
  }

  if (setOfNumbers.length == number) {
    for (x = 1; x <= setOfNumbers.length; x++) {
      allTimesAll(x)
      if (x == setOfNumbers.length) {
        console.log('exit')
        process.exit()
      }
    }
  }
})
