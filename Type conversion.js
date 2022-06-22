//In programming, type conversion is the process of converting data of one type to another  'HAPPY LEARNING :)'
// 2 types of conversion 1.Implicit Conversion(automatic type conversion) 2.Explicit Conversion(manual type conversion)

//Let start with Implicit Conversion (:
//Numeric  string used with + gives an string type.

let numeric1 ;
numeric1 ='50'+ 100
console.log(numeric1)
console.log(typeof(numeric1))

let numeric2 ='100' + true
console.log(numeric2)
console.log(typeof(numeric2))

let numeric3 ='200' + undefined
console.log(numeric3)
console.log(typeof(numeric3))

let numeric4 ='300' + null
console.log(numeric4)
console.log(typeof(numeric4))

//Numeric string used with - , / , * results number type

let numeric5 ;
numeric5 ='50'* 100
console.log(numeric5)
console.log(typeof(numeric5))

let numeric6 ;
numeric6 ='50'- 100
console.log(numeric6)
console.log(typeof(numeric6))

let numeric7 ;
numeric7 ="100" / 10
console.log(numeric7)
console.log(typeof(numeric7))

//Non-numeric string used with - , / , * results to NaN

const numeric8 ='john' - 'cena'
console.log(numeric8)
console.log(typeof(numeric8))

const numeric9 ='prem' / 'kumar'
console.log(numeric9)
console.log(typeof(numeric9))

// if boolean is used, true is 1, false is 0

const numeric10 = 10 + true
console.log(numeric10)
console.log(typeof(numeric10))

const numeric11 = '101' - false
console.log(numeric11)
console.log(typeof(numeric11))

// Null is 0 when used with number

const numeric12 = '101' - null
console.log(numeric12)
console.log(typeof(numeric12))

const numeric13 = 101 - null
console.log(numeric13)
console.log(typeof(numeric13))

//Explicit Conversion(manual type conversion)
// String to number , To convert numeric strings and boolean values to numbers, you can use Number() method 

let numeric14 ;
numeric14 =Number('12345')
console.log(numeric14)
console.log(typeof(numeric14))

let numeric15 ;
numeric15 =Number(true) // true is 1
console.log(numeric15)
console.log(typeof(numeric15))

let numeric16 ;
numeric16 =Number(false) // false is 0
console.log(numeric16)
console.log(typeof(numeric16))

//You can also generate numbers from numeric strings using parseInt(), parseFloat(), unary operator + and Math.floor()

const numeric17 =parseFloat('500')
console.log(numeric17)

const numeric18 =parseInt('1001')
console.log(numeric18)

const numeric19 =Math.floor('101')
console.log(numeric19)

//To convert other data types to strings, you can use either String() or toString().
////number to string

const num1 =String(12345)
console.log(num1)
console.log(typeof(num1))

const num2 =String(100 + 10)
console.log(num2)
console.log(typeof(num2))

const num3 =(456).toString()
console.log(num3)
console.log(typeof(num3))

//To convert other data types to a Boolean, you can use Boolean().
//In JavaScript, undefined, null, 0, NaN, '' converts to false.

const num4 =Boolean('')
const num5 =Boolean(undefined)
const num6 =Boolean(NaN)
const num7 =Boolean(0)
const num8 =Boolean(null)

console.log(num4)
console.log(num5)
console.log(num6)
console.log(num7)
console.log(num8)

// All other like string & number give true 

const num9 =Boolean('12345')
const num10 =Boolean(123)
console.log(num9)
console.log(num10)

// THANK YOU FOR YOUR VISIT :)