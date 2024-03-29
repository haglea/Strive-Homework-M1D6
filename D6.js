/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

let exerciseTitle = function (exerciseLetter) {
  let stringOfExerciseLetters = "ABCDEFG" // a string of exercise letters 
  for (i = 0; i < stringOfExerciseLetters.length; i++) {
  let exerciseLetter = stringOfExerciseLetters.length
  }
  console.log("\n-------------------->> JS Basics Exercise", exerciseLetter, "<<--------------------")
  return exerciseLetter

}
exerciseTitle("A")

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = "Testing string"
console.log(test)

exerciseTitle("B")

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10 + 12
console.log(sum)

exerciseTitle("C")

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.random() * 20; //returns random number between 0 and 20
console.log(random)

exerciseTitle("D")

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {

  name: "John",
  surname: "Doe",
  age: 22

}

console.log(me)

exerciseTitle("E")

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age
console.log(me)

exerciseTitle("F")

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills = ["HTML", "CSS", "JavaScript"]
console.log(me)

exerciseTitle("G")

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

me.skills.pop("Javascript")
console.log(me)



let exerciseTitleNumber = function (exerciseNumber) {
  console.log("\n-------------------->> JS Functions Exercise", exerciseNumber, "<<--------------------")
  return exerciseNumber
}

exerciseTitleNumber(1)

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

let dice = function () {
  // random integer between 1 and 6 both included
  let numberBetween1And6 = Math.floor(Math.random() *6) + 1 
  console.log("Random integer between 1 and 6:", numberBetween1And6)
  return numberBetween1And6
}
dice()

exerciseTitleNumber(2)

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

let whoIsBigger = function (firstNumber, secondNumber) {

  if (firstNumber > secondNumber) {
  console.log("Number", firstNumber, "is the biggest number")
  return firstNumber
  } else {
    console.log("Number", secondNumber, "is the biggest number")
    return secondNumber
  }

}
whoIsBigger(2, 6)

exerciseTitleNumber(3)

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

let splitMe = function (stringToSplit) {
  let splittedString = stringToSplit.split(" ")
  console.log(splittedString)
  return splittedString
}
splitMe("Coding is my utmost passion.")

exerciseTitleNumber(4)

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

let deleteOne = function (stringFirstOrLast, booleanParameter) {

  if (booleanParameter === true) {
    let stringWithoutFirstLetter = stringFirstOrLast.substr(1)
    console.log(stringWithoutFirstLetter)
    return stringWithoutFirstLetter
  } else {
      let stringRemoveLastLetter = stringFirstOrLast.substr(0, stringFirstOrLast.length-1)
      console.log(stringRemoveLastLetter)
      return stringRemoveLastLetter
    }

}

deleteOne("First or last one.", false)

exerciseTitleNumber(5)

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

let onlyLetters = function (stringToRemoveDigits) {

    let stringWithRemovedDigits = stringToRemoveDigits.replace(/0|1|2|3|4|5|6|7|8|9/g,"") //replace digits (g - to replace all occurrences)
    console.log(stringWithRemovedDigits)
    return stringWithRemovedDigits
}

onlyLetters("14 dogs and 3 cats")
exerciseTitle(6)

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

let isThisAnEmail = function (emailToCheck) {
  let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ // regular expression to check if string is an email address
    if (emailToCheck.match(mailFormat)) { //matches a string against regular expression
                                        //indexOf > 0 is second option
      console.log(emailToCheck, "is a valid email address")
      return true
  } else {
      console.log(emailToCheck, "is an invalid email address")
      return false
    }
}

isThisAnEmail("asdasda&sd")
exerciseTitle(7)

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

let whatDayIsIt = function () {
  let date = new Date()
  let dayOfWeek = date.getDay()
  console.log(dayOfWeek)
  return dayOfWeek
}

whatDayIsIt()
exerciseTitle(8)

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

let rollTheDices = function (howManyTimes) {
  let dicedSumAndValues = {
    sum: 0,
    values: []
  }
  for (i = 0; i < howManyTimes; i++) { 
    let dicedResult = dice()  
    dicedSumAndValues.sum += dicedResult
    dicedSumAndValues.values.push(dicedResult)
  }
  console.log(dicedSumAndValues)
  return dicedSumAndValues
}
rollTheDices(5)

exerciseTitle(9)

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

let howManyDays = function (datePassed) {
let currentDate = new Date()
let differenceDays = (currentDate.getTime() - datePassed.getTime()) / (1000 * 60 * 60 * 24)
console.log(differenceDays.toFixed(0))
return differenceDays.toFixed(0)
}
howManyDays(new Date (2020, 3, 1))

exerciseTitle(10)
/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

let isTodayMyBirthday = function () {
      let myBirthday = new Date(1988, 5, 8)
      let today = new Date()
      if (myBirthday.getDate() === today.getDate() && myBirthday.getMonth() === today.getMonth()) {
        console.log("Today is my birthday:", true)
        return true
      } else {
        console.log("Today is my birthday:", false)
        return false
      }
}
isTodayMyBirthday()

let exerciseTitleNumberArrays = function (exerciseNumberArrays) {
  console.log("\n-------------------->> JS Arrays Objs Exercise", exerciseNumberArrays, "<<--------------------")
  return exerciseNumberArrays
}


// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!
/* This movies array is used throughout the exercises. Please don't change it :)  */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]
exerciseTitleNumberArrays(11)

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, 
   and returns the given object after deleting its property named as the given string.
*/

let deleteProp = function (deletePropObject, deletePropString) {
  if (deletePropObject.deletePropString === deletePropString) {
  delete deletePropObject.deletePropString }
  console.log(deletePropObject)
  return deletePropObject
}
deleteProp({ name: "John", lastname: "Doe" }, "lastname" )

exerciseTitleNumberArrays(12)

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

const olderMovie = function () {
    let arrayOfYears = []
  for (i = 0; i < movies.length; i++) {
    let years = movies[i].Year
    arrayOfYears.push(Number(years))
  }
  arrayOfYears.sort(function(a, b){return a - b})
  console.log("The oldest movie is from year:", arrayOfYears[0])
  return arrayOfYears[0]
}
olderMovie()

exerciseTitleNumberArrays(13)

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

const countMovies = function () {
  console.log(movies.length)
    return movies.length
}
countMovies()

exerciseTitleNumberArrays(14)

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

const onlyTheTitles = function () {
  let arrayOfTitles = []
  for (i = 0; i < movies.length; i++) {
    let movieTitle = movies[i].Title
    arrayOfTitles.push(movieTitle)
  }
  console.log(arrayOfTitles)
  return arrayOfTitles
}
onlyTheTitles()

exerciseTitleNumberArrays(15)

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

const onlyInThisMillennium = function () {
  let milleniumYear = 1999
  let arrayMilleniumTitles = []
  for (i = 0; i < movies.length; i++) {
    let movieYear = Number(movies[i].Year)
    let movieTitle = movies[i].Title
  if (movieYear > milleniumYear) {
    arrayMilleniumTitles.push(movieTitle)
  }
  }
  console.log(arrayMilleniumTitles)
}
onlyInThisMillennium()

exerciseTitleNumberArrays(16)

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

const getMovieById = function (imdbIDParameter) {
  for (i = 0; i < movies.length; i++) {
    let imdbIDOfMovie = movies[i].imdbID
    if (imdbIDOfMovie === imdbIDParameter) {
      console.log(movies[i])
      return movies[i]
    }
  }
}
getMovieById("tt4154796")

exerciseTitleNumberArrays(17)

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

const sumAllTheYears = function () {
  let arrayOfYears = []
  let sumOfAllTheYears = 0
  for (i = 0; i < movies.length; i++) {
    let year = Number(movies[i].Year)
    arrayOfYears.push(year)
    sumOfAllTheYears += year
  }
  console.log(sumOfAllTheYears)
  return sumOfAllTheYears
}
sumAllTheYears()

exerciseTitleNumberArrays(18)

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter 
    and returns all the movies which contain that string in the title.
*/

const searchByTitle = function (stringInTitle) {
  for (i = 0; i < movies.length; i++) {
  let movieTitle = movies[i].Title
  if (movieTitle.indexOf(stringInTitle) >= 0) {  
    console.log(movieTitle, movieTitle.indexOf(stringInTitle)) 
  }
  }
}
searchByTitle("ord")

exerciseTitleNumberArrays(19)

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

const searchAndDivide = function (stringInTitle) {
  let objectMatchUnmatch = {
    match: [],
    unmatch: []
  }
  for (i = 0; i < movies.length; i++) {
    let movieTitle = movies[i].Title
    if (movieTitle.indexOf(stringInTitle) >= 0) {
     objectMatchUnmatch.match.push(movieTitle)
    } else {
     objectMatchUnmatch.unmatch.push(movieTitle)
    }
  }
  console.log(objectMatchUnmatch)
}
searchAndDivide("ord")

exerciseTitleNumberArrays(20)

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter 
   and returns the movies array without the element in the given position.
*/

const removeIndex = function (numberIndex) {
  delete movies[numberIndex]
  console.log(movies)
  return movies
}
removeIndex(0)

// [EXTRAS] JS Advanced

let exerciseTitleAdvanced = function (exerciseNumberAdvanced) {
  console.log("\n-------------------->> [EXTRAS] JS Advanced", exerciseNumberAdvanced, "<<--------------------")
  return exerciseNumberAdvanced
}

exerciseTitleAdvanced(21)

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" 
  half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

const halfTree = function (halfTreeParameter) {
  let star = "*"
  let halfTreeString = ""
  for (i = 0; i < halfTreeParameter; i++) {
    halfTreeString = halfTreeString.concat(star)
    console.log(halfTreeString)
  }
}
halfTree(7)

exerciseTitleAdvanced(22)

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree
   with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

const tree = function (treeParameter) {
  let starTree = "*"
  let start = ""
  let end = ""
  let space = ""
  let treeParameterString = ""
  for (i = 0; i < treeParameter; i++) {
    start = treeParameterString.padStart(i, "*")
    end = treeParameterString.padEnd(i, "*")
    space = treeParameterString.padStart(treeParameter - i - 1, " ")
    console.log(space + start + "*" + end)
    }
}
tree(7)
exerciseTitleAdvanced(23)

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true 
  if the given number is a prime number.
*/
const isItPrime = function (primeNumber) {
  for (i = 2; i < primeNumber; i++) {
    if (primeNumber % i === 0) {
      console.log("Number", primeNumber, "is not prime")
      return false
    }
  }
  console.log("Number", primeNumber, "is prime")
  return true 
}
isItPrime(22)