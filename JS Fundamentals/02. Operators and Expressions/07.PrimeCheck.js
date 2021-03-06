function isPrime(args) {
    var number = +args[0],
        divider = 2,
        maxDivider = Math.sqrt(number),
        prime = true;

    if (number <= 1) {
        return false;
    } else {
        while (prime && (divider <= maxDivider)) {
            if (!(number % divider)) {
                prime = false;
            }
            divider += 1;
        }
        return prime;
    }
}

console.log(isPrime(['2']));
console.log(isPrime(['23']));
console.log(isPrime(['-3']));
console.log(isPrime(['0']));
console.log(isPrime(['1']));

// Implement a javascript function that accepts an array containing an integer N as string
// (which will always be less than 100 or equal) and uses an expression to check if given N is prime
// (i.e. it is divisible without remainder only to itself and 1).

// Note: You should check if the number is positive.
// Input

// The only element of the array will be the integer N as a string value.
// Output

// Output true if the number is prime and false otherwise.
// You can use console.log to print the results or you can use return to return the answer. Both are correct.
// Constraints

// N will always be a valid 32-bit integer number, which will be less than 100 or equal.
// Time limit: 0.1s
// Memory limit: 16MB
// Sample tests

// Input	Output
// 2		true
// 23		true
// -3		false
// 0		false
// 1		false