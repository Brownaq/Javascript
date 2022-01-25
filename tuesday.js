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

let total = 0
const numbers = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);

for(let i=0; i < numbers.length; i++) {
    total = total + numbers[i];
    console.log("Inside for loop:", total);
}

console.log("Grand Total:", total);