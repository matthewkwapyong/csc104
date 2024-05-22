const principal = parseFloat(prompt("enter the principal"));
const rate = parseFloat(prompt("enter the interest rate"));
const time = parseFloat(prompt("enter the time in years"));


const simpleInterest = (principal * rate * time) / 100;
alert(`The simple interest is ${simpleInterest}`);