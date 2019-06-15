// based on array.prototype.sort(). See spec notes in array.prototype.sort-spec.js


tests({
	'sort should take an array and return it': function() {
		var arr = ['a'];
		var result = sort(arr);
		eq(result, arr);
	},
	'If no callback is provided, sort should sort elements into UTF-16 order': function() {
		var arr = ['b', 'd', 'c', 'a'];
		var result = sort(arr);
		eq(arr[0], 'a');
		eq(arr[1], 'b');
		eq(arr[2], 'c');
		eq(arr[3], 'd');
		
		var months = ['March', 'Jan', 'Feb', 'Dec'];
		var monthsResult = sort(months);
		eq(months[0], 'Dec');
		eq(months[1], 'Feb');
		eq(months[2], 'Jan');
		eq(months[3], 'March');

		// UTF-16 test case here...
	},
	'If no callback is provided, sort should convert non-string elements to strings for sorting': function() {
		var arr = [1, 30, 4, 21, 100000];		// test numbers converted to strings
		var result = sort(arr);
		eq(arr[0], 1);
		eq(arr[1], 100000);
		eq(arr[2], 21);
		eq(arr[3], 30);
		eq(arr[4], 4);

		var testArray = [30, 1, 100];			// test other types converted to strings
		var testFunction = function() {};
		var testObj = {};
		var arr = ['d', testArray, testObj, null, testFunction, NaN, false, 4];
		var result = sort(arr);
		eq(arr[0], testArray);
		eq(arr[1], 4);
		eq(Number.isNaN(arr[2]), true );
		eq(arr[3], testObj);
		eq(arr[4], 'd');
		eq(arr[5], false);
		eq(arr[6], testFunction);
		eq(arr[7], null);
	},
	'sort should pass a first element for comparison as the first argument to the callback': function() {
		sort(['a', 'b'], function(a) {
			eq(a, 'a');
		});
	},
	'sort should pass a second element for comparison as the second argument to the callback': function() {
		sort(['a', 'b'], function(a, b) {
			eq(b, 'b');
		});
	},
	'callback(a, b) should return a negative number if a < b and a should be sorted lower than b': function() {
		// Wording and comparisons of this test respect the wording of the MDN doc
		// passes without code change
		function compareNumber(a, b) {
			return a - b;
		}
		arr = [1, 2];
		result = sort(arr, compareNumber);
		eq(arr.indexOf(1) < arr.indexOf(2), true);
	},
	'callback(a, b) should return 0 if a === b and sort should leave them alone with respect to each other': function() {
		// Wording and comparisons of this test respect the wording of the MDN doc
		// passes without code change
		function compareNumber(a, b) {
			return a - b;
		}
		arr = [1, '1'];
		result = sort(arr, compareNumber);
		eq(arr.indexOf(1) < arr.indexOf('1'), true);
		eq(arr.indexOf('1') - arr.indexOf(1), 1);
	},
	'callback(a, b) should return a positive number if a > b and a should be sorted higher than b': function() {
		// Wording and comparisons of this test respect the wording of the MDN doc
		var arr = [2, 1];
		function compareNumbers(a, b) {
			return a - b;
		}
		result = sort(arr, compareNumbers);
		eq(arr.indexOf(1) < arr.indexOf(2), true);
	},
	'sort should move all empty index positions to the end of the array': function() {
		var arr = ['b',, 'a'];
		var result = sort(arr);
		eq(arr[0], 'a');
		eq(arr[1], 'b');
		eq(arr[2] in arr, false);

		var arr = [,2,, 1];					
		function compareNumbers(a, b) {
			return a - b;
		}
		var result = sort(arr, compareNumbers);
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr[2] in arr, false);
		eq(arr[3] in arr, false);
		

	},
	'sort should move all undefined elements to the end of array but before empty index positions': function() {
		var arr = ['z', undefined,, 3, undefined, 100]
		var result = sort(arr);
		eq(arr[0], 100);
		eq(arr[1], 3);
		eq(arr[2], 'z');
		eq(arr[3], undefined);
		eq(arr[4], undefined);
		eq(arr[5] in arr, false);
		
		var arr = [undefined,, 3, undefined, 100]
		function compareNumbers(a, b) {
			return a - b;
		}
		var result = sort(arr, compareNumbers);
		eq(arr[0], 3);
		eq(arr[1], 100);
		eq(arr[2], undefined);
		eq(arr[3], undefined);
		eq(arr[4] in arr, false);
	}
});
