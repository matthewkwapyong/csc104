//using 1500 as exchange rate

let option = prompt("enter 1 to convert ngn to usd.\nenter 2 to convert usd to ngn")
let exchangeRate = 1500;
if (option === "1") {
    const amount = parseFloat(prompt("Enter the amount:"));
    const convert = amount / exchangeRate;
    alert(`${amount} NGN is equal to ${convert} USD`);
} else if (option === "2") {
    const amount = parseFloat(prompt("Enter the amount:"));
    const convert = amount * exchangeRate;
    alert(`${amount} USD is equal to ${convert} NGN`);
}