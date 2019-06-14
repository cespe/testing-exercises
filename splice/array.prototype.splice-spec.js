/* splice() changes the contents of an array in place. Elements can be removed (not just deleted),
 * elements can be replaced, and new elements can be added.
 *
 * splice() returns a new array with any deleted elements. If no elements are removed, and empty
 * array is returned.
 *
 * Syntax of array method
 * var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
 *
 * Begin changing the array at index start.
 * 	1. If start > array.length, start = array.length.
 * 	2. If start < 0, start = array.length + start.
 * 	3. Doc says if |start| > array.length, start = 0. That contradicts 1 if start is positive.
 * 		What it means to say is if array.length + start < 0, start at 0.
 *
 * 	Optional deleteCount is the number of elements to remove beginning at start.
 * 	1. If omitted, delete elements start to array.length.
 * 	2. If deleteCount >= (array.length - start), delete elements start to array.length.
 * 	3. If deleteCount <= 0, do not remove any elements.
 *
 * 	Optional items
 * 	1. Add items beginning at start, moving existing elements to the right.
 *
 * Questions
 * 	Coordinate the actions of deleteCount and adding items?
 * 		First delete, then add, to match behavior of array.splice.
 * 	The docs are thin. Investigate behavior on e.g. array-like objects? Non-numeric start and deleteCount?
 * 		If start is NaN or undefined, set start to 0.
 * 		If start is non-numeric, convert it to an integer if possible.
 * 		If start is missing, throw SyntaxError (no code change needed, this is the default for a missing argument)
 * 		If deleteCount is NaN or undefined, don't delete anything
 * 		If deleteCount is non-numeric, convert it to an integer if possible.
 * 		If deleteCount is missing, delete to end of array
 * 		If an early argument is missing (, 1) or (1,,'a') throw a SyntaxError; (1,) is okay though (default for arguments)
 */

arr,splice(5)			// start > array.length, set start to array.length
[]
arr
(2) [1, 2]

arr
(2) [1, 2]
arr.splice(5, 0, 3);
[]
arr
(3) [1, 2, 3]

arr
(3) [1, 2, 3]
arr.splice(-4);			// array.length + start < 0, set start to 0
(3) [1, 2, 3]
arr
[]

// non-integer values for start
arr = [1, 2, 3, 4, 5];
(5) [1, 2, 3, 4, 5]
arr.splice('xyz', 2)	// NaN set start to 0
(2) [1, 2]
arr
(3) [3, 4, 5]

arr = [1, 2, 3, 4, 5];
(5) [1, 2, 3, 4, 5]
arr.splice(1.5, 2);		// convert to integer if you can
(2) [2, 3]
arr
(3) [1, 4, 5]

arr = [1, 2, 3, 4, 5];
(5) [1, 2, 3, 4, 5]
arr.splice('1', 2);		// convert to integer if you can
(2) [2, 3]
arr
(3) [1, 4, 5]

arr = [1, 2, 3, 4, 5];
(5) [1, 2, 3, 4, 5]
arr.splice('1.8', 2);	// convert to integer if you can
(2) [2, 3]
arr
(3) [1, 4, 5]

// non-integer values for deleteCount
arr = [1, 2, 3, 4, 5];
(5) [1, 2, 3, 4, 5]
arr.splice(1, 'abc');	// NaN don't delete anything
[]

arr = [1, 2, 3, 4, 5];
(5) [1, 2, 3, 4, 5]
arr.splice(1, undefined)	// undefined, don't delete anything
[]
arr
(5) [1, 2, 3, 4, 5]

arr
(5) [1, 2, 3, 4, 5]
arr.splice(1, '2');		// convert to integer if you can
(2) [2, 3]
arr
(3) [1, 4, 5]
arr = [1, 2, 3, 4, 5];
(5) [1, 2, 3, 4, 5]
arr.splice(1, '2.8');		// convert to integer if you can
(2) [2, 3]
arr
(3) [1, 4, 5]

// missing or undefined values
arr = [1, 2, 3, 4, 5];
(5) [1, 2, 3, 4, 5]
arr.splice(1,)			// deleteCount missing, delete to end of array
(4) [2, 3, 4, 5]
arr
[1]

arr = [1, 2, 3, 4, 5];
(5) [1, 2, 3, 4, 5]
arr.splice(,1)										// start missing, throw SyntaxError
VM1235:1 Uncaught SyntaxError: Unexpected token ,

arr.splice(undefined , 1)	// start undefined, set start to 0
[1]
arr
(4) [2, 3, 4, 5]

arr
(5) [1, 2, 3, 4, 5]
arr.splice(1,,'a')									// deleteCount missing before arg 3, throw SynTax error
VM1373:1 Uncaught SyntaxError: Unexpected token ,

arr.splice(1, undefined,'a')	// deleteCount undefined before arg 3, don't delete anything
[]
arr
(6) [1, "a", 2, 3, 4, 5]
