/*====== Exercise 3 - receive 2 numbers and sum them
yeah, I know, this was probably the dumbest way of doing it 
*/

const request = ['Type the first number: ', 'Type the second number: ']

const requestInput = (index = 0) => {
  process.stdout.write(request[index])
}

requestInput()

const numbers = []

process.stdin.on('data', data => {
  numbers.push(data)
  if (numbers.length < request.length) {
    requestInput(numbers.length)
  } else {
    function calc(sum) {
      sum = parseInt(numbers[0]) + parseInt(numbers[1])
      console.log(sum)
    }
    calc()
    process.exit()
  }
})
