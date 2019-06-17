// See array.reduceRight-spec.md for notes on behavior and console test cases.
// arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])

tests({
	'if initialValue, reduceRight should run callback array.length times': function() {
		var numberOfTimesCalled = 0;
		reduceRight([1, 2, 3], function() {
			numberOfTimesCalled++
		}, 0);	
		eq(numberOfTimesCalled, 3);
	},
	'if initialValue, reduceRight should set accumulator to initialValue before first call to callback': function() {
		var testResult = [];
		reduceRight([1, 2, 3], function(accumulator) {
			testResult.push(accumulator);
		}, 8);
		eq(testResult[0], 8);
	},
	'if initialValue, reduceRight should set currentValue to last element': function() {
		var testResult = [];
		reduceRight([1, 2, 3], function(accumulator, currentValue) {
			testResult.push(currentValue);
		}, 4);
		eq(testResult[0], 3);
	},
	'if initialValue, reduceRight should run the callback starting at last element': function() {
		var testResult = [];
		reduceRight(['a', 'b', 'c'], function(accumulator, currentValue, index) {
			testResult.push(index);
		}, 4);
		eq(testResult[0], 2);
	},
	'if no initialValue, reduceRight should run the callback starting at second-to-last element': function() {
		var testResult = [];
		reduceRight(['a', 'b', 'c'], function(accumulator, currentValue, index) {
			testResult.push(index);
		});
		eq(testResult[0], 1);
	},
	'if no initialValue, reduceRight should run callback array.length - 1 times': function() {
		var numberOfTimesCalled = 0
		reduceRight([1, 2, 3], function() {
			numberOfTimesCalled++
		});
		eq(numberOfTimesCalled, 2);
	},
	'if	no initialValue, reduceRight should set accumulator to last element before first call to callback': function() {
		var testResult = [];
		reduceRight([1, 2, 3], function(accumulator) {
			testResult.push(accumulator);
		});
		eq(testResult[0], 3);
	},
	'if no initialValue, reduceRight should set currentValue to second-to-last element of array': function() {
		var testResult = [];
		reduceRight([1, 2, 3], function(accumulator, currentValue) {
			testResult.push(currentValue);
		});
		eq(testResult[0], 2);
	},
	// arrays with holes are also empty, so test for no indexes in the array
	'if initialValue and array is empty, reduceRight should return initialValue without calling callback': function() {
		var numberOfTimesCalled = 0;
		var arrayWithHoles = [,,,];
		var testResult1 = reduceRight(arrayWithHoles, function() {
			numberOfTimesCalled++;
		}, 8);
		eq(testResult1, 8);
		eq(numberOfTimesCalled, 0)
	},
	'if no initialValue and array is empty, reduceRight should throw a TypeError': function() {
		try {
			reduceRight([], function() {});
		} catch (e) {
			eq(e.name, "TypeError");
		}
	},
	'if no initialValue and array.length = 1, reduceRight should return the single element': function() {
		var numberOfTimesCalled = 0
		testResult = reduceRight([,4], function() {
			numberOfTimesCalled++;
		});
		eq(testResult, 4);
		eq(numberOfTimesCalled, 0);
	},
	'reduceRight should return the final value of accumulator': function() {
		testResult1 = reduceRight([1, 2, 3], function(a, b) {
			return a + b;
		});
		eq(testResult1, 6);
		testResult2 = reduceRight([1, 2, 3], function(a, b) {
			return a + b;
		}, 8);
		eq(testResult2, 14);
	},
	'If initialValue, reduceRight should not run callback on holes in array': function() {
		testResult1 = reduceRight([1,, 2, 3], function(a, b) {
			return a + b;
		}, 8);
		eq(testResult1, 14);
	},
	'If no initialValue, reduceRight should still not run callback on holes in array': function() {
		testResult1 = reduceRight([,1,, 2, 3], function(a, b) {
			return a + b;
		});
		eq(testResult1, 6);
	},
	"reduceRight should pass in array as the callback's fourth argument": function() {
		var testArray = [1, 2];
		reduceRight(testArray, function(a, b, i, array) {
			eq(array, testArray);
		});
	},
	"reduceRight should loop original array.length times even if callback pushes new values": function() {
		var testArray = [1, 2, 3, 4, 5];
		testResult = reduceRight(testArray, function(a, b, i, array) {
			if (i === 1) {
				array.push(6);
			}
			return a + b;
		});
		eq(testResult, 15);
	}

});

/*  Other tests
	'reduceRight should take a "reducer" callback as its second parameter': function() {
	fail();
	},
	'reduceRight should take a starting result value as its (optional) third parameter': function() {
	fail();
	},
	"reduceRight should pass in a 'resultSoFar' accumulator as the callback's first argument": function() {
	fail();
	},
	"reduceRight should pass in the ith element of array as the callback's second argument": function() {
	fail();
	},
	"reduceRight should pass in the ith index of array as the callback's third argument": function() {
	fail();
	},
*/
