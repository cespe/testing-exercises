// SimpleTest tests for find() function based on array.prototype.find().

tests({

  // "The range of elements processed by filter() is set before the first invocation of callback."
  'filter should run the callback initial array.length times': function() {
	var timesCalled = 0;
	var timesToCall = [1,2,3].length;
	filter([1,2,3], function() {
	  timesCalled++;
	});
	eq(timesCalled, timesToCall);
  },
  'filter should pass in the ith element as the first argument to the callback': function() {
	filter([1], function(value) {
	  eq(value, 1);
	});
  },
  'filter should pass in the ith index as the second argument to the callback': function() {
	filter([1], function(value, index) {
	  eq(index, 0);
	});
  },
  'filter should pass in the array as the third argument to the callback': function() {
	var testArray = [1];
	filter(testArray, function(value, index, array) {
	  eq(array, testArray);
	});
  },
  'filter should accept an alternate "this" object to bind to': function() {
	var altThis = {alternate: true};
	filter([1], function() {
	  eq(altThis, this);
	}, altThis);
  },
  'filter should return a new array': function() {
	var filteredArray = undefined;
	filteredArray = filter([1, 2, 3], function() {});
	eq(Array.isArray(filteredArray), true);
  },
  'filter should return an array with only those elements where callback returns true': function() {
	var filteredArray = filter([1, 2, 3], function(el) {
		return el > 2;
	});
	eq(filteredArray.length, 1);
	eq(filteredArray[0], 3);
  },
  'filter should not visit an appended element unless an earlier element is deleted': function() {
	var testArray = [1, 2, 3];
	var filteredArray = filter(testArray, function(el, i, testArray) {
		if (i === 1) {
			testArray.push(9);
		}
		return el > 2;
	});
	eq(testArray.length, 4);
	eq(filteredArray.length, 1);
	eq(filteredArray[0], 3);
  },
  'filter should visit an appended element after an earlier element is deleted': function() {
	var testArray = [1, 2, 3];
	var filteredArray = filter(testArray, function(el, i, testArray) {
		if (i === 0) {
			testArray.push(9);
			testArray.splice(0, 1);
		}
		return el > 2;
	});
	eq(testArray.length, 3);
	eq(filteredArray.length, 2);
	eq(filteredArray[0], 3);
	eq(filteredArray[1], 9);
  },
  'filter should not re-visit changed elements at positions it has already visited': function() {
	var testArray = [1, 2, 3];
	var filteredArray = filter(testArray, function(el, i, testArray) {
		if (i === 0) {
			testArray.splice(0, 1, 9);
		}
		return el > 2;
	});
	eq(testArray.length, 3);
	eq(testArray[0], 9);
	eq(filteredArray.length, 1);
	eq(filteredArray[0], 3);
  },
  'filter should not re-visit deleted elements at positions it has already visited': function() {
	var testArray = [1, 2, 3];
	var filteredArray = filter(testArray, function(el, i, testArray) {
		if (i === 0) {
			testArray.splice(0, 1);
		}
		return el > 2;
	});
	eq(testArray.length, 2);
	eq(testArray[0], 2);
	eq(filteredArray.length, 1);
	eq(filteredArray[0], 3);
  },
  'filter should process changed elements it visits, not the original values': function() {
	var testArray = [1, 2, 3];
	var filteredArray = filter(testArray, function(el, i, testArray) {
		if (i === 0) {
			testArray.splice(1, 1, 9);
		}
		return el > 2;
	});
	eq(testArray.length, 3);
	eq(testArray[0], 1);
	eq(testArray[1], 9);
	eq(filteredArray.length, 2);
	eq(filteredArray[0], 9);
	eq(filteredArray[1], 3);
  },
  'filter should not process deleted elements at positions it has yet to visit': function() {
	var testArray = [1, 2, 3];
	var filteredArray = filter(testArray, function(el, i, testArray) {
		if (i === 0) {
			testArray.splice(1, 1);
		}
		return el > 2;
	});
	eq(testArray.length, 2);
	eq(testArray[0], 1);
	eq(testArray[1], 3);
	eq(filteredArray.length, 1);
	eq(filteredArray[0], 3);
  }


});

