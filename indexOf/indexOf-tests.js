/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

Returns the first index at which a given element can be found in the array
If the element is not in the array, returns -1
Either way, returns a number
Works left to right
Compares the search element to each array element using strict equality (===)
   which means that the types must match and the contents must match
By default, the comparison starts at index 0
The starting index can be specified with an optional fromIndex parameter
   If fromIndex >= array.length, return -1 and do not search the array
   If fromIndex is a negative number, use it as an offset to array.length.
arr.indexOf(searchElement[, fromIndex])
*/

tests({
	'': function() {

	}
});
