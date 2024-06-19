"use strict";
console.log("Hello codetribers");
//Primitive data type (String, boolean , number)
// Non primitive data type  (array , objects  etc)
// Explicit type
let firstName = "Kabee";
let age = 21;
let isEligibletoVote = true;
console.log(` HI MY NAME IS ${firstName} AND I'm ${age} years  old `);
console.log(isEligibletoVote);
// implicit type
let lastName = "Gaotlhaelwe";
// Dynamic type
let num1 = 5;
let hobbies = [" I like TV", "I like coding"];
hobbies.push("I like watching TV");
num1 = "Xoli";
num1 = true;
// Union type
let value = "Kutlo";
value = 10;
value = false;
let val = "Comfort";
let va1 = 5;
val = 7;
val = true;
let greet = () => {
    console.log("Helllo  Codetribe welcome to Typescript class ");
};
greet();
let greetAgain = (greet) => {
    console.log(greet);
};
console.log(greetAgain("Sanibonani"));
let calculator = (num1, num2, action) => {
    if (action == "Add") {
        return num1 + num2;
    }
    else if (action == "Sub") {
        return num2 - num1;
    }
    else if (action == "Division") {
        return num2 / num1;
    }
    else {
        return "Not valid";
    }
};
let arry = [1, 5, 8, 9, 23, 9, 10, 12, 7];
let total = 0;
let sum = (num) => {
    for (let index = 0; index < num.length; index++) {
        total += num[index];
    }
    return total;
};
console.log(calculator(5, 10, "Sub"));
let printOdds = (odd) => {
    let num5 = [];
    for (let index = 0; index < odd.length; index++) {
        if (odd[index] % 2 !== 0) {
            num5.push(odd[index]);
        }
    }
    return num5;
};
console.log(printOdds(arry));
let me = new User("Kabelo", "Gaotlhaelwe", "Male", 21);
me.setUser("KABELO");
console.log(me.lastName);
