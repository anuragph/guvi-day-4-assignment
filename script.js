/* =============================================================================
DAY-4 ASSIGNMENT

Assignment link: https://docs.google.com/document/d/1cNDeT0CKJwqXYDeSIlmJVhx_t4AFvR_0Ypa1cp2rhJk/edit
================================================================================
*/


/* =============================================================================
1. How to compare two JSON have the same properties without order?
a. var obj1 = { name: "Person 1", age:5 }
b. var obj2 = { age:5, name: "Person 1" }
================================================================================
*/

var obj1 = { name: "Person 1", age:5 }
var obj2 = { age:5, name: "Person 1" }

var equalSize = true
var keysEqualValues = true

var obj1Size = Object.keys(obj1).length
var obj2Size = Object.keys(obj2).length

// Check if both objects are of the same size
if(obj1Size !== obj2Size) {
  equalSize = false
}

// Check if all keys have same values
for(var key in obj1) {
  if(obj1[key] !== obj2[key]) {
    keysEqualValues = false
  }
}

if(equalSize && keysEqualValues) {
  console.log("Properties are SAME")
} else {
  console.log("Properties are NOT SAME")
}


/* =============================================================================
2. Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

(Actual API used: https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json)
================================================================================
*/

// Create new XML Http request object.
var request = new XMLHttpRequest()

// Open a connection.
// Specify Method and URL.
request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')

// Send the request.
request.send()

// Once the data is succesfully recieved, load and perform necessary actions
request.onload = function() {
  // Convert JSON to Object Literal
  var data = JSON.parse(request.response)

  for(var country of data) {
    // Display flags using the 'console.image' library.
    // console.image(country['flag']) // Links not working
    console.log(country['flag'])
  }
}


/* =============================================================================
3. Use the same rest countries and print all countries name, region, sub region and population
================================================================================
*/

var newRequest = new XMLHttpRequest()

newRequest.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')

newRequest.send()

newRequest.onload = function() {
  var data = JSON.parse(request.response)

  for(var country of data) {
    console.log('Name: ' + country['name'])
    console.log('Region: ' + country['region'])
    console.log('Sub Region: ' + country['subRegion'])
    console.log('Population: ' + country['population'])
    console.log('\n')
  }
}


/* =============================================================================
4. Medium.com GUVI: Zen Class tasks.
Source: https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373
================================================================================
*/

// Task 1: Simple Programs todo for variables
// 1. Declare four variables without assigning values and print them in console
var undeclared1
var undeclared2
var undeclared3
var undeclared4

console.log(undeclared1)
console.log(undeclared2)
console.log(undeclared3)
console.log(undeclared4)

// 2. How to get value of the variable myvar as output
var myvar = 1
console.log(myvar)

// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
var fname = 'bob'
var lname = 'smith'
var maritalStatus = 'unmarried'
var country = 'India'
var age = 29

// 4. Declare variables to store your first name, last name, marital status, country and age in a single line
var fname = 'John', lname = 'Doe', maritalStatus = 'unmarried', country = 'India', age = 29

// 5. Declare variables and assign string, boolean, undefined and null data types
var name = 'John'
var canVote = false
var favouriteColor = undefined
var pets = null

// 6. Convert the string to integer
var str = '42'
var strNum1 = parseInt(str)
var strNum2 = Number(str)
var strNum3 = +str


// 7. Write 6 statement which provide truthy & falsey values.
1 === 1 // true
1 === '1' // false
1 == '1' // true
0 === [] // false
0 == [] // true
0 > 1 // false


// Task 2: Simple Programs todo for Operators
// 1. Square of a number
var num = 5
var numSquare = Math.pow(num, 2)

// 2. Swapping 2 numbers
var a = 1
var b = 2
var temp = a
a = b
b = temp

// 3. Addition of 3 numbers
var a = 1
var b = 2
var c = 3
var sum = a + b + c

// 4. Celsius to Fahrenheit conversion
var celsius = 42
var fahrenheit = (celsius * 9/5) + 32

// 5. Meter to miles
var meter = 1
var miles = meter / 1609

// 6. Pounds to kg
var pounds = 100
var kg = pounds / 2.205

// 7. Calculate Batting Average
var runs = 99
var timesOut = 10
var battingAverage = (runs/timesOut).toFixed(2)

// 8. Calculate five test scores and print their average
var score1 = 65
var score2 = 77
var score3 = 62
var score4 = 53
var score5 = 49
var average = (score1 + score2 + score3 + score4 + score5) / 5
console.log(average)

