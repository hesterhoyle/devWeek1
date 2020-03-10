// Hester Hoyle
// Challenges attempts


// // 1 - Count to 100 on the screen. Only show the EVEN numbers
// for (let i = 0 ; i <= 100 ; i+=2) {
//     console.log(i)
// }


// // 2 - Count from 100 to 0. Only show Odd Numbers - Do not use an IF
// for (let i = 99 ; i >= 0 ; i-=2) {
//     console.log(i);
// }


// // 3 - In a round two players each roll two dice. The scores are added up and the player 
// // with the highest score gets the difference between them as points. Three rounds are played. 
// // Display the results of each round and the total score of the winner

let totScore1 = 0
let totScore2 = 0

for (let i = 1 ; i <= 3 ; i++) {
    console.log(`--Round ${i}--`)
    dice1 = Math.ceil(Math.random()*6);
    dice2 = Math.ceil(Math.random()*6);
    dice3 = Math.ceil(Math.random()*6);
    dice4 = Math.ceil(Math.random()*6);
    let score1 = dice1 + dice2;
    let score2 = dice3 + dice4;
    console.log(`Player 1 rolls ${dice1} and ${dice2}. Total: ${score1}`)
    console.log(`Player 2 rolls ${dice3} and ${dice4}. Total: ${score2}`)
    if (score1 > score2) {
        console.log(`Player 1 is the winner with ${score1 - score2} points`);
        totScore1 = totScore1 + (score1-score2);
        console.log(`Total Player 1 points: ${totScore1}`);
        console.log(`Total Player 2 score: ${totScore2}`);
    } else if (score2 > score1) {
        console.log(`Player 2 is the winner with ${score2 - score1} points`);
        totScore2 = totScore2 + (score2-score1);
        console.log(`Total Player 1 points: ${totScore1}`);
        console.log(`Total Player 2 score: ${totScore2}`);
    } else {
        console.log("It is a draw");
    }
    console.log("---------------------------")
}

if (totScore1 > totScore2) {
    console.log(`Player 1 wins with ${totScore1} points!`)
} else if (totScore2 > totScore1) {
    console.log(`Player 2 wins with ${totScore2} points!`)
} else {
    console.log(`It's a draw with ${totScore1} and ${totScore2} points!`)
}


// // 4 - Have a variable called number. Whatever this variable is display a pyramid with that 
// // many levels so 3 should give you:
// // *
// // **
// // ****

// function pyramid(n) {
//     for(let i = 1 ; i <= n ; i++) {
//       let str = " ".repeat(n - i)
//       let str2 = "*".repeat(i * 2 - 1)
//       console.log(str + str2 + str)
//     }
//   }

// pyramid(5)