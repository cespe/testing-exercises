// tests for splice(), based on array.prototype.splice()
// covers standard behavior as well as behavior with parameters of the wrong type
// does not cover objects resembling arrays on this first pass

tests({
	'splice should accept an array as its first argument and return a new array': function() {
		var arr = [1, 2, 3];
		result = splice(arr);
		eqstrict(result === arr, false);
		eq(Array.isArray(result), true);
	},
	'splice should accept a number, start, as its second argument, and if only array and start are given, it should remove elements from start to end of array': function() {
		var arr = [1, 2, 3];
		result = splice(arr, 1);
		eqstrict(arr.length, 1);
		eqstrict(arr[0], 1);
		eqstrict(arr[1] in arr, false);
		eqstrict(arr[2] in arr, false);
	},
	'splice should put deleted elements, if any, in the array to be returned': function() {
		var arr = [1, 2, 3];
		result = splice(arr, 1);
		eqstrict(result.length, 2);
		eqstrict(result[0], 2);
		eqstrict(result[1], 3);
	},
	'If start > array.length, splice should set start to array.length': function() {
		var arr = [1, 2, 3];
		result = splice(arr, 5);
		eqstrict(arr.length, 3);
		eqstrict(arr[0], 1);
		eqstrict(arr[1], 2);
		eqstrict(arr[2], 3);
	
	},
	'If start < 0, splice should set start to array.length + start': function() {
		var arr = [1, 2, 3];
		result = splice(arr, -2);
		eqstrict(arr.length, 1);
		eqstrict(arr[0], 1);
		eqstrict(arr[1] in arr, false);
		eqstrict(arr[2] in arr, false);
	},
	'If start < 0 and array.length + start < 0, splice should set start to 0': function() {
		var arr = [1, 2, 3];
		result = splice(arr, -5);
		eqstrict(arr.length, 0);
		eqstrict(arr[0] in arr, false);
		eqstrict(arr[1] in arr, false);
		eqstrict(arr[2] in arr, false);
	},
	'splice should accept a number, deleteCount, as its third argument and remove that number of elements if given': function() {
		var arr = [1, 2, 3, 4, 5];
		result = splice(arr, 1, 3);		// deleteCount > start
		eqstrict(arr[0], 1);
		eqstrict(arr[1], 5);
		eq(arr.length, 2);
		eqstrict(result[0], 2);
		eqstrict(result[1], 3);
		eqstrict(result[2], 4);
		eqstrict(result.length, 3);

		//debugger;
		var arr = [1, 2, 3, 4, 5];
		result = splice(arr, 3, 1);		// start > deleteCount
		eqstrict(arr[0], 1);
		eqstrict(arr[1], 2);
		eqstrict(arr[2], 3);
		eqstrict(arr[3], 5);
		eq(arr.length, 4);
		eqstrict(result[0], 4);
		eqstrict(result.length, 1);
	},
	'If deleteCount >= (array.length - start), splice should remove elements to end of array': function() {
		var arr = [1, 2, 3, 4, 5];
		result = splice(arr, 1, 7);
		eqstrict(arr[0], 1);
		eq(arr.length, 1);
		eqstrict(result[0], 2);
		eqstrict(result[1], 3);
		eqstrict(result[2], 4);
		eqstrict(result[3], 5);
		eqstrict(result.length, 4);
	},
	'If deleteCount <= 0, splice should not remove any elements': function() {
		var arr = [1, 2];
		result = splice(arr, 1, 0);
		eqstrict(arr[0], 1);
		eqstrict(arr[1], 2);
		eq(arr.length, 2);
		eqstrict(result.length, 0);

		var arr = [1, 2];
		result = splice(arr, 1, -1);
		eqstrict(arr[0], 1);
		eqstrict(arr[1], 2);
		eq(arr.length, 2);
		eqstrict(result.length, 0);
	},
	'If additional arguments are supplied, splice should add them as elements beginning from start': function() {
		var arr = [1, 3];
		result = splice(arr, 1, 0, 2);
		eqstrict(arr[0], 1);
		eqstrict(arr[1], 2);
		eqstrict(arr[2], 3);
		eqstrict(result.length, 0);
		eqstrict(arr.length, 3);

		var arr = ['a', 'b', 'f', 'f', 'g'];
		result = splice(arr, 2, 1, 'c', 'd', 'e');
		eqstrict(arr[0], 'a');
		eqstrict(arr[1], 'b');
		eqstrict(arr[2], 'c');
		eqstrict(arr[3], 'd');
		eqstrict(arr[4], 'e');
		eqstrict(arr[5], 'f');
		eqstrict(arr[6], 'g');
		eqstrict(result.length, 1);
		eqstrict(result[0], 'f');
		eqstrict(arr.length, 7);
	}
});
