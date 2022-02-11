/* Tutorial 4
    Example 4 JavaScript code
*/
input = prompt("Enter your password")
let password = "secert";
let noOfTries = 1;
let limit = 3;
 
while (input != password){
    if(noOfTries < limit){
        input = prompt("Enter your password");
        noOfTries ++;
    } else {
        console.log(`Your account is locked! You failed to enter the correct password ${noOfTries} times`)
        break;
    }
}

if (input === password){
    console.log(`You entered the correct password after ${noOfTries - 1} attempt(s)`);
}


