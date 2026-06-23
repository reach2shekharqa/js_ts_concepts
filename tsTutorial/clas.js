"use strict";
class Employee {
    name;
    dept;
    age;
    constructor(name, dept, age) {
        this.name = name;
        this.dept = dept;
        this.age = age;
    }
    getDetails() {
        return `${this.name} works in ${this.dept} and having age ${this.age}`;
    }
}
let emp1 = new Employee("shekhar", "cse", 67);
console.log(emp1.getDetails());
