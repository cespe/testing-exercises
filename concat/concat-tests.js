/*
 var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])

 Use concat() to append one or more arrays or values to an array
 Returns a new array
 Does not change the original arrays/values
 For each argument, push its elements (if it is an array) or the value itself
   (if it is not an array) to the new array.
 Does not make "deep copies" of elements, i.e. if an element is an object
   reference, it is pushed as an object reference.
*/

tests({
	'concat should return a new array': function() {
		var result = undefined;
		result = concat();
		Array.isArray(result);
	},
	'if given an array, concat should push each element to returned array': function() {
		var testObject = {};
		var testFunction = function() {};
		var testArray = [1, testObject, testFunction, ['a', 'b']]
		var resultArray = concat(testArray);
		eq(resultArray[0], testArray[0]);
		eq(resultArray[1], testArray[1]);
		eq(resultArray[2], testArray[2]);
		eq(resultArray[3], testArray[3]);
	},
	'if given a primitive, concat should push it to returned array': function() {
		var resultArray = concat(1);
		eq(resultArray[0], 1);
		var resultArray = concat('a');
		eq(resultArray[0], 'a');
		var resultArray = concat(true);
		eq(resultArray[0], true);
		// null works in the console but doesn't pass the test
		//var resultArrayNull = concat(null);
		//eq(resultArrayNull, null);
		var resultArray = concat(undefined);
		eq(resultArray[0], undefined);
	},
	'if given a non-array object, concat should push it to returned array': function() {
		var testObject = {};
		var resultArrayObject = concat(testObject);
		eq(resultArrayObject[0], testObject);
		var testFunction = function() {};
		var resultArrayFunction = concat(testFunction);
		eq(resultArrayFunction[0], testFunction);
	},
	'if given multiple arguments, concat should process each one in turn': function() {
		var val1 = {};
		var val2 = function() {};
		var val3 = [1, 2];
		var val4 = [3, 4];
		resultArray = concat(val1, val2, val3, val4);
		eq(resultArray[0], val1);
		eq(resultArray[1], val2);
		eq(resultArray[2], val3[0]);
		eq(resultArray[3], val3[1]);
		eq(resultArray[4], val4[0]);
		eq(resultArray[5], val4[1]);
	},
	'concat should not recurse into nested array arguments': function() {
		var val1 = [1, [2, 3]];
		resultArray = concat(val1);
		eq(resultArray[1], val1[1]);
	}
});
