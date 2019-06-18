// SimpleTest tests for some() function based on array.prototype.some().

/* some() tests whether at least one element in the array passes the test implemented by callback.
 * some() is the mirror image of every()
 * It returns false if all elements fail.
 * It returns false if the array is empty.
 * It returns true immediately if callback returns true.
 * Callback is called initial array.length times, like e.g. find().
 * Like map(), callback is not called on missing elements
 */

tests({

	'some should pass in the ith element as the first argument to the callback.': function() {
		some([1], function(value) {
			eq(value, 1);
		});
	},
	'some should pass in the ith index as the second argument to the callback.': function() {
		some([1], function(value, index) {
			eq(index, 0);
		});
	},
	'some should run the callback initial array.length times.': function() {
		var timesCalled = 0;
		var testArray = [1, 2, 3];
		var timesToCall = testArray.length;
		some(testArray, function(el, i) {
		if (i === 0) {
			testArray.push(4);
		}
		timesCalled++;
		});
		eq(timesCalled, timesToCall);
		eq(testArray.length, 4);
	},
	'some should pass in the array as the third argument to the callback.': function() {
		var testArray = [1];
		some(testArray, function(value, index, array) {
		eq(array, testArray);
		});
	},
	'some should accept an alternate "this" object to bind to.': function() {
		var altThis = {alternate: true};
		some([1], function() {
		eq(altThis, this);
		}, altThis);
	},
	'some should bind "this" to undefined if no alternate "this" is given.': function() {
		some([1], function() {
		eq(this, window); // according to usual rules for determining the 'this' seen by function
		});
	},
	'some should return "false" if callback never returns "true".': function() {
		var result = some([1, 2, 3], function(value) {
			return value > 4;
		});
		eq(result, false);
	},
	'some should return "false" if array is empty.': function() {
		var result = some([], function(value) {
			return value < 4;
		});
		eq(result, false);
	},
	'some should return "true" immediately if callback returns "true".': function() {
		var firstTrue = 0;
		var result = some([1, 2, 4, 3], function(value, index) {
			firstTrue++;
			return value > 3;
		});
		eq(result, true);
		eq(firstTrue, 3); // avoids spurious pass because returning undefined is falsy
	},
	'some should not run callback on missing elements.': function() {
		var timesCalled = 0;
		var sparseArray = [, 1, 2, , 3];
		var result = some(sparseArray, function(value, index) {
			timesCalled++;
		});
		eq(timesCalled, 3);
	}
});

/* other tests
	'some should take an array as its first argument.': function() {
		fail();
	},
	'some should take a callback as its second argument.': function() {
		fail();
	}, 
	'some's callback should return true or false.': function() {
		fail();
	}, 
	'some should not visit an appended element unless an earlier element is removed.': function() {
		 fail();
	},
	'some should visit an appended element after an earlier element is removed.': function() {
		fail();
	},
	'some should not re-visit changed elements at positions it has already visited.': function() {
		fail();
	},
	'some should not re-visit removed elements at positions it has already visited.': function() {
		fail();
	},
	'some should process changed elements it visits, not the original values.': function() {
		fail();
	},
	'some should not process removed elements at positions it has yet to visit.': function() {
		fail();
*/

