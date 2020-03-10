// Hester Hoyle
// Challenges for if else statements

// // Activity 1
// let pizzaTopping = "cheese"

// switch(pizzaTopping){
//     case "pepperoni":
//     case "cheese":
//     case "diced tomatoes":
//         console.log("These are important ingredients for my pizza");
//         break;
//     case "spinach":
//     case "tuna":
//         console.log(`I don't mind having ${pizzaTopping} on my pizza`);
//         break;
//     case "mushrooms":
//         console.log(`${pizzaTopping} should not be on pizza`);
//         break;
//     case "pineapple":
//         console.log(`I am allergic to ${pizzaTopping}`);
//         break;
//     default:
//         console.log("check order again");
// }


// // Challenge 1
// let password = "12345";

// if (password.length < 8) {
//     console.log("Your password is too short");
// } else {
//     console.log("Password accepted");
// }


// // Challange 2
// let num = 15;

// if (num % 3 == 0 || num % 5 == 0) {
//     console.log("This number is divisible by 3 or 5");
// } else {
//     console.log("This number is not divisible by 3 or 5");
// }

// switch(true){
//     case num%3 == 0:
//     case num%5 == 0:
//         console.log("This number is divisible by 3 or 5");
//         break;
//     default:
//         console.log("This number is not divisible by 3 or 5")
// }


// // Challenge 3
// let num = 11

// if (num % 3 == 0 && num % 5 == 0) {
//     console.log("fizz buzz");
// } else if (num % 3 == 0) {
//     console.log("fizz");
// } else if (num % 5 == 0) {
//     console.log("buzz")
// } else {
//     console.log(num)
// }

// // Challenge 4
// let str = "45678"
// let strRev = str.split('').reverse().join('');

// if (str == strRev) {
//     console.log("it is a palindrome");
// } else {
//     console.log("this is not a palindrome");
// }


// // Challange 5
// let placeOfWork = "office"
// let townOfHome = "Cambridge"
// let time = 14.15

// if (time < 8) {
//     console.log(`The time is ${time} and I am at home in ${townOfHome}`);
// } else if (time >= 8 && time < 9) {
//     console.log(`The time is ${time} and I am commuting to ${placeOfWork}`);
// } else if (time >= 9 && time <= 17.30) {
//     console.log(`The time is ${time} and I am at work in ${placeOfWork}`);
// } else if (time > 17.30 && time <= 18.30){
//     console.log(`The time is ${time} and I am commuting home to ${townOfHome}`);
// } else {
//     console.log(`The time is ${time} and I am at home in ${townOfHome}`);
// }


// // Challenge 6
// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi.";

// let vowelArr = [
//     str.lastIndexOf("a"), str.lastIndexOf("e"), str.lastIndexOf("i"),
//      str.lastIndexOf("o"), str.lastIndexOf("u")];

// vowelArr.sort(function(a, b){return a - b});
// console.log(vowelArr[vowelArr.length - 1])


// // Challenge 7
// let str = "peeb";
// let strArr = str.split('');

// if (strArr[0] == strArr[str.length - 1]) {
//     console.log("true")
// } else {
//     console.log("false")
// }


// // Challenge 8
// let num1 = 10
// let num2 = 5

// if ((num1 + num2)%2 == 0) {
//     console.log(`${num1} + ${num2} = ${num1 + num2}`)
// } else {
//     console.log(`${num1} * ${num2} = ${num1 * num2}`)
// }

