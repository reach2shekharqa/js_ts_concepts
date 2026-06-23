
// let num1 = '67'


// function add(num1: number, num2: number) {
//     return num1 + num2
// }

// console.log(add(num1, 34))

// const user = {

//     fName: 'John',
//     lName: 'Doe',
//     age: 34,
//     isMarried: true
// }

// const { fName, age, isMarried } = user// object destructuring

// console.log(fName, age, isMarried)


//type alias

// type User = {
//     fName: string,
//     lName: string,
//     age: string | number, // or age: number | string union type
//     isMarried?: boolean // optional field
// }

// const user: User = {
//     fName: 'John',
//     lName: 'Doe',
//     age: 34,

// }

// function getUser(user: User): string {
//     const { fName, lName, age } = user
//     return `Hello ${fName} ${lName}, you are ${age} years old`
// }


// console.log(getUser(user))

// // const {age,fName} = user

// // console.log(age, fName)

//interface ================

// function greet(name :string, greeting ?:string, start:string="bon jo"){

//     if(greeting){

//         return `${greeting} ${name}`
//     }

//     return `hello ${name} ${start}`
// }

// console.log (greet('shekhar'))

// console.log (greet('shekhar' ,'morning 😊'))


// interface Animal {

//     name: string
// }
// interface Dog extends Animal {

//     breed: string
// }

// let myDog: Dog = {

//     name: "nd",
//     breed: "vreedd "

// }


// type EmployeeID = number|string

// interface Employee {

//     name: string,
//     age: number
//     id?: EmployeeID
// }
// let emp1: Employee = {
//     name: "djahd",
//     age: 2,
//     id: "one"
// }