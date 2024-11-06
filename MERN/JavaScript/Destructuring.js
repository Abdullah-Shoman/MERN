
// 1
const cars = ['Tesla', 'Mercedes','Honda'];
const [randomCar] = cars;
const[,otherRandomCar] = cars;
// console.log(randomCar);
// console.log(otherRandomCar)


// 2
const employee = {
    name:'Elon',
    age:47,
    company:'Tesla'
}
const {name:othreName} = employee;
// console.log(name)   // error
// console.log(othreName)


// 3
const person = {
    name:'abdullah',
    age:29,
    height:174
}
const password = '12345'
const {password:hashedPassword} = person

// console.log(password)  // print 12345
// console.log(hashedPassword) // undefined, because there is no key in person called passwork so it will be undfined 


// 4
const  numbers = [8,2,3,5,6,1,67,12,2];

const [,first] = numbers; // 2
const [,,,second] = numbers; //5
const [,,,,,,,,third] = numbers; // 2

// console.log(first == second);// false
// console.log(first == third) //  true


// 5
const lastTest ={
    key:'value',
    secondKey : [1,5,1,8,3,3]
}
const {key} = lastTest;
const {secondKey} = lastTest;

console.log(key);
console.log(secondKey);
console.log(secondKey[0]);//1
// console.log(willThisWork);// no, error not defined
