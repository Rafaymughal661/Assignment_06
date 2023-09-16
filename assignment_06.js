/* // Q: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to
//    learn some Python today?”

var P_Name:string = "Ahmad Ali";
console.log(`"Hello ${P_Name}, would you like to learn some python today"`);


// Q: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var P_Name1:string = "Ali ahmad";
console.log(P_Name1.toLowerCase()); // print in lowerCase
console.log(P_Name1.toUpperCase()); // to print in upperCase
console.log(P_Name1.charAt(0).toUpperCase() + P_Name1.slice(1).toLowerCase()); // to print in  titleCase


// Q: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//    Albert Einstein once said, “A person who never made a mistake never tried anything new.”

var F_Person:string = "Allama Iqbal";
var quote:string = "Elevate thyself to such heights, that even before destiny unveils, God Himself will inquire, 'What is it that you desire?'";

console.log(`${F_Person} one said, "${quote}"`);


// Q: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

var famous_person:string = "Quaid-e-Azam";
var quote:string = "There is no power on Earth that can undo Pakistan.";
var message = `${famous_person} once said, "${quote}"`;
console.log("Message:", message);


// Q: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n",
//    at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

var P_Name2:string = "\n \t  Rafay Mughal \t ";
console.log("Whitespace Characters At The Begining And End Points Of The Name:",P_Name2);

var M_P_Name2:string = P_Name2.trim();
console.log("Stripping White Space:", M_P_Name2);


// Q: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//    You should create four lines that look like this:
//    console.log(5 + 3);

var addition:number = 5+3;
var subtraction:number = 11-3;
var multiplication:number = 4*2;
var division:number = 16/2;
console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);

// Q: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

var f_Num:number = 24;
var message1 = `Your Favourite Number Is "${f_Num}"`
console.log(message1);

// Q: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Program1: Reveal favourit date:
// Arthor_Name:string = "RafayM":
// Date: 09/09/20223:
// Message: Program  that reveal my favourit day in a message:
var f_Num:number = 24;
var message1 = `Your Favourite Number Is "${f_Num}"`
console.log(message1);

// Program2: Addition Of Numbers:
// Aurthor_Name: "RafayM":
// Date: 09-09-2023;
// Message: Program that return addition of two numbers result as 8:
var addition:number = 5+3;
console.log(addition);


// Q: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let C_friends:string[] = ["Ahmad","Ali","Bilal","Hussain","Fakhar"];
let C_friends1 = C_friends.forEach((names)=>{
    console.log(`My Friend "${names}"`);
});


// Q: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
//    The text of each message should be the same, but each message should be personalized with the person’s name.

let C_friends_:string[] = ["Ahmad","Ali","Bilal","Hussain","Fakhar"];
let message3:string = "Greetings";
let C_friends2 = C_friends_.forEach((names)=>{
    console.log(`${message3} My Friend "${names}"`);
});

// Q: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
//    Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

const vehicles = ["motorcycle", "car", "bicycle", "scooter", "truck"];

for (const vehicle of vehicles) {
  switch (vehicle) {
    case "motorcycle":
      console.log("I would like to own a Suzuki motorcycle.");
      break;
    case "car":
      console.log("I dream of driving a Honda car.");
      break;
    case "bicycle":
      console.log("I enjoy riding a mountain bike.");
      break;
    case "scooter":
      console.log("I find electric scooters convenient for short commutes.");
      break;
    case "truck":
      console.log("I admire the power of a Ford pickup truck.");
      break;
    default:
      console.log("I have no preference for this mode of transportation.");
      break;
  }
};

// Q: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to
//    dinner. Then use your list to print a message to each person, inviting them to dinner.

interface Person {
  name: string;
  isDeceased: boolean;
}

const guestList: Person[] = [
  { name: "ARIF", isDeceased: true },
  { name: "SULTAN", isDeceased: false },
  { name: "TRUMP", isDeceased: true }
];

function generateInvitation(person: Person): string {
  if (person.isDeceased) {
    return `Dear ${person.name},\n\nYou are cordially invited to a dinner in your honor. Although you are no longer with us, your contributions and legacy continue to inspire us. We would be honored to have your presence symbolically represented at the event.\n\nSincerely,\n[Your Name]`;
  } else {
    return `Dear ${person.name},\n\nYou are cordially invited to a dinner in your honor. Your remarkable achievements and influence have made a significant impact on the world, and we would be delighted to have you join us for an evening of celebration.\n\nSincerely,\n[Your Name]`;
  }
}

for (const person of guestList) {
  const invitation = generateInvitation(person);
  console.log(invitation);
};


// Q: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.



interface Person {
  name: string;
  isDeceased: boolean;
}

const guestList1: Person[] = [
  { name: "Albert Einstein", isDeceased: true },
  { name: "Michelle Obama", isDeceased: false },
  { name: "Leonardo da Vinci", isDeceased: true }
];

function generateInvitation1(person: Person): string {
  if (person.isDeceased) {
    return `Dear ${person.name},\n\nYou are cordially invited to a dinner in your honor. Although you are no longer with us, your contributions and legacy continue to inspire us. We would be honored to have your presence symbolically represented at the event.\n\nSincerely,\n[Your Name]`;
  } else {
    return `Dear ${person.name},\n\nYou are cordially invited to a dinner in your honor. Your remarkable achievements and influence have made a significant impact on the world, and we would be delighted to have you join us for an evening of celebration.\n\nSincerely,\n[Your Name]`;
  }
}

// Print initial set of invitation messages
for (const person of guestList1) {
  const invitation = generateInvitation1(person);
  console.log(invitation);
}

// Update the guest list
const guestWhoCantMakeIt = "Albert Einstein";
const newGuest = "Nelson Mandela";

for (let i = 0; i < guestList.length; i++) {
  if (guestList[i].name === guestWhoCantMakeIt) {
    guestList[i].name = newGuest;
    break;
  }
}

console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);

// Print second set of invitation messages
for (const person of guestList) {
  const invitation = generateInvitation(person);
  console.log(invitation);
};
 */
