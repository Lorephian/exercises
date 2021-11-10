//====== Exercise 5 - receive 3 inputs (year, month, day) and calculate the age based on the given parameters

const request = [
  'Type year of birth: ',
  'Type month of birth as number: ',
  'Type day of birth: '
]

const requestInput = (index = 0) => {
  process.stdout.write(request[index])
}

requestInput()

const currentDate = new Date()

const dateYear = currentDate.getFullYear()
const dateMonth = currentDate.getMonth()
const dateDay = currentDate.getDate()

const dateOfBirth = []

process.stdin.on('data', data => {
  dateOfBirth.push(data)
  if (dateOfBirth.length < request.length) {
    requestInput(dateOfBirth.length)
  } else {
    function calculateAge() {
      if (
        parseInt(dateOfBirth[1]) >= parseInt(dateMonth) &&
        parseInt(dateOfBirth[2]) < parseInt(dateDay)
      ) {
        let age = parseInt(dateYear) - parseInt(dateOfBirth[0]) - 1
        console.log('The age is: ' + age)
      } else {
        let age = parseInt(dateYear) - parseInt(dateOfBirth[0])
        console.log('The age is: ' + age)
      }
      process.exit()
      console.log(dateOfBirth[1])
      console.log(dateOfBirth[2])
    }
    calculateAge()
  }
})
