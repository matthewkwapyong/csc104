const principal = parseFloat(prompt("enter the principal"));
const rate = parseFloat(prompt("enter the interest rate"));
const time = parseFloat(prompt("enter the time in years"));
const compoundInterest = principal * Math.pow((1 + (rate / 100)), time) - principal;
alert(`The compound interest is: ${compoundInterest.toFixed(2)}`);