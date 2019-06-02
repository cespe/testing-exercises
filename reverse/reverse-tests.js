/*
reverse() reverses an array in place: first element becomes the last, last becomes
the first, etc.

Returns the array.

Works on objects resembling arrays like fill(), shift(), etc.
	Returns unmutated array if length is missing or NaN
	Returns reversed if length can be converted to integer
	Keys off of length, adds/removes indexes as necessary
		0: 1, 1: 2, length: 8}
		[].reverse.call(obj)
		{6: 2, 7: 1, length: 8}
	
		{0: 1, 3: 2, length: 8}
		[].reverse.call(obj)
		{4: 2, 7: 1, length: 8}
*/

tests({
	'reverse should take an array or object resembling array and return it': function() {
		fail();
	},
	'reverse should return unmutated object if length is missing': function() {
		fail();
	},
	'reverse should return unmutated object if length evaluates to NaN': function() {
		fail();
	},
	'reverse should reverse elements in place': function() {
		fail();
	},
	'reverse should create missing index properties if necessary': function() {
		fail();
	},
	'reverse should remove index properties when not needed': function() {
		fail();
	}
});
