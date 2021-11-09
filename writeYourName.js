const command = 'Write your name: '

function requestInput() {
  process.stdout.write(command)
}

requestInput()

const firstName = []

process.stdin.on('data', data => {
  firstName.push(data.toString().trim())
  console.log('ola ' + firstName)
  process.exit()
})
