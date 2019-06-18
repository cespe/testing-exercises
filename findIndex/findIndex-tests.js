// SimpleTest tests for findIndex() function based on array.prototype.findIndex().

/* findIndex() is like find() except that it returns the index instead of the value at the
 * position where callback first returns true. The other difference is that it returns -1
 * instead of undefined if callback never returns true.
 */

tests({

	'findIndex should pass in the ith element as the first argument to the callback.': function() {
		findIndex([1], function(value) {
			eq(value, 1);
		});
	},
	'findIndex should pass in the ith index as the second argument to the callback.': function() {
		findIndex([1], function(value, index) {
			eq(index, 0);
		});
	},
	'findIndex should run the callback initial array.length times.': function() {
		var timesCalled = 0;
		var testArray = [1, 2, 3];
		var timesToCall = testArray.length;
		findIndex(testArray, function(el, i) {
		if (i === 0) {
			testArray.push(4);
		}
		timesCalled++;
		});
		eq(timesCalled, timesToCall);
		eq(testArray.length, 4);
	},
	'findIndex should pass in the array as the third argument to the callback.': function() {
		var testArray = [1];
		findIndex(testArray, function(value, index, array) {
		eq(array, testArray);
		});
	},
	'findIndex should accept an alternate "this" object to bind to.': function() {
		var altThis = {alternate: true};
		findIndex([1], function() {
		eq(altThis, this);
		}, altThis);
	},
	'findIndex should bind "this" to undefined if no alternate "this" is given.': function() {
		findIndex([1], function() {
		eq(this, window); // according to usual rules for determining the 'this' seen by function
		});
	},
	'findIndex should return the first index where callback returns "true".': function() {
		var result = findIndex([1, 2, 3], function(value, index) {
			if (value > 1) {
				return index;
			}
		});
		eq(result, 1);
	},
	'findIndex should return -1 if callback never returns true.': function() {
		var result = findIndex([1, 2, 3], function(value, index) {
			if (value > 3)
				return index;
		});
		eq(result, -1);
	},
	'findIndex should run callback on missing elements.': function() {
		var timesCalled = 0;
		var sparseArray = [, 1, 2, , 3];
		var result = findIndex(sparseArray, function(value, index) {
		timesCalled++;
		if (value > 2)
			return index;
		});
		eq(timesCalled, 5);
		eq(result, 4);
	}
});

/* other tests
	'findIndex should take an array as its first argument.': function() {
		fail();
	},
	'findIndex should take a callback as its second argument.': function() {
		fail();
	}, 
	'findIndex's callback should return true or false.': function() {
		fail();
	}, 
	'findIndex should not visit an appended element unless an earlier element is removed.': function() {
		 fail();
	},
	'findIndex should visit an appended element after an earlier element is removed.': function() {
		fail();
	},
	'findIndex should not re-visit changed elements at positions it has already visited.': function() {
		fail();
	},
	'findIndex should not re-visit removed elements at positions it has already visited.': function() {
		fail();
	},
	'findIndex should process changed elements it visits, not the original values.': function() {
		fail();
	},
	'findIndex should not process removed elements at positions it has yet to visit.': function() {
		fail();
*/

