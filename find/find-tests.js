// SimpleTest tests for find() function based on array.prototype.find().

tests({

  'find should pass in the ith element as the first argument to the callback.': function() {
	find([1], function(value) {
	  eq(value, 1);
	});
  },
  'find should pass in the ith index as the second argument to the callback.': function() {
	find([1], function(value, index) {
	  eq(index, 0);
	});
  },
  'find should run the callback initial array.length times.': function() {
	var timesCalled = 0;
	var testArray = [1, 2, 3];
	var timesToCall = testArray.length;
	find(testArray, function(el, i) {
	  if (i === 0) {
		testArray.push(4);
	  }
	  timesCalled++;
	});
	eq(timesCalled, timesToCall);
	eq(testArray.length, 4);
  },
  'find should pass in the array as the third argument to the callback.': function() {
	var testArray = [1];
	find(testArray, function(value, index, array) {
	  eq(array, testArray);
	});
  },
  'find should accept an alternate "this" object to bind to.': function() {
	var altThis = {alternate: true};
	find([1], function() {
	  eq(altThis, this);
	}, altThis);
  },
  'find should return the first element that callback returns "true" for.': function() {
	var result = find([1, 2, 3], function(value) {
	  return value > 1;
	});
	eq(result, 2);
  },
  'find should return undefined if callback never returns true.': function() {
	var result = find([1, 2, 3], function(value) {
		return value > 3;
	});
	eq(result, undefined);
  },
  'find should run callback on missing elements.': function() {
	var timesCalled = 0;
	var sparseArray = [, 1, 2, , 3];
	var result = find(sparseArray, function(value) {
		timesCalled++;
		return value > 2;
	});
	eq(timesCalled, 5);
	eq(result, 3);
  }
 });

/* other tests
  'find should take an array as its first argument.': function() {
  	fail();
  },
  'find should take a callback as its second argument.': function() {
  	fail();
  }, 
  'find's callback should return true or false.': function() {
  	fail();
  }, 
  'find should not visit an appended element unless an earlier element is removed.': function() {
	fail();
  },
  'find should visit an appended element after an earlier element is removed.': function() {
	fail();
  },
  'find should not re-visit changed elements at positions it has already visited.': function() {
	fail();
  },
  'find should not re-visit removed elements at positions it has already visited.': function() {
	fail();
  },
  'find should process changed elements it visits, not the original values.': function() {
	fail();
  },
  'find should not process removed elements at positions it has yet to visit.': function() {
	fail();
*/
