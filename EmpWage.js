console.log("Welcome to The Employee Wage JS Program ") 
const IS_ABSENT = 0

let empCheck = Math.floor(Math.random()*10) % 2
if (empCheck == IS_ABSENT){
    console.log("Employee is Absent")
} else {
    console.log("Employee is Present")
}