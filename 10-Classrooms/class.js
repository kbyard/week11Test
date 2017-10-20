var Student = require("./student");

function Class(professor, roomNum) {
  this.students = [];
  this.howMany = this.students.length;
  this.professor = professor;
  this.roomNum = roomNum;
  this.addStudent = function (name, subject, gpa) {
    this.students.push(new Student(name, subject, gpa))
  }

}

var newClass = new Class("ryan", 305)

newClass.addStudent("maci", "nursing", 4);
newClass.addStudent("tom", "cs", 1)

console.log(newClass.students);
module.exports = Class;
