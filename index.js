var people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
]
//Find the first person off the people array is teenager (age >=10 and age <=20)
// var firstPerson = () => {
//     for (let x of people) {
//         if (x.age >= 10 && x.age <= 20) {
//             return x;
//         }
//     }
// }
// console.log(firstPerson());

//Find the all person of the people array is teenager (age >=10 and age <=20)

// var peopleArray = new Set();

// var allPerson = () => {
//     for (let x of people) {
//         if (x.age >= 10 && x.age <= 20) {
//             peopleArray.add(x);
//         }
//     }
//     return peopleArray;
// }
// console.log(allPerson());

//Check if every person of the people array is teenager (age >=10 and age <=20), which should return true or false

// var check = true;
// var checkPerson = () => {
//     for (let x of people) {
//         if (x.age < 10 || x.age > 20) {
//             check = false;
//             return check;
//         }
//     }
//     return check;
// }
// console.log(checkPerson());

//	Checks if any person of the people array is teenager (age >=10 and age <=20), which should return true or false.

// var check = false;
// var checkPerson = () => {
//     for (let x of people) {
//         if (x.age >= 10 && x.age <= 20) {
//             check = true;
//             return check;
//         }
//     }
//     return check;
// }
// console.log(checkPerson());

const firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);

// Find all teenagers
const allTeenagers = people.filter(person => person.age >= 10 && person.age <= 20);

// Check if every person is a teenager
const allTeenagersCheck = people.every(person => person.age >= 10 && person.age <= 20);

// Check if any person is a teenager
const anyTeenagersCheck = people.some(person => person.age >= 10 && person.age <= 20);

console.log("First teenager:", firstTeenager);
console.log("All teenagers:", allTeenagers);
console.log("Are all people teenagers?", allTeenagersCheck);
console.log("Are there any teenagers?", anyTeenagersCheck);