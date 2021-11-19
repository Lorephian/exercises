//====== Exercise 12 - Find out if the given number is a prime number

var number = null

const question0 = () => {
  process.stdout.write(
    "Type one number to find out if it's a prime number or not: "
  )
}

const results = []
var result = null
var isPrime = null

question0()

process.stdin.on('data', data => {
  if (number == null) {
    number = parseInt(data)
  }
  if (number == data) {
    for (let i = number; i > 0; i--) {
      if (number % 2 == 0) {
        console.log('===== RESULT =====')
        console.log(`${number} is not a prime number.`)
        process.exit()
      } else {
        result = number % i
      }

      if (result == 0) {
        results.push(result)
      }
      if (parseInt(i) == 1) {
        if (parseInt(results.length) > 2) {
          console.log('===== RESULT =====')
          console.log(`${number} is not a prime number.`)
          process.exit()
        }
        if (parseInt(results.length) == 2) {
          console.log('===== RESULT =====')
          console.log(`${number} is a prime number.`)
          process.exit()
        }
      }
    }
  }
})
