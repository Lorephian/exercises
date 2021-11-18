//====== Exercise 11 - Calculate the factorial of a given number

var number = null
var factorial
var i
const question0 = () => {
  process.stdout.write('Type the number you want to facotorize: ')
}

question0()

process.stdin.on('data', data => {
  if (number == null) {
    number = parseInt(data)
    factorial = parseInt(data)
  }
  for (i = 1; i < number; i++) {
    if (number > i) {
      factorial = factorial * (number - i)
    }
  }
  if (number == i) {
    console.log(`The factorial of ${number} is ${factorial}`)
    process.exit()
  }
  if (number < 0 || number == 0) {
    console.log(`The factorial of ${number} is 1`)
    process.exit()
  }
})
