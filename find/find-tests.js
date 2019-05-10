// SimpleTest tests for find() function based on array.prototype.find().

tests({

  'find should run the callback initial array.length times': function() {
	fail();
	var timesCalled = 0;
	var timesToCall = [1,2,3].length;
	find([1,2,3], function() {
	  timesCalled++;
	});
	eq(timesCalled, timesToCall);
  },
  'find should pass in the ith element as the first argument to the callback': function() {
	fail();
	find([1], function(value) {
	  eq(value, 1);
	});
  },
  'find should pass in the ith index as the second argument to the callback': function() {
	fail();
	find([1], function(value, index) {
	  eq(index, 0);
	});
  },
  'find should pass in the array as the third argument to the callback': function() {
	fail();
	var testArray = [1];
	find(testArray, function(value, index, array) {
	  eq(array, testArray);
	});
  },
  'find should accept an alternate "this" object to bind to': function() {
	fail();
	var altThis = {alternate: true};
	find([1], function() {
	  eq(altThis, this);
	}, altThis);
  },
  'find should return the first element that callback returns "true" for': function() {
	fail();
	var mappedArray = undefined;
	mappedArray = map([1, 2, 3], function() {});
	eq(Array.isArray(mappedArray), true);
  },
  'find should return undefined if callback never returns true': function() {
	fail();
	var mappedArray = find([1, 2, 3], function(el) {
		return el * 2;
	});
	eq(mappedArray.length, 3);
	eq(mappedArray[0], 2);
	eq(mappedArray[1], 4);
	eq(mappedArray[2], 6);
  },
  'find should run callback on missing elements': function() {
	fail();
	var weirdArray = [, 1];
	var mappedArray = find(weirdArray, function(el) {
		return el * 2;
	});
	eq(mappedArray.length, 2);
	eq(0 in mappedArray, false);
	eq(mappedArray[0], undefined);
	eq(mappedArray[1], 2);
  }
 });

/* other tests

  'find should not visit an appended element unless an earlier element is removed': function() {
	fail();
  },
  'find should visit an appended element after an earlier element is removed': function() {
	fail();
  },
  'find should not re-visit changed elements at positions it has already visited': function() {
	fail();
  },
  'find should not re-visit removed elements at positions it has already visited': function() {
	fail();
  },
  'find should process changed elements it visits, not the original values': function() {
	fail();
  },
  'find should not process removed elements at positions it has yet to visit': function() {
	fail();
*/
