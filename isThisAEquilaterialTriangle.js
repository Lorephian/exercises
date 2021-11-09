
//====== Exercise 4 - receive 3 numbers and check if they form a equilateral triangle



const request = ['Type side 1: ', 'Type side 2: ', 'Type side 3: ']

const requestInput = (index = 0) => {
  process.stdout.write(request[index])
}

requestInput()

const sides = []

process.stdin.on('data', data => {
  sides.push(data)
  if (sides.length < request.length) {
    requestInput(sides.length)
  } else {
    function isTriangle(side) {
      side =
        parseInt(sides[0]) === parseInt(sides[1]) &&
        parseInt(sides[2]) === parseInt(sides[0])
      console.log(" it's " + side + ' that this is an equilateral triangle')
    }
    isTriangle()
    process.exit()
  }
})

