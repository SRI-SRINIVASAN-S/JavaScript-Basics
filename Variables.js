//We now Declare and initialize a variable 'HAPPY LEARNING :)'
//3 ways we can declare a variable in JS
//1. var// (not a block scope) 2.let(it is a block scope) 3.const(it is a block scope)

//Declaration ; 
var dec1 ;
// Initialization
var dec1 ='srini'
var dec2 ='vasan'
//Not a block scope
if (true){
var dec1 ='SRI SRINIVASAN S'
console.log(dec1)
}
console.log(dec2)

//Let (we can reassign the variable once created In & outside the block scope )
// Declaration 
let user1 ;
// Initialization
user1 ='github'  
user1 ='rock' 
//It is a block scope
if(true){                        //It is an block scope 
let user1 ='GITHUB IS USEFULL'
user1 ='git is watste'
console.log(user1)
}
console.log(user1)

//const (the variables cannot be reassigned once it is assigned , can't do Declaration & Initialization seperately)
const pass1 ='john cena'  // This is a global scope 
//It is a block scope
if(true){
const pass1 ='JOHN CENA'
console.log(pass1)
}
console.log(pass1)

// THANK YOU FOR YOUR VISIT :)