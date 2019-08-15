// ### Problem 1
// Ask the user to enter a word. Keep asking them to enter a word until they enter the letter 'q'.
//
//     ### Problem 2
// Make any string array all lower case strings. If you don't remember how to use that Google it.
//
// ### Challenge
// Make any string array return an array of objects with the specified class below
//
// ```

//Problem 1
let userInput= prompt("Enter a word");
while (userInput !=="q")
{
    userInput=prompt("Enter a word");
}

// //Problem 2
let strArray="A,B,C,D,E,F";
 let newArray= strArray.toLowerCase();
console.log(newArray);

//CHALLENEGE
class student
{
    constructor (name)
    {
        this.name=name
    }
}
function addObjects(returnString)
{
    console.log(newStudent)
}

let newStudent= new student("Bob, Billy, Hope");

let challengeString= addObjects();

console.log(challengeString);
