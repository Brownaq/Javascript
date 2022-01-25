const textValue = "Hello World 😁";
console.log(textValue.toUpperCase());

// var total = 0;
// console.log("Total:", total);
// total = 10;
// console.log("New Total:", total);
// const myArray = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90];
// console.log("My Array:", myArray[3]);

let txt = "abcdefghijklmnopqrstuvwxyz";
let length = txt.length;

console.log("Length:", length);
let str = "Apple, Banana, Kiwi";
let part = str.slice(0, 5);
console.log("Part: 🍎", part);
 str = "Apple, Banana, Kiwi";
 part = str.slice(7, 13);
 console.log("Part: 🍌", part);
  str = "Apple, Banana, Kiwi";
  part = str.slice(15, 21);
  console.log("Part: 🥝", part);

let text = "I wanna eat an apple! Gimme an apple!";
let newText = text.replace("an apple", "an apple, a banana, and a kiwi");
console.log("New Text:", newText);

let text1 = "Goodbye";
let text2 = "Cruel World 😔";
let text3 = text1.concat(" ", text2);
console.log(text3)

text1 = "      It'll be better without me. 😭      ";
text2 = text1.trim();
console.log("...", text2)