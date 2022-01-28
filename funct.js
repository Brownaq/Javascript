// function addAB (parameter1, parameter2) {
//     return parameter1 + parameter2;
// }

// let functionValue = addAB(7, 10);
// console.log("The returned value of function is:", functionValue);

// for (let i = 1; i < 11; i++) {
//     console.log("The value of i:", i);
//     console.log("Function value:", addAB("a", "b"));
// }




// arrayNumbers = [1, 2, 3, 4, 5];
// reversedList = [];

// function reverse (parameter1) {
//     let reversedList = parameter1.reverse();
//     return reversedList;
// }
// let functionValue = reverse(arrayNumbers)

// console.log("Function value:", functionValue)




// function reverse (array) {
//     return array.reverse();
// }

// console.log("Function value:", reverse([1, 2, 3, 4, 5]))




function reverse (string1) {
    let array1 = string1.split("");
    array1.reverse();
    return array1.join("");
}

console.log(reverse("analise"))