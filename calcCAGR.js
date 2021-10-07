const prompt = require("prompt-sync")(); //https://sebhastian.com/javascript-console-input/

/*As another example, let’s say an investor bought 55 shares of Amazon.com (AMZN) stock in December 2017 at $1,180 per share, for a total investment of $64,900. After three years, in December 2020, the stock has risen to $3,200 per share, and the investor’s investment is now worth $176,000.1 What is the CAGR?

Using the CAGR formula, we know that we need the:

Ending Balance: $176,000
Beginning Balance: $64,900
Number of Years: 3
So to calculate the CAGR for this simple example,
we would enter that data into the formula as follows:
[($176,000 / $64,900) ^ (1/3)] - 1 = 39.5%.
*/

var endingBalance = prompt("Enter ending balance ");
var beginningBalance = prompt("Enter beginning balance ");
var numberOfYears = prompt("Over how many years? ");


function cagr(eb,bb,noy) {
    var cagrcalc = ((eb / bb) ** (1/noy) - 1) * 100;
    return "CAGR over " + noy + " years is " + Math.round(cagrcalc).toFixed(2) + "%"
}

console.log(cagr(endingBalance,beginningBalance,numberOfYears))
