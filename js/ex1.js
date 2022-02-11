/* Tutorial 4
    Example 1 JavaScript code
*/
console.log("Arham's Output from Tutorial 4 Example 1")

let NameEntered = prompt("What is your name? ");
let GradeStanding = prompt("How many number of units have you completed? ");

if (GradeStanding < 0){
    GradeStanding = prompt("units should not be less than 0");
} 
else if (GradeStanding >= 0 && GradeStanding <= 30) {
    console.log(`Hello ${NameEntered}, your grade standing is Freshman`);
} else if (GradeStanding >= 31 && GradeStanding <= 60) {
    console.log(`Hello ${NameEntered}, your grade standing is Sophomore`);
} else if (GradeStanding >= 61 && GradeStanding <=90){
    console.log(`Hello ${NameEntered}, your grade standing is Junior`);
} else if (GradeStanding >= 91) {
    console.log(`Hello ${NameEntered}, your grade standing is Senior`);
}
