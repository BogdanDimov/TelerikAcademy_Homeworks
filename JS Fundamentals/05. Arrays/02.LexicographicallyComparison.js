function compareArrays(args) {
  var i,
      len,
      words = args[0].split('\n'),
      firstWord = words[0],
      secondWord = words[1];
       
  if (firstWord > secondWord) {
    return '>';
  } else if (firstWord < secondWord) {
    return '<';
  } else {
    return '=';
  }
}

console.log(compareArrays(['hello\nhalo']));
/*
Write a program that compares two char arrays lexicographically (letter by letter).

Input

On the first line you will receive the first char array as a string
On the second line you will receive the second char array as a string
Output

Print < if the first array is lexicographically smaller
Print > if the second array is lexicographically smaller
Print = if the arrays are equal
Constraints

1 <= size of arrays <= 128
Time limit: 0.1s
Memory limit: 16MB
Sample tests

Input Output
hello >
halo  

food  =         
food  
*/