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
	},
	'sort should pass a first element for comparison as the first argument to the callback': function() {
		sort(['a', 'b'], function(a) {
			eq(a, 'a');
		});
	},
	'sort should pass a second, later element for comparison as the second argument to the callback': function() {
		sort(['a', 'b'], function(a, b) {
			eq(b, 'b');
		});
	},
	'Callback should return a negative number if first element < second element'() {
		// no code change, only the callback is tested
		function compareTest(a, b) {
			return a - b;
		}
		result = compareTest(1, 3);
		eq(result, -2);
	},
	'Callback should return a positive number if first element > second element'() {
		// no code change, only the callback is tested
		function compareTest(a, b) {
			return a - b;
		}
		result = compareTest(3, 1);
		eq(result, 2);
	},
	'Callback should return 0 if first element == second element'() {
		// no code change, only the callback is tested
		function compareTest(a, b) {
			return a - b;
		}
		result = compareTest(3, 3);
		eq(result, 0);
	},
	'sort should put second element before the first if callback returns a positive number': function() {
	// true to the docs, but vague; the implementation swaps the two elements
		fail();
	},
	'sort should move all empty index positions to the end of the array': function() {
		fail();
	},
	'sort should move all undefined elements to the end of array but before empty index positions': function() {
		fail();
	}
});
