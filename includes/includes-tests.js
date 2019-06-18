/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

includes() has syntax similar to indexOf():
arr.includes(valueToFind[, fromIndex])

Returns true if an element matches valueToFind.
Returns false if no match is found.
Docs say string comparisons are case-sensitive. Duh.
Docs say include uses sameValueZero algorithm for matching.
	0 matches 0, -0 and +0.
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality
	The table on that page says sameValueZero produces the same result as ===. However, includes returns
true for NaN matches, unlike ===.

Rules for findIndex alternative starting point
Default starting index is 0.
If findIndex is > 0, set startingIndex to findIndex.
	findIndex can be larger than array.length, it just makes the match fail
If findIndex is negative, set startingIndex to array.length + findIndex
	It is ok if |findIndex| > array.length, it will still start matching at index 0
If findIndex is a non-integer, it just makes the starting index 0 (default)
*/

tests({
	'includes should return true if an array element matches valueToFind.': function() {
		result = includes([1, 2, 3], 3);
		eq(result, true);
		result = includes([0], 0);
		eq(result, true);
		result = includes([0], -0);
		eq(result, true);
		result = includes([0], +0);
		eq(result, true);
		var obj = {};
		result = includes([obj], obj);
		eq(result, true);
	},
	'includes should return true if it finds a match for valueToFind = NaN.': function() {
		result = includes([NaN], NaN);
		eq(result, true);
		result = includes([[NaN]], [NaN]);
		eq(result, false);	// different objects
		var nan = [NaN];
		result = includes([nan], nan);
		eq(result, true);
	},	
	'includes should return false if no array element matches valueToFind.': function() {
		result = includes([1, 2, 3], 4);
		eq(result, false);
		result = includes([{}], {});
		eq(result, false);		// different objects
		result = includes([function(){}], function(){});
		eq(result, false);		// different objects
	},
	'If findIndex is not supplied, starting index should be 0.': function() {
		// passes with no code change
		result = includes([1, 2], 1);
		eq(result, true);
	},
	'If findIndex is positive, starting index should be findIndex.': function() {
		result = includes([1, 2, 3, 4], 3, 1);
		eq(result, true);
		result = includes([1, 2, 3, 4], 3, 2);
		eq(result, true);
		result = includes([1, 2, 3, 4], 3, 3);
		eq(result, false);
		result = includes([1, 2, 3, 4], 3, 8);
		eq(result, false);

	},
	'If findIndex is a negative, starting index should be array.length + findIndex.': function() {
		result = includes([1, 2, 3, 4], 3, -2);
		eq(result, true);
		result = includes([1, 2, 3, 4], 3, -1);
		eq(result, false);
		result = includes([1, 2, 3, 4], 1, -10);
		eq(result, true);
	},
	'If findIndex is not an integer, starting index should be 0.': function() {
		// passes with no code change
		result = includes([1, 2, 3], 1, 'z');
		eq(result, true);
		result = includes([1, 2, 3], 1, {});
		eq(result, true);
	},
	'If findIndex is not an integer but is convertible to one, includes should treat it as such.': function() {
		result = includes([4, 3, 2, 1], 3, '2');
		eq(result, false);
		result = includes([4, 3, 2, 1], 3, '2.8');
		eq(result, false);
		result = includes([4, 3, 2, 1], 3, 2.8);
		eq(result, false);
	}
});

