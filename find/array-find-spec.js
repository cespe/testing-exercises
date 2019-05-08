// Spec for array.prototype.filter()

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

** quote from docs **
The filter() method creates a new array with all elements that pass the test implemented by
the provided function.
** end quote **

Syntax is same as forEach except filter returns an array where forEach returns undefined.
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

** quote from docs **
filter() does not mutate the array on which it is called.

The range of elements processed by filter() is set before the first invocation of callback.
Elements which are appended to the array after the call to filter() begins will not be visited
by callback. If existing elements of the array are changed, or deleted, their value as passed
to callback will be the value at the time filter() visits them; elements that are deleted
are not visited.
** end quote **

These last two features are tricky:
Even though it says "filter() does not mutate the array on which it is called" it is ok to
replace the array with the returned value. It is also ok for the callback to mutate the array. 

For instance, the callback can modify the array and elements not yet visited will be processed
by filter with the new values. So the first element will never be modified before filter gets
to it, but subsequent elements can be. You can also push new elements, but they won't be visited by filter unless you delete earlier elements.

The rules are:
	1. filter is called initial array.length times, i.e. the array.length before filter runs.
	2. An item pushed onto the array is not filtered unless an earlier item is deleted.
	3. filter does not go back to reconsider changed or deleted items it has already visited.
    4. filter does process a changed item (not the original item) if it hasn't visited yet.
	5. filter does not process an original item if it gets deleted before filter visits.
*/

// Initialize with starting values
function resetTest() {
	testArray = [1, 2, 3, 4, 5];
	numberOfTimesCalled = 0
	filteredArray = undefined;
}

// Define callbacks; usage: filteredArray = testArray.filter(callback);

// Base case, no change to testArray
// Result: filteredArray is [3, 4, 5], timesCalled is 5, testArray is [1, 2, 3, 4, 5]
var baseCase = function(el, i, array) {
	numberOfTimesCalled++;
	return el > 2;
}

// Push a new value; increases array.length
// Result filteredArray is [3, 4, 5], timesCalled is 5, testArray is [1, 2, 3, 4, 5, 6]
var appendValue = function(el, i, array) {
	numberOfTimesCalled++;
	if (i === 1) {
		array.push(6);
	}
	return el > 2;
}

// Push a new value but delete an old value; no change in array.length
// Result filteredArray is [3, 5, 6], timesCalled is 5, testArray is [1, 2, 3, 5, 6]
var appendAndDelete = function(el, i, array) {
	numberOfTimesCalled++;
	if (i === 1) {
		array.push(6);
		array.splice(3, 1);
	}
	return el > 2;
}

// Delete an original value before filter visits; decreases array.length
// Result filteredArray is [3, 5], timesCalled is 4, testArray is [1, 2, 3, 5]
var deleteAfter = function(el, i, array) {
	numberOfTimesCalled++;
	if (i === 1) {
		array.splice(3, 1);
	}
	return el > 2;
}

// Delete an original value after filter visits; decreases array.length
// Result filteredArray is [4, 5], timesCalled is 4, testArray is [2, 3, 4, 5]
var deleteBefore = function(el, i, array) {
	numberOfTimesCalled++;
	if (i === 1) {
		array.splice(0, 1);
	}
	return el > 2;
}

// Generate callbacks with splice settings
function spliceGenerator(index, position, del, value) {	// value should be > 5
	callback = function(el, i, array) {
		numberOfTimesCalled++;
		if (i === index) {
				array.splice(position, del, value);
		}
		return el > 2;
	}
	return callback;
}

// Insert new value after filter visits; increases array.length
// Result: filteredArray is [3, 4], timesCalled is 5, testArray is [1, 9, 2, 3, 4, 5]
var insertBefore = spliceGenerator(1, 1, 0, 9);

// Insert new value before filter visits; increases array.length
// Result: filteredArray is [9, 3, 4], timesCalled is 5, testArray is [1, 2, 9, 3, 4, 5]
var insertAfter = spliceGenerator(1, 2, 0, 9);

// Replace original value after filter visits; no change in array.length
// Result: filteredArray is [3, 4, 5], timesCalled is 5, testArray is [1, 9, 3, 4, 5]
var replaceBefore = spliceGenerator(1, 1, 1, 9);

// Replace original value before filter visits; no change in array.length
// Result: filteredArray is [9, 4, 5], timesCalled is 5, testArray is [1, 2, 9, 4, 5]
var replaceAfter = spliceGenerator(1, 2, 1, 9);

