// // const user = {
// //     name: "chandra",
// //     age: 45
// // }

// // function greet(usrdata) {

// //     const { name, age } = usrdata

// //     console.log(`hello ${age}`)
// // }

// // //greet(user)//object passed as paramter to fucntion

// // // function passed as argument to naother fucntion

// // function execute(callback) {
// //     callback(user)
// // }

// // execute(greet)//greet expects some argunent and that can be varaiable or robject so i passed user object



// const fixtures = {
//     page: "pageObject",
//     name: "dada"

// }

// // function greet (userdata){

// //     const {page}=  userdata

// //     console.log(`${page}`)

// // }

// function greet({ page, name }) {    // we can direct destruture in argument as well
//     console.log(`${page} and ${name}`)
// }

// // greet(fixtures) passed fictures objets as arugument in fucntin


// function execute(callback) {//callback = greet

//     callback(fixtures) //greet()

// }

// execute(greet) //pass fucntion freet indide excute as argunent



// // import { test } from '@playwright/test'

// // const callback = async ({ page }) => {

// // }

// // test('experint', callback){

// // }


