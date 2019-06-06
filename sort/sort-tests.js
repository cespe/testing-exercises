// based on array.prototype.sort(). See spec notes in array.prototype.sort-spec.js

tests({
	'sort should take an array and return it sorted': function() {
		fail();
	},
	'If no callback is provided, sort should sort elements into UTF-16 order': function() {
		// function as coded leaves this to Javascript string comparison
		fail();
	},
	"If provided, callback should take two elements firstEl and secondEl": function() {
		fail();
	},
	'Callback should return a negative number if firstEl < secondEl'() {
		fail();
	},
	'Callback should return a positive number if firstEl > secondEl'() {
		fail();
	},
	'Callback should return 0 if firstEl == secondEl'() {
		fail();
	},
	'If callback is provided, sort should sort based on callback return values': function() {
		fail();
	}
});
