// based on array.prototype.sort(). See spec notes in array.prototype.sort-spec.js

tests({
	'sort should take an array and return it': function() {
		var arr = ['a'];
		var result = sort(arr);
		eqstrict(result, arr);
	},
	'If no callback is provided, sort should sort elements into UTF-16 order': function() {
		// function as coded leaves this to Javascript string comparison; needs a unicode test case
		var arr1 = ['b', 'd', 'c', 'a'];
		var result1 = sort(arr1);
		eqstrict(arr1[0], 'a');
		eqstrict(arr1[1], 'b');
		eqstrict(arr1[2], 'c');
		eqstrict(arr1[3], 'd');
		
		var months = ['March', 'Jan', 'Feb', 'Dec'];
		var monthsResult = sort(months);
		eq(months[0], 'Dec');
		eq(months[1], 'Feb');
		eq(months[2], 'Jan');
		eq(months[3], 'March');
	},
	'If no callback provided, sort should convert non-string elements to strings for sorting': function() {
		var arr2 = [1, 30, 4, 21, 100000];		// test numbers converted to strings
		var result2 = sort(arr2);
		eqstrict(arr2[0], 1);
		eqstrict(arr2[1], 100000);
		eqstrict(arr2[2], 21);
		eqstrict(arr2[3], 30);
		eqstrict(arr2[4], 4);

		var testArray = [30, 1, 100];
		var testFunction = function() {};
		var testObj = {};
		var arr3 = ['d', testArray, testObj, null, testFunction, NaN, false, 4];
		var result3 = sort(arr3);
		eqstrict(arr3[0], testArray);
		eqstrict(arr3[1], 4);
		eqstrict(Number.isNaN(arr3[2]), true );
		eqstrict(arr3[3], testObj);
		eqstrict(arr3[4], 'd');
		eqstrict(arr3[5], false);
		eqstrict(arr3[6], testFunction);
		eqstrict(arr3[7], null);
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
	'Callback(a, b) should return a negative number if a < b and a should be sorted lower than b': function() {
		// Wording and comparisons of this test respect the wording of the MDN doc
		// passes without code change
		function compareNumber(a, b) {
			return a - b;
		}
		arr = [1, 2];
		result = sort(arr, compareNumber);
		eqstrict(arr.indexOf(1) < arr.indexOf(2), true);
	},
	'Callback(a, b) should return 0 if a === b and sort should leave them alone with respect to each other': function() {
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
	'Callback(a, b) should return a positive number if a > b and a should be sorted higher than b': function() {
		// Wording and comparisons of this test respect the wording of the MDN doc
		var arr = [2, 1];
		function compareNumbers(a, b) {
			return a - b;
		}
		result = sort(arr, compareNumbers);
		eq(arr.indexOf(1) < arr.indexOf(2), true);
	},
	'sort should move all empty index positions to the end of the array': function() {
		var arr4 = ['b',, 'a'];
		var result4 = sort(arr4);
		eqstrict(arr4[0], 'a');
		eqstrict(arr4[1], 'b');
		eqstrict(arr4[2] in arr4, false);

		var arr5 = [,2,, 1];					
		function compareNumbers(a, b) {
			return a - b;
		}
		var result5 = sort(arr5, compareNumbers);
		eqstrict(arr5[0], 1);
		eqstrict(arr5[1], 2);
		eqstrict(arr5[2] in arr5, false);
		eqstrict(arr5[3] in arr5, false);
		

	},
	'sort should move all undefined elements to the end of array but before empty index positions': function() {
		var arr6 = ['z', undefined,, 3, undefined, 100]
		var result6 = sort(arr6);
		eqstrict(arr6[0], 100);
		eqstrict(arr6[1], 3);
		eqstrict(arr6[2], 'z');
		eqstrict(arr6[3], undefined);
		eqstrict(arr6[4], undefined);
		eqstrict(arr6[5] in arr6, false);
		
		var arr7 = [undefined,, 3, undefined, 100]
		function compareNumbers(a, b) {
			return a - b;
		}
		var result7 = sort(arr7, compareNumbers);
		eqstrict(arr7[0], 3);
		eqstrict(arr7[1], 100);
		eqstrict(arr7[2], undefined);
		eqstrict(arr7[3], undefined);
		eqstrict(arr7[4] in arr7, false);
	}
});
