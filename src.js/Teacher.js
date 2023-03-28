var Teacher = function (name, age, subject) {
  Person.call(this, name, age);
  this.subject = subject;
};

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.name} and I am ${this.age} years old. I teach ${this.subject}.`
  );
};
