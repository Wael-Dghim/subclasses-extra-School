var School = function (name) {
  this.name = name;
  this.students = [];
};

School.prototype.addStudent = function (student) {
  this.students.push(student);
};
School.prototype.getStudentNames = function () {
  let students = this.students;
  for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
  }
};

let Wael = new Student("Wael", 20, 11);
let Hamdy = new Student("Hamdy", 20, 11);
let Nidhal = new Student("Nidhal", 20, 11);

let school = new School("bhaier");
school.addStudent(Hamdy);
school.addStudent(Wael);
school.addStudent(Nidhal);
school.getStudentNames();
