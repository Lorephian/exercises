//====== Exercise 13 - Enhanced Countdown to Zero | show only all odd or even numbers

const question0 = () => {
  process.stdout.write('Write a number to countdown to 0: ')
}

var number = null

question0()

process.stdin.on('data', data => {
  number = parseInt(data)

  if (number % 2 > 0) {
    if (number < 0) {
      for (i = number; i <= 0; i = i + 2) {
        if (number <= 0) {
          console.log(i + '... ')
          if (i == 1) {
            number = 0
            process.exit()
            console.log('0... ')
          }
        }
      }
    }
    if (number > 0) {
      for (i = number; i >= 0; i = i - 2) {
        if (number >= 0) {
          console.log(i + '... ')
          if (i == 1) {
            number = 0
            console.log('0... ')
            process.exit()
          }
        }
      }
    }
  }

  if (number % 2 == 0) {
    if (number < 0) {
      for (i = number; i <= 0; i = i + 2) {
        if (number <= 0) {
          console.log(i + '... ')
          if (i == 0) {
            process.exit()
          }
        }
      }
    }
    if (number > 0) {
      for (i = number; i >= 0; i = i - 2) {
        if (number >= 0) {
          console.log(i + '... ')
          if (i == 0) {
            process.exit()
          }
        }
      }
    }
  }

  if (data == 0 && number == 0) {
    console.log('===== Type a number different from ZERO =====')
    question0()
  }

  if (number != Number && number != 0) {
    console.log('===== Type a valid number =====')
    question0()
  }
})
