/* Tutorial 4
    Example 2 JavaScript code
*/
console.log("Arham's Output from Tutorial 4 Example 2")

let DayEntered = prompt("Please type any day of the week in three letter abbreviation")

switch (DayEntered.toLowerCase()) {

    case 'sun':
        console.log(`You entered: ${DayEntered}\n The following day is: mon`);
        break;
    case 'mon' :
        console.log(`You entered: ${DayEntered}\n The following day is: tue`);
        break;
    case 'tue' :
        console.log(`You entered: ${ DayEntered }\n The following day is: wed`);
        break;
    case 'wed' :
        console.log(`You entered: ${DayEntered}\n The following day is: thu`);
        break;
    case 'thu' :
        console.log(`You entered: ${DayEntered}\n The following day is: fri`);
        break;
    case 'fri' :
        console.log(`You entered: ${DayEntered}\n The following day is: sat`);
        break;
    case 'sat' :
        console.log(`You entered: ${DayEntered}\n The following day is: sun`);
        break;
    default:
        console.log('Sorry your input is invalid');
}
