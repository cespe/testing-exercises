/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

sort() sorts in place and returns the sorted array

arr.sort([compareFunction])

Optional compareFunction defines the sort order. If omitted, the default is to
convert elements to strings and sort them by UTF-16 code value. In practice, it looks 
like you can just compare string elements and let javascript worry about the comparison.

compareFunction(firstEl, secondEl)

firstEl is the first element for comparison.
secondEl is the second element for comparison.

All undefined or empty elements are sorted to the end of the array with no call to
compareFunction.
	Probably use filter() to get the real values, keep count on the empties, and
	add them back to array.length at the end

So, the compare function has the following form:

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

a - b serves to sort numbers.

Sort algorithm
Want to move elements left until they are in the proper place
While not sorted
For each element in the array
	compare to following element
		swap if appropriate

*/

