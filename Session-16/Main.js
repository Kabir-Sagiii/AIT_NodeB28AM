var students = require("./Students.js");

function main() {
  console.log("main is called");
}

console.log(students);

students.studentDetails();
console.log(students.gender);

module.exports = { main };
