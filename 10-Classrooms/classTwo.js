// The second constructor function is called "Class" and has the following properties within it...
//
// An array of students within the class
// Number of students in the class
// Name of the professor
// Room number
// The Student constructor function from above which adds a new student to the class
const Student = require('studenttwo');

function Class (prof, roomNum){
  this.students = [];
  this.howMany = students.length;
  this.prof = prof;
  this.roomNum = roomNum;
  this.addStudents = function (name, subj, gpa) {
    students.push(new Student(name, subj, gpa))
  }
}


var ruan = new Class("ryan", 304)
ruan.addStudents("tony", "food", 4)
console.log(ruan);
