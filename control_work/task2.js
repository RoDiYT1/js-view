let n = +prompt("Enter your student amount")
let sum = 0
let mthanseven = 0
let lthanseven = 0
let max = 0
for (let i = 1; i <= n; i++) {
    grade = +prompt(`Enter your ${i} student grade`)
    sum += grade
    if (grade >= 7) {
        mthanseven++
    }
    else if (grade < 7) {
        lthanseven++
    }
    if (grade > max) {
        max = grade
    }
}
console.log(`sum ${sum}`)
console.log(`average ${sum/n}`)
console.log(`more than seven: ${mthanseven}`)
console.log(`less than seven: ${lthanseven}`)
console.log(`the biggest grade: ${max}`)