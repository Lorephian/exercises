/*
pt-br
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F

en-us
Create an algorithm that transforms system scores
numeric for note system in characters type A B C

* from 90 upwards - A
* between 80 - 89 - B
* between 70 - 79 - C
* between 60 - 69 - D
* less than 60 - F
*/
console.log('===== START of exercise | Convert Grade to Concept | =====')
function numberToConcept(grade) {
  let error = grade > 100 || grade < 0
  let gradeA = grade >= 90 && grade <= 100
  let gradeB = grade >= 80 && grade <= 89
  let gradeC = grade >= 70 && grade <= 79
  let gradeD = grade >= 60 && grade <= 69
  let gradeF = grade < 60 && grade >= 0

  if (gradeA) {
    finalGrade = 'A'
  } else if (error) {
    finalGrade = 'Invalid Grade: Grade must be a number between 0 and 100'
  } else if (gradeB) {
    finalGrade = 'B'
  } else if (gradeC) {
    finalGrade = 'C'
  } else if (gradeD) {
    finalGrade = 'D'
  } else {
    finalGrade = 'F'
  }

  return console.log(finalGrade)
}

numberToConcept(98)
numberToConcept(89)
numberToConcept(73)
numberToConcept(65)
numberToConcept(-1)
numberToConcept(104)
numberToConcept(54)
numberToConcept('a')

console.log('===== END of exercise | Convert Grade to Concept | =====')
