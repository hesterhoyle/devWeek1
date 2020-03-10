// Hester Hoyle
// Objects practice


// // Cafe example from slides
// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte", 
//         "Filter coffee", 
//         "Tea", 
//         "Hot chocolate"
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer",
//     openCafe:()=>{
//         return "Come on in";
//     },
//     closeCafe:()=>{
//         return "We are closed, come back tomorrow!"
//     }
// };

// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time < 1500){
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }



// Person example from activity 1
const person = {
    name: "Hester",
    age: 30,
    sayHi:()=>{
        console.log(`Hello, my name is ${this.name}`)
    }
}

person.sayHi();

// person["songs"] = ["Billie Eilish - Ocean Eyes", "Kenshi Yonezu - Loser", "Imagine Dragons - Thief"]



// console.log(person.name);
// console.log(person["age"]);


// // Make an alarm set up
// let day = "Saturday";

// const alarm = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// };

// if (day == "Saturday" || day == "Sunday") {
//     console.log(alarm["weekendAlarm"])
// } else {
//     console.log(alarm["weekdayAlarm"])
// };


// // Activity, object called pet
// const pet = {
//     name: "Wookie",
//     typeOfPet: "cat",
//     age: 4,
//     color: "black",
//     eating:()=>{
//         return (`Your pet ${pet.name} is eating`)
//     },
//     drinking:()=>{
//         return (`Your pet ${pet.name} is drinking`)
//     }
// };

// console.log(pet.drinking())


// Activity, coffee shop
const coffeeShop = {
    branch: "Cambridge",
    drinks: [
        "latte - 1.50", 
        "cappucchino - 1.50",
        "tea - 1.00",
        "hot chocolate - 2.00",
        "chai latte - 2.00"],
    food: [
        "sandwich - 1.50",
        "salad - 1.50",
        "cake - 1.00",
        "muffin - 1.00"
    ],
    drinksOrdered:()=>{
        
    }
}



