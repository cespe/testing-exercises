// SimpleTest tests for every() function based on array.prototype.every().

/* every() tests whether all elements in the array pass the test implemented by callback.
 * It returns true if all elements pass.
 * It returns true if the array is empty.
 * It returns false immediately if callback returns false.
 * Callback is called initial array.length times, like e.g. find().
 * Like map(), callback is not called on missing elements
 */

tests({

	'every should pass in the ith element as the first argument to the callback': function() {
		every([1], function(value) {
			eq(value, 1);
		});
	},
	'every should pass in the ith index as the second argument to the callback': function() {
		every([1], function(value, index) {
			eq(index, 0);
		});
	},
	'every should run the callback initial array.length times': function() {
		var timesCalled = 0;
		var testArray = [1, 2, 3];
		var timesToCall = testArray.length;
		every(testArray, function(el, i) {
		if (i === 0) {
			testArray.push(4);
		}
		timesCalled++;
		});
		eq(timesCalled, timesToCall);
		eq(testArray.length, 4);
	},
	'every should pass in the array as the third argument to the callback': function() {
		var testArray = [1];
		every(testArray, function(value, index, array) {
		eq(array, testArray);
		});
	},
	'every should accept an alternate "this" object to bind to': function() {
		var altThis = {alternate: true};
		every([1], function() {
		eq(altThis, this);
		}, altThis);
	},
	'every should bind "this" to undefined if no alternate "this" is given': function() {
		every([1], function() {
		eq(this, window); // according to usual rules for determining the 'this' seen by function
		});
	},
	'every should return "true" if callback never returns "false"': function() {
		var result = every([1, 2, 3], function(value) {
			return value < 4;
		});
		eq(result, true);
	},
	'every should return "true" if array is empty': function() {
		var result = every([], function(value) {
			return value < 4;
		});
		eq(result, true); // vacuously true since callback is never called
	},
	'every should return "false" immediately if callback returns "false"': function() {
		var firstFalse = 0;
		var result = every([1, 2, 4, 3], function(value, index) {
			firstFalse++;
			return value < 4;
		});
		eq(result, false);
		eq(firstFalse, 3); // avoids spurious pass because returning undefined is falsy
	},
	'every should not run callback on missing elements': function() {
		var timesCalled = 0;
		var sparseArray = [, 1, 2, , 3];
		var result = every(sparseArray, function(value, index) {
			timesCalled++;
		});
		eq(timesCalled, 3);
	}
});

/* other tests
	'every should take an array as its first argument': function() {
		fail();
	},
	'every should take a callback as its second argument': function() {
		fail();
	}, 
	'every's callback should return true or false': function() {
		fail();
	}, 
	'every should not visit an appended element unless an earlier element is removed': function() {
		 fail();
	},
	'every should visit an appended element after an earlier element is removed': function() {
		fail();
	},
	'every should not re-visit changed elements at positions it has already visited': function() {
		fail();
	},
	'every should not re-visit removed elements at positions it has already visited': function() {
		fail();
	},
	'every should process changed elements it visits, not the original values': function() {
		fail();
	},
	'every should not process removed elements at positions it has yet to visit': function() {
		fail();
*/

