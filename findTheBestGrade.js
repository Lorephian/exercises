//====== Exercise 8 - Find the best Grade on class

const question0 = () => {
  process.stdout.write("What's the size of this class? ")
}

const question1 = index => {
  process.stdout.write(
    "What's the name of student " + parseInt(student.length + 1) + '? '
  )
}

const question2 = index => {
  process.stdout.write(
    "What's the grade of student " + parseInt(grade.length + 1) + '? '
  )
}

question0()

var studentsQnt = 0
var totalStudents = 0

const student = []

const grade = []

var bestStudents = []

let bestGrades = 0

var counter = -1

var bestStudentName = 0
var bestStudentGrade = -1

process.stdin.on('data', data => {
  if (counter > 0) {
    if (student.length > grade.length) {
      counter = studentsQnt--

      if (counter != 0) {
        grade.push(data)

        question1()
      }
    } else {
      if (counter != 0) {
        student.push(data)

        question2()
      }
    }
  }
  if (counter == -1) {
    studentsQnt = data
    totalStudents = data
    question1()
    counter = studentsQnt--
  }

  if (counter == 0) {
    grade.push(data)

    for (let gradeCounter = 0; gradeCounter <= grade.length; gradeCounter++) {
      if (parseInt(bestStudentGrade) == parseInt(grade[gradeCounter])) {
        bestStudents.push(student[gradeCounter])
      }
      if (bestStudentGrade < grade[gradeCounter]) {
        bestStudents = []
        bestGrades = grade[gradeCounter]
        bestStudentGrade = grade[gradeCounter]
        bestStudents.push(student[gradeCounter])
      }

      if (gradeCounter == grade.length) {
        counter = -2
      }
    }
  }

  if (counter == -2) {
    if (bestStudents.length > 1) {
      console.log(
        'The total number of students in this class is: ' +
          totalStudents +
          'The best sudents are: ' +
          bestStudents +
          ' and they grade is: ' +
          bestStudentGrade
      )
      process.exit()
    } else {
      console.log(
        'The total number of students in this class is: ' +
          totalStudents +
          'The best sudent is : ' +
          bestStudents +
          ' and the grade is: ' +
          bestStudentGrade
      )
      process.exit()
    }
  }
})
