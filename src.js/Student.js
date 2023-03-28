var Student = function (name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.name} and I am ${this.age} years old. I am in grade ${this.grade}.`
  );
};
