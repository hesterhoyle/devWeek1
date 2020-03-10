// Hester Hoyle
//

let numToCheck = 56789;

const primeCheck = (n) => {
    if (n <= 1) {
        console.log(`${numToCheck} is NOT a prime number`);
    } else if (n % 2 == 0) {
        console.log(`${numToCheck} is NOT a prime number`);
    } else {
        for (i = 3 ; i < (n/2) ; i++) {
            if (n % i == 0) {
                console.log(`${numToCheck} is NOT a prime number`)
                return false;
            }
        } console.log(`${numToCheck} is a prime number!`)
    }
}

primeCheck(numToCheck)