// 9. Power of any number x ^ y.
var x = 12
var y = 3
var power = x ** y

// 10. Calculate Simple Interest
var principal = 3000
var rate = 7
var time = 1
var simpleInterest = principal * rate * time

// 11. Calculate area of an equilateral triangle
var side = 5
var area = (Math.sqrt(3)/4) * (side ** 2)

// 12. Area Of Isosceles Triangle
var base = 5
var height = 10
var area = (base * height) / 2

// 13. Volume Of Sphere
var radius = 5
var volume = (4/3) * Math.PI * (radius ** 3)

// 14. Volume Of Prism
var baseArea = 10
var height = 5
var volume = baseArea * height

// 15. Find area of a triangle.
var base = 3
var height = 6
var area = (base * height) / 2

// 16. Give the Actual cost and Sold cost, Calculate Discount Of Product
var actualCost = 12
var soldCost = 10
var discount = actualCost - soldCost

// 17. Given their radius of a circle and find its diameter, circumference and area.
var radius = 7

var diameter = radius * 2
var circumference = 2 * Math.PI * radius
var area = Math.PI * (radius ** 2)

// 18. Given two numbers and perform all arithmetic operations.
var a = 3
var b = 4

var sum = a + b
var difference = a - b
var multiplication = a * b
var division = a / b
var remainder = a % b
var power = a ** b

// 19. Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
console.log(`*****
*****
*****
*****
*****`)

// 20. Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
var rate = 10
var hourlyConsumption = 100
var dailyConsumption = hourlyConsumption * 24
var consumptionForMonth = dailyConsumption * 30

var bill = consumptionForMonth * rate

// 21. Program To Calculate CGPA
var percentageScore = 60
var cgpa = (percentageScore / 9.5).toFixed(2)
console.log(cgpa)


// Task 3: Simple Programs todo for Condition , Looping and Arrays
// 1. Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
var pattern = '#'

for(var i = 1; i <= 7; i++) {
  console.log(pattern)
  pattern += '#'
}

// 2.  Iterate through the string array and print it contents
var strArray= ["<option>Jazz</option>",
,"<option>Blues</option>",
,"<option>New Age</option>",
,"<option>Classical</option>",
,"<option>Opera</option>"]

for(var i = 0; i < strArray.length; i++) {
  console.log(strArray[i])
}

// 3. write a code to count the elements in the array . Don’t use length property
var myarray=[11,22,33,44,55]
var counter = 0
var current = myarray.pop()

while(current !==  undefined) {
  counter++
  current = myarray.pop()
}
console.log(counter)

// 4. Declare an empty array;
var emptyArray1 = []
var emptyArray2 = new Array()

// 5. Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
var foods = ['popcorn', 'kiwi', 'chaat', 'apple', 'puri', 'sabzi', 'mango', 'biriyani', 'rajma', 'chawal', 'kabab', 'vada', 'orange', 'jhal muri', 'grapes', 'dosa', 'sambar', 'french fries', 'roti', 'momo']

// 6. Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
var fifthFavoriteFood = foods[4]

// 7. Find the length of your foods array
var lengthOfFoods = foods.length

// 8. Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
var friends = [
  'Mari',
  'MaryJane',
  'CaptianAmerica',
  'Munnabai',
  'Jeff',
  'AAK chandran'
]

function dataHandling(input){
  for (var i = 0; i < input.length; i++) {
    if(input[i] === 'Mari') {
      input[i] = 'Munnabai'
    }
  }
}
dataHandling(friends)

// 9. Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

var friends = [
  'Mari',
  'MaryJane',
  'CaptianAmerica',
  'Munnabai',
  'Jeff',
  'AAK chandran'
]

function dataHandling2(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])

    if(arr[i] === 'CaptianAmerica') {
      break
    }
  }
}

dataHandling2(friends)

// 10. Find the person is ur friend or not
function dataHandling3(arr, name) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === name) {
      return name + ' found'
    } else {
      continue
    }
  }
  return name + ' not found'
}

var found = dataHandling3(friends, 'Jeff')
console.log(found)

// 11. We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = [
'Mari',
'MaryJane',
'CaptianAmerica',
'Munnabai',
'Jeff',
'AAK chandran'
]

var friends2 = [
'Gabbar',
'Rajinikanth',
'Mass',
'Spiderman',
'Jeff',
'ET'
]

