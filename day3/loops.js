// Hester Hoyle
// Loops (Iteration) practice

// times table 1-10 up to 10
for (let i = 1 ; i <= 10 ; i++) {
    for (let j = 1 ; j <= 10 ; j++)
    console.log(`${j} * ${i}  = ${i*j}`)
}


// let dice = 0
// while (dice != 6) {
//     console.log("Rolling the die");
//     dice = Math.ceil(Math.random()*6);
//     console.log("You rolled a " + dice);
// }


let dice1 = 0
let dice2 = 1
while (dice1 !== dice2) {
    console.log("Rolling the die");
    dice1 = Math.ceil(Math.random()*6);
    dice2 = Math.ceil(Math.random()*6);
    console.log(`You rolled a ${dice1} and a ${dice2}`);
}