// Q: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, 
//   one for each person in your list.
/*
type Character = {
 name:string,
 isDeceased:boolean
};

let myGuest:Character[] = [
 {name:"Arslan", isDeceased:true},
 { name:"Hussain", isDeceased:false},
 {name:"Ali", isDeceased:false}
];

function invitation(myGuest:Character) {
 if(myGuest.isDeceased==true){
  return `Dear ${myGuest.name},\n\nYou are cordially invited to a dinner in your honor. Although you are no longer with us, your contributions and legacy continue to inspire us. We would be honored to have your presence symbolically represented at the event.\n\nSincerely,\n[Your Name]`;
 }
 else{
   return `Dear ${myGuest.name},\n\nYou are cordially invited to a dinner in your honor. Your remarkable achievements and influence have made a significant impact on the world, and we would be delighted to have you join us for an evening of celebration.\n\nSincerely,\n[Your Name]`;
 }
};

for (const Character of myGuest) {
 const invitation1 = invitation(Character);
 console.log(invitation1);
}

console.log("Greeting that we found a bigger dinner table");

let newGuest1 = {name:"Rafay", isDeceased:true};
myGuest.unshift(newGuest1);
console.log(myGuest);

let newGuest2 = {name:"Bilal", isDeceased:false};
myGuest.splice(myGuest.length/2,0,newGuest2);
console.log(myGuest);

let newGuest3 = {name:"Rafay", isDeceased:true};
myGuest.push(newGuest3);
console.log(myGuest);

function newInvitation(myGuest:Character) {
 if (myGuest.isDeceased) {
   return `Dear ${myGuest.name},\n\nYou are cordially invited to a dinner in your honor. Although you are no longer with us, your contributions and legacy continue to inspire us. We would be honored to have your presence symbolically represented at the event.\n\nSincerely,\n[Your Name]`;
 }
 else{
   return `Dear ${myGuest.name},\n\nYou are cordially invited to a dinner in your honor. Your remarkable achievements and influence have made a significant impact on the world, and we would be delighted to have you join us for an evening of celebration.\n\nSincerely,\n[Your Name]`;
 }
};

for (const Character of myGuest){
  let newInvitation1 = newInvitation(Character);
  console.log(newInvitation1);
};

// Q: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a
//   message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
 
let guest = myGuest;
// console.log(guest);
let Message:string = "I invite only two people for dinner.";
console.log("message:",Message);

let removeGuest = myGuest.pop();
console.log(`"Dear [${removeGuest.name}],

I hope this message finds you well. I wanted to reach out and express my sincere apologies for not being able to invite you to dinner as I had initially planned. Unfortunately, unforeseen circumstances have arisen, and I have had to make some changes to my plans. \n \n Please know that this decision was not made lightly, and I truly value your company. I would have loved to have you join me for dinner, and I regret any disappointment this may cause.\n \nI hope we can reschedule our dinner plans for another time when my schedule permits. Your understanding and patience mean a lot to me, and I'm looking forward to the opportunity to spend time together in the future. Once again, I apologize for any inconvenience, and I hope we can make plans soon.
Warm regards,
[Your Name]"`);

console.log(guest);


let removeGuest1 = myGuest.pop();
console.log(`"Dear [${removeGuest1.name}],

I hope this message finds you well. I wanted to reach out and express my sincere apologies for not being able to invite you to dinner as I had initially planned. Unfortunately, unforeseen circumstances have arisen, and I have had to make some changes to my plans. \n \n Please know that this decision was not made lightly, and I truly value your company. I would have loved to have you join me for dinner, and I regret any disappointment this may cause.\n \nI hope we can reschedule our dinner plans for another time when my schedule permits. Your understanding and patience mean a lot to me, and I'm looking forward to the opportunity to spend time together in the future. Once again, I apologize for any inconvenience, and I hope we can make plans soon.
Warm regards,
[Your Name]"`);

console.log(guest);



let removeGuest2 = myGuest.pop();
console.log(`"Dear [${removeGuest2.name}],

I hope this message finds you well. I wanted to reach out and express my sincere apologies for not being able to invite you to dinner as I had initially planned. Unfortunately, unforeseen circumstances have arisen, and I have had to make some changes to my plans. \n \n Please know that this decision was not made lightly, and I truly value your company. I would have loved to have you join me for dinner, and I regret any disappointment this may cause.\n \nI hope we can reschedule our dinner plans for another time when my schedule permits. Your understanding and patience mean a lot to me, and I'm looking forward to the opportunity to spend time together in the future. Once again, I apologize for any inconvenience, and I hope we can make plans soon.
Warm regards,
[Your Name]"`);

console.log(guest);


let removeGuest3 = myGuest.pop();
console.log(`"Dear [${removeGuest3.name}],

I hope this message finds you well. I wanted to reach out and express my sincere apologies for not being able to invite you to dinner as I had initially planned. Unfortunately, unforeseen circumstances have arisen, and I have had to make some changes to my plans. \n \n Please know that this decision was not made lightly, and I truly value your company. I would have loved to have you join me for dinner, and I regret any disappointment this may cause.\n \nI hope we can reschedule our dinner plans for another time when my schedule permits. Your understanding and patience mean a lot to me, and I'm looking forward to the opportunity to spend time together in the future. Once again, I apologize for any inconvenience, and I hope we can make plans soon.
Warm regards,
[Your Name]"`);

console.log(guest);
// remaining two peoples in list:

function SInvitition(myGuest:Character[]) {
 myGuest.forEach(Guest => {
   console.log(`"${Guest.name}:: \n Greetings you are invited to today nights dinner"`)
 });
}

SInvitition(myGuest);


// remove last two names:

 myGuest.splice(0,myGuest.length);
console.log(myGuest, "empty");


// Q: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let lenOfguest = myGuest.length;
console.log(lenOfguest);

let message:string = (`" I am  inviting ${lenOfguest} people to dinner."`);
console.log("message:",message);


// Q: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
//   Write a program that creates a list containing these items.

let R_List:string[] = ["Mount everest", "Indus River", "Pakistan", "Islamabad", "Urdu"];
console.log(R_List);

// Q: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let R_List1 = [{Mountain:"k2",River: "Dudh Koshi River",Country: "Nepal",city: "Sagarmatha National Park" , language:"Nepali"},
{Mountain:"Mount everest", River:"Indus River", Country:"Pakistan",city:"Islamabad",language:"Urdu"  },
{Mountain:"Mount Kilimanjaro" ,River: " Pangani River", Country: "Tanzania", City: "Kilimanjaro National Park", language:"Swahili" }];

console.log(R_List1);
*/
// Q: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
/*
function A1() {
  let i = 6;
  let A_Nums:number[]= [1,2,3,4,5,6];
console.log(A_Nums[i]);
if (i<=A_Nums.length-1) {
  A_Nums.splice(2,1);
  console.log(A_Nums);
}
else {
  console.log("ErrorofIndex")
}
};
A1();

// Q: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your
//    prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

// Q1:
let car:string = "toyota";
console.log("Is car == `toyota`? I predict True.");
console.log("car == toyota");
// Q2:
let myName:string = "A.Rafay"
console.log("Is name == `A.Rafay`? I predict true");
console.log("myName == A.Rafay");
// Q3:
let myAge:number = 18;
console.log("Is my age is greater than `18`?I predict false");
console.log("myAge > 18");
// Q4:
let myNationality:string = "America" ;
console.log("Is My Nationality is = `Pakistan`? I predict false");
console.log("myNationality==Pakistan");
// Q5:
let myTotalmarks:number = 90;
console.log("Is my percentage of test is `100%`? I predict false");
console.log("myTotalmarks!=100%");
// Q6:
let myAssignment:string = "completed";
console.log("Is myAssignment is `completed` or not ? I predict true");
console.log("myAssignment==completed");
// Q7:
let myAttendance = "50%";
console.log("Is myAttendance is = `100%`? I predict false");
console.log("myAttendance!=100%")
// Q8:
let myCollege = "Punjab group of colleges";
console.log("Is my college is `punjab group of colleges`? I predict True");
console.log("myCollege == Pungab group of Colleges");

// Q9:
let calculation = 2*6;
console.log("Is 2*6 = `12`? I predict true");
console.log("calculation==2*6");

// Q10:
let T_Temp:number = 30;
console.log("Is today temprature is < `30`? I predict false");
console.log("T_Temp>30");


// Q: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

// Tests for equality and inequality with strings
const string1 = "Hello";
const string2 = "World";
console.log(string1 === string2); // false
console.log(string1 !== string2); // true

// Tests using the lower case function
const uppercaseString = "HELLO";
const lowercaseString = "hello";
console.log(uppercaseString.toLowerCase() === lowercaseString.toLowerCase()); // true

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 5;
const num2 = 10;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 >= num2); // false
console.log(num1 <= num2); // true

// Tests using "and" and "or" operators
const condition1 = true;
const condition2 = false;
console.log(condition1 && condition2); // false
console.log(condition1 || condition2); // true

// Test whether an item is in an array
const array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // true

// Test whether an item is not in an array
console.log(!array.includes(6)); // true



// Q: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//   • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//   • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

var alien_color:string[] = ["green", "yellow", "red"];
function Checking(alien_color:string[]) {
  for (let index = 0; index < alien_color.length; index++) {
    const element = alien_color[index];
    if (alien_color[index]=="green") {
      console.log("Congrats you have earned 5 points")
    } else if(alien_color[index]=="yellow") {
      console.log("you have earned 10 points");
    }else if (alien_color[]=="red"){
      console.log("you have earned 15 points");
    }
    else{

    }
  }
};
Checking(alien_color);


// Q: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.


var alien_color:string[] = ["green", "yellow", "red"];
function value(alien_color:string[]) {
  for (let index = 0; index < alien_color.length; index++) {
    if (alien_color[index]=="green") {
    console.log("Congrats you earned 5 point by shooting an Alien");
    } else {
      console.log("Congrats you Earned 10 points");
    }
  }
};

let alien_color1:string = "red";
console.log("Red", alien_color1);
if (alien_color1=="green") {
  console.log("Congrats you earned 15 point by shooting an Alien");
}
else{
  console.log("Congrats you earned 25 point by shooting an Alien");
  
};

 */
