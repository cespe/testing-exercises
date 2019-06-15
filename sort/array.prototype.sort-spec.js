/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

sort() sorts in place and returns the sorted array

arr.sort([compareFunction])

Optional compareFunction defines the sort order. If omitted, the default is to
convert elements to strings and sort them by UTF-16 code value.

Normalize the strings to sort by UTF-16 value.
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
	https://withblue.ink/2019/03/11/why-you-need-to-normalize-unicode-strings.html
		For the purposes of this exercise, I'm going to assume that the default NFC form
		of string.normalize will do the job.
	Update after testing. It turns out that at least in chrome, normalizing is not necessary,
	i.e. it is already handled by regular javascript string comparison.

compareFunction(firstEl, secondEl)

firstEl is the first element for comparison.
secondEl is the second element for comparison.

The docs say "all undefined or empty elements are sorted to the end of the array with
no call to compareFunction." empty elements go last, following undefined elements. 
	
The compare function has the following form:

function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
*/

arr = ["🐶", "🐱"]	// dog is U+1F436 and cat is U+1F431
(2) ["🐶", "🐱"]
arr.sort()
(2) ["🐱", "🐶"]

var first = '\u00e9';
undefined
var second = '\u0065\u0301';
undefined
first
"é"
first === "é"
true
second
"é"
second === "é"
true
first === second
false
first < second
false
arr = [first, second]
(2) ["é", "é"]
arr.sort()
(2) ["é", "é"]
arr[0] === second
true
arr[1] === first
true

// All of these cases are covererd by concatenation to an empty string

[[1, 30, 100000], 'd', 'a'].sort()
//(3) [Array(3), "a", "d"]

['d', [100000, 1], 'a'].sort()
//(3) [Array(2), "a", "d"]

[1, 30, 4, 21, 100000].sort()
//(5) [1, 100000, 21, 30, 4]

[true, false, true, false].sort()
//(4) [false, false, true, true]

[null, NaN, undefined].sort()
//(3) [NaN, null, undefined]

[{}, [1], function(){}, 'a', true, NaN, null, undefined, 88].sort()
//(9) [Array(1), 88, NaN, {…}, "a", ƒ, null, true, undefined]

[undefined,,88,,14, undefined].sort()
//(6) [14, 88, undefined, undefined, empty × 2]

[88, 1000, NaN, Infinity, 14].sort()
//(5) [1000, 14, 88, Infinity, NaN]

[88, 1000, NaN, Infinity, 14].sort(function(a, b) {
	return a - b;
});
(5) [88, 1000, NaN, 14, Infinity]

var numbers = [4, 2, 10, 5, 1, 3];
function compareNumbers(a, b) {
	return a - b;
}
numbers.sort(compareNumbers)
//(6) [1, 2, 3, 4, 5, 10]

['anchor', 'Anchovy', 'big', 'Big', 'BIG'].sort()
//(5) ["Anchovy", "BIG", "Big", "anchor", "big"]



