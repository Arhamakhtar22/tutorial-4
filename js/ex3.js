/* Tutorial 4
    Example 3 JavaScript code
*/

let num1 = prompt("Type a number");
let num2 = prompt("Type another number");
op = prompt("Choose a mathematical operation to perform (Addition, Subtraction, Multiplication, Division, Modulo)")

if(op === "Addition" || op === "+"){
        let result = Number(num1) + Number(num2);
        console.log(result);
    } else if (op === "Subtraction" || op === "-"){
        let result = num1 - num2;
        console.log(result);
    } else if (op === "Multiplication" || op === "*"){
        let result = num1*num2;
        console.log(result);
    } else if (op === "Division" || op === "/"){
        let result = num1 / num2;
        console.log(result);
    } else if (op === "Modulo" || op === "%"){
        let result = num1 % num2;
        console.log(result);
    } else {
        console.log("Invalid operator");
    }
 

