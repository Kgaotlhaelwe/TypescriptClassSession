


console.log("Hello codetribers");

//Primitive data type (String, boolean , number)
// Non primitive data type  (array , objects  etc)

// Explicit type

let firstName: string = "Kabee";

let age: number = 21;

let isEligibletoVote = true;

console.log(` HI MY NAME IS ${firstName} AND I'm ${age} years  old `);

console.log(isEligibletoVote);

// implicit type

let lastName = "Gaotlhaelwe";

// Dynamic type

let num1: any = 5;

let hobbies: string[] = [" I like TV", "I like coding"];

hobbies.push("I like watching TV");

num1 = "Xoli";
num1 = true;

// Union type

let value: string | number | boolean = "Kutlo";
value = 10;
value = false;

// Alias

type StringorNumber = string | number | boolean;

let val: StringorNumber = "Comfort";

let va1: StringorNumber = 5;
val = 7;
val = true;

let greet = (): void => {
  console.log("Helllo  Codetribe welcome to Typescript class ");
};

greet();

let greetAgain = (greet: string) => {
  console.log(greet);
};

console.log(greetAgain("Sanibonani"));

let calculator = (
  num1: number,
  num2: number,
  action: string
): number | string => {
  if (action == "Add") {
    return num1 + num2;
  } else if (action == "Sub") {
    return num2 - num1;
  } else if (action == "Division") {
    return num2 / num1;
  } else {
    return "Not valid";
  }
};

let arry: number[] = [1, 5, 8, 9, 23, 9, 10,12, 7];

let total: number = 0;
let sum = (num: number[]): number => {
  for (let index = 0; index < num.length; index++) {
    total += num[index];
  }
  return total;
};



console.log(calculator(5, 10, "Sub"));

 let  printOdds = (odd:number []) : number []=>{
    let num5 :number [] = [] ;
    for (let index = 0; index < odd.length; index++) {
        if (odd[index] %2 !== 0 ){
            num5.push(odd[index])
        } 
    }
    return num5 ;
 }

 console.log(printOdds(arry));

 let me =  new User ("Kabelo", "Gaotlhaelwe" , "Male" , 21 ) ; 

me.setUser("KABELO")
 console.log(me.lastName);
 

 