function dataHandling4(arr1, arr2) {
  var combinedArr = [...arr1, ...arr2]
  var sortedArr = combinedArr.sort()
  return sortedArr
}

var newFriends = dataHandling4(friends1, friends2)

// 11.1 Get the first item, the middle item and the last item of the array
var firstItem = newFriends[0]
// Middle item for array of even length
var middleItem = newFriends[(newFriends.length / 2) - 1]
var lastItem = newFriends[newFriends.length - 1]

// 11.2  Add your name to the end of the friends array, and add another name to beginning.
var myName = 'Bob'
var anotherName = 'Donald'
newFriends.push(myName)
newFriends.unshift(anotherName)

// 11.3 Add Mr or Ms to the names in the friends array.
function addTitles(arr) {
  var femaleFriends = ['Mari', 'MaryJane']
  var newArr = []
  
  for (var i = 0; i < arr.length; i++) {
    if(femaleFriends.includes(arr[i])) {
      newArr.push('Ms. ' + arr[i])
    } else {
      newArr.push('Mr. ' + arr[i])
    }
  }
  return newArr  
}

var friendsWithTitles = addTitles(newFriends)

// 11.4. Concat all the names the friends array and return as comma “,” seperated string.
var stringFriends = newFriends.join(', ')

// 11.5. Find the friends names who has letter ‘a’ and return the list.
function findFriendsWithA(arr) {
  var result = []

  for(var i = 0; i < arr.length; i++) {
    var lettersOfName = arr[i].split('')
    
    if(lettersOfName.includes('A') || lettersOfName.includes('a')) {
      result.push(arr[i])
    }
  }
  return result
}

var friendsWithA = findFriendsWithA(newFriends)

// 11.6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
function findAvgNameLength(arr) {
  var sum = 0
  
  for(var i = 0; i < arr.length; i++) {
    var nameLength = arr[i].split('').length
    sum += nameLength
  }
  var result = sum / arr.length
  return result
}
var avgNameLength = findAvgNameLength(newFriends)

// 11.7. Find the names and return the list starting with letter M.
function findStartingLetterM(arr) {
  var result = []

  for (var i = 0; i < arr.length; i++) {
    var firstLetter = arr[i].split('')[0] 
    if(firstLetter === 'M') {
      result.push(arr[i])
    }
  }
  return result
}

var friendsStartingWithM = findStartingLetterM(newFriends)

// 11.8. Find the name with max characters and return the name.
function findLongestName(arr) {
  var longestLength = arr[0].length
  var longestName = arr[0]

  for (var i = 1; i < arr.length; i++) {
    if(arr[i].length > longestLength) {
      longestLength = arr[i].length
      longestName = arr[i]
    }
  }
  return longestName
}

var longestName = findLongestName(newFriends)

// 11.9. Find the name with min characters and return the name
function findShortestName(arr) {
  var shortestLength = arr[0].length
  var shortestName = arr[0]

  for (var i = 1; i < arr.length; i++) {
    if(arr[i].length < shortestLength) {
      shortestLength = arr[i].length
      shortestName = arr[i]
    }
  }
  return shortestName
}

var shortestName = findShortestName(newFriends)

// 12 Find the average in the array below.
// Make sure you add only the numbers and do avg.
const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10]

function findAverage(arr) {
  var sum = 0
  var numberCounter = 0

  for (var i = 0; i < arr.length; i++) {
    // Check if converting to number gives NaN. NaN is falsey
    if(+arr[i]) {
      sum += +arr[i]
      numberCounter++
    }
  }
  var average = sum / numberCounter
  return average
}
var average = findAverage(friendsInfo)


// 12. Print the contents of the input variable
var input = [
  ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
  ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
  ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
  ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
  ]

  function printingData(arr) {
    for(var i = 0; i < arr.length; i++) {
      console.log('\n')
      for(var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j])
      }
    }
  }

printingData(input)

// 13. What is the output
// myobject = {"1": "one","11":1,"name":"arun"}

// console.log(myobject.11) -> SyntaxError
// console.log(myobject.name) -> arun

// 14. Add a new key value pair to myobject
// key : ten
// value : ten
myobject = {"1": "one","11":1,"name":"arun"}
myobject['ten'] = 'ten'


// 15. Write out an object literal to represent the data below.
// Guvi, Geek, 6, IIT-M RP,Chennai.
var guviInfo = {fname: 'Guvi', lname: 'Geek', age: 6, address: 'IIT-M RP', city: 'Chennai'}