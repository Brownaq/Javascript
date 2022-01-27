// let variable1 = 10;
// console.log("Variable:", variable1);
// let result = (10 + 9) < 20;
// console.log("Result:", result);
// if(result) {
//     console.log("This number is greater than 19.");
// }


// let x = 3.14;
// let y = 10;
// let total = x + y;
// console.log("Total:", total);

// if(total > 10) {
//     console.log("The total is greater than 10.");
// }


// let pineapple = "Apple";
// let lastName = 100;
// let fullName = pineapple + " " + lastName;
// console.log("Full name:", fullName);

// console.log("Is 20 not a number?", Number.isNaN(total));


// let num = 5.56789;
// let n = num.toFixed();
// let newTotal = n + 50;
// console.log("New Total:", newTotal);
// if(n > 5.99) {
//     console.log("Yes.");
// }
// console.log("n is a", typeof(n));


// const cars = ["Acura", "Audi", "Mercedes", "Toyota", "Prius"];
// console.log("Second Element:", cars[0])

// for(let i=0; i < cars.length; i++) {
//     console.log(cars[i], i);
// }


// let total = 0
// const numbers = [1, 2, 3, 4, 5];
// console.log("Numbers:", numbers);

// for(let i=0; i < numbers.length; i++) {
//     total = total + numbers[i];
//     console.log("Inside for loop:", total);
// }

// console.log("Grand Total:", total);


// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array1.unshift(100);
// console.log("The value of last item:", lastItem);

// array1.push("11");
// console.log("Array 1 after unshift:", array1);


// let array1 = [1, 2, 3];
// let array2 = [5, 6, 7];
// array1.push(4);
// let totalArray = array1.concat(array2);
// console.log("Result:", totalArray);
// console.log("Array 1:", array1);


const stringValue = "Something";
const numberValue = 100;
const booleanValue = false;
const arrayValue = ["True", true, 100];

console.log(arrayValue[0]);

const person1 = {
    firstName: "Jonah",
    middleName: "Mason",
    lastName: "Day",
    dob: "1/9/2007",
    gender: "Lady",
    height: "5'9",
}

const person2 = {
    firstName: "Riley",
    lastName: "Forman",
    dob: "11/00/2007",
    gender: "Waffle Iron",
    height: "5'9",
}

const person3 = {
    firstName: "Analise",
    middleName: "Qiping",
    lastName: "Brown",
    dob: "2/1/2007",
    gender: "It",
    height: "5'1",
}

const person4 = {
    firstName: "Bryson",
    lastName: "Albers",
    dob: "00/00/2007",
    gender: "Your Majesty",
    height: "6'1",
    lifePlans: "Maybe?",
}

const person5 = {
    firstName: "Peachy",
    middleName: "Rosegold",
    lastName: "Brown",
    dob: "Recent",
    gender: "Laptop",
    height: "10 inches",
    lifePlans: "Becoming a lawyer",
}

const people = [person1, person2, person3, person4, person5];
person2.lifePlans = "World Domination";

// console.log(people);
// console.log(person1.firstName, person2.firstName);
// console.log(people[0].firstName);

for(let i = 0; i < people.length; i++) {
    let fullName = people[i].firstName + " " + people[i].lastName;
    console.log("Full Name:", fullName);
    if(people[i].middleName) {
        console.log("Middle Name:", people[i].middleName);
    }
    
    if(people[i].gender === "Waffle Iron") {
        console.log("Gender:", people[i].gender);
    }

    if(people[i].lifePlans) {
        console.log("Life Plans:", people[i].lifePlans);
    }
}

// console.log("Person 2 after change:", person2);