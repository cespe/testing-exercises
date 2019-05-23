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
	'includes should return true if an array element matches valueToFind': function() {
		result = includes([1, 2, 3], 3);
		eq(result, true);
		result2 = includes([0], 0);
		eq(result2, true);
		result3 = includes([0], -0);
		eq(result3, true);
		result4 = includes([0], +0);
		eq(result4, true);
		var obj = {};
		result5 = includes([obj], obj);
		eq(result5, true);
	},
	'includes should return true if it finds a match for valueToFind = NaN': function() {
		result = includes([NaN], NaN);
		eq(result, true);
		result2 = includes([[NaN]], [NaN]);
		eq(result2, false);	// different objects
		var nan = [NaN];
		result3 = includes([nan], nan);
		eq(result3, true);
	},	
	'includes should return false if no array element matches valueToFind': function() {
		result = includes([1, 2, 3], 4);
		eq(result, false);
		result2 = includes([{}], {});
		eq(result2, false);		// different objects
		result3 = includes([function(){}], function(){});
		eq(result3, false);		// different objects
	},
	'If findIndex is not supplied, starting index should be 0': function() {
		// passes with no code change
		result = includes([1, 2], 1);
		eq(result, true);
	},
	'If findIndex is a positive integer, starting index should be findIndex': function() {
		result = includes([1, 2, 3, 4], 3, 1);
		eq(result, true);
		result2 = includes([1, 2, 3, 4], 3, 2);
		eq(result, true);
		result3 = includes([1, 2, 3, 4], 3, 3);
		eq(result3, false);
		result4 = includes([1, 2, 3, 4], 3, 8);
		eq(result4, false);

	},
	'If findIndex is a negative integer, starting index should be array.length + findIndex': function() {
		result = includes([1, 2, 3, 4], 3, -2);
		eq(result, true);
		result2 = includes([1, 2, 3, 4], 3, -1);
		eq(result2, false);
		result3 = includes([1, 2, 3, 4], 1, -10);
		eq(result3, true);
	},
	'If findIndex is not an integer, starting index should be 0': function() {
		// passes with no code change
		result = includes([1, 2, 3], 1, 'z');
		eq(result, true);
		result2 = includes([1, 2, 3], 1, {});
		eq(result, true);
	}
});

