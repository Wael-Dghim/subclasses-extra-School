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
School.prototype.getAverageGrade = function () {
  for (var i = 0; i < this.students.length; i++) {
    return this.students[i].grade / this.students.length;
  }
};
