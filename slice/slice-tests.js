/*
The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

arr.slice([begin[, end]])

Returns a new array containing the extracted elements.
begin and end are optional arguments that have meaning if they are integers
	If begin < array.length, starting index is begin.
	If begin > array.length, returns a new emtpy array.
	If begin is negative, starting index is array.length + begin.
		It doesn't matter if |begin| > array.length, starting index is effectively 0


	If begin is not supplied or undefined or otherwise not an integer, slice starts at 0

	If end < array.length, the index of last element extracted is end - 1.
	If end > array.length, extracts through index array.length - 1.
	If end is negative, ending index is array.length + end.
		If |end| > array.length, returns an empty array.

	If end is not supplied or undefined or otherwise not an integer, extracts through
	array.length -1.

slice makes a shallow copy, so use newArray.push().

slice works on "array-like" objects, i.e. objects that are iterable.

 */

tests({
	'': function() {
		fail();
	}
});

