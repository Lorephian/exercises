//====== Exercise 15 - Display the first X numbers of Fibonacci's sequence

var fiboQnt

const numbers = [0]
var number = 1

const question0 = () =>
  process.stdout.write(
    "How many numbers of the Fibonacci's sequence you want to see? "
  )

question0()

process.stdin.on('data', data => {
  fiboQnt = data
  for (i = 0; i < fiboQnt - 1; i++) {
    numbers.push(parseInt(numbers[i]) + parseInt(number))
    number = parseInt(numbers[i])
  }
  console.log(numbers)
  process.exit()
})
