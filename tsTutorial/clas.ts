class Employee {
    constructor(
        protected name: string,
        protected dept: string,
        private age: number
    ) {}

    getDetails(): string {

        return `${this.name} works in ${this.dept} and having age ${this.age}`
    }

}
let emp1 = new Employee("shekhar", "cse", 67)

console.log(emp1.getDetails())