// Q: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// Version 1: Green Alien
let alien_color_ = "green";
if (alien_color_ == "green") {
    console.log("Congratulations! You just earned 5 points for shooting down a green alien!");
}
else {
    console.log("Sorry, you didn't earn any points.");
}
;
// Version 2: Yellow Alien
let alien_color$ = 'yellow';
if (alien_color$ === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down a green alien!");
}
else if (alien_color$ === 'yellow') {
    console.log("Great job! You just earned 10 points for shooting down a yellow alien!");
}
else {
    console.log("Sorry, you didn't earn any points.");
}
// Version 3: Red Alien
let alien_color222 = 'red';
if (alien_color222 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting down a green alien!");
}
else if (alien_color222 === 'yellow') {
    console.log("Great job! You just earned 10 points for shooting down a yellow alien!");
}
else if (alien_color222 === 'red') {
    console.log("Wow! You just earned 15 points for shooting down a red alien!");
}
else {
    console.log("Sorry, you didn't earn any points.");
}
var alien_color = ["green", "yellow", "red"];
function value_(alien_color) {
    for (let index = 0; index < alien_color.length; index++) {
        let value = alien_color[index];
        if (alien_color[index] == "green") {
            console.log("Congrats you earned 5 point by shooting an Alien");
            console.log(index, value);
        }
        else if (alien_color[index] == "red") {
            console.log("Congrats you Earned 15 points");
            console.log(index, value);
        }
        else {
            console.log("Congrats you Earned 10 points");
            console.log(index, value);
        }
    }
}
;
value_(alien_color);
// Q: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
var myAge = 3;
function Age(myAge) {
    if (myAge < 2) {
        console.log("The person is baby");
    }
    else if (myAge > 2 && myAge < 4) {
        console.log("The person is Toddler ");
    }
    else if (myAge > 4 && myAge < 13) {
        console.log("The person is Kid ");
    }
    else if (myAge > 13 && myAge < 20) {
        console.log("The person is Teenager ");
    }
    else if (myAge > 20 && myAge < 65) {
        console.log("The person is Adult ");
    }
    else {
        console.log("The person is Elder ");
    }
}
;
Age(myAge);
// Q: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
//  such as You really like bananas!
let favorite_fruits = ["Apple", "Mango", "Grapes"];
function Fruits(favorite_fruits) {
    for (let i = 0; i < favorite_fruits.length; i++) {
        if (favorite_fruits[i] === "Apple") {
            console.log("Apples are rich in fiber, vitamins, and antioxidants");
        }
        else if (favorite_fruits[i] === "Mango") {
            console.log("Mangoes are believed to have originated in South Asia and have been cultivated for thousands of years");
        }
        else if (favorite_fruits[i] === "Grapes") {
            console.log("Grapes are small, juicy fruits that grow in clusters on vines");
        }
        else if (favorite_fruits[i] === "Banana") {
            console.log("I really like to eat bananas");
        }
        else if (favorite_fruits[i] === "Peach") {
            console.log("Peach fruit is a juicy and delicious summer fruit");
        }
    }
}
;
Fruits(favorite_fruits);
// Q: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let A_Names = ["Admin", "Rafay", "Ali", "Ahmad", "Hussain"];
function userName(A_Names) {
    for (let index = 0; index < A_Names.length; index++) {
        if (A_Names[index] === "Admin") {
            console.log("HELLO WELCOME ADMIN , \n 'Would you like to see a stats report'");
        }
        else if (A_Names[index] === "Rafay") {
            console.log("Hello Rafay, Welcome to my site \n Thank you for logging in again");
        }
        else if (A_Names[index] === "Ali") {
            console.log("Hello Ali, Welcome to my site \n Thank you for logging in again");
        }
        else if (A_Names[index] === "Ahmad") {
            console.log("Hello Ahmad, Welcome to my site \n Thank you for logging in again");
        }
        else if (A_Names[index] === "Hussain") {
            console.log("Hello Hussain , Welcome to my site \n Thank you for logging in again");
        }
        else {
            console.log("Error Found");
        }
    }
}
;
userName(A_Names);
// Q: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
A_Names.splice(0, A_Names.length);
console.log(A_Names);
function Change(A_Names) {
    let arr = A_Names;
    if (A_Names === arr) {
        console.log(`"We need to Find Some Users"`);
    }
    else {
        console.log("Hello [UserName], Welcome to Website Again");
    }
}
;
Change(A_Names);
// Q: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. 
//  If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let current_users:string[] = ["Rafay","Ali","Fakhar","Asif","Naseem"];
// let new_users:string[] = ["RAFAY", "Shaheen", "FAKHAR", "Haris", "Zaman"];
function checkUsernames(currentUsers, newUsers) {
    for (const newUser of newUsers) {
        const isUsernameTaken = currentUsers.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase());
        if (isUsernameTaken) {
            console.log(`The username '${newUser}' is already taken. Please enter a new username.`);
        }
        else {
            console.log(`The username '${newUser}' is available.`);
        }
    }
}
// Example usage
const currentUsers = ["Rafay", "Ali", "Fakhar", "Asif", "Naseem"];
const newUsers = ["RAFAY", "Shaheen", "FAKHAR", "Haris", "Zaman"];
checkUsernames(currentUsers, newUsers);
// Q: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//   Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
    let ordinalEnding;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${number}${ordinalEnding}`);
}
;
export {};
