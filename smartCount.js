//====== Exercise 7 - Smart Count from input number X to Y

const request = ['Type one number: ', 'Type another number: ']

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
    let firstNumb = parseInt(values[0])
    let secondNumb = parseInt(values[1])

    if (firstNumb > secondNumb) {
      while (firstNumb >= secondNumb) {
        console.log(firstNumb)
        firstNumb = firstNumb - 1
      }
    } else {
      while (firstNumb <= secondNumb) {
        console.log(firstNumb)
        firstNumb = firstNumb + 1
      }
    }
    process.exit()
  }
})
