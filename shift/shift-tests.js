// TDD tests for shift(), based on array.prototype.shift()

tests({
	'shift should return the first element in supplied array': function() {
		result = shift([1, 2]);
		eq(result, 1);
	},
	'shift should remove the first element and move all other elements down one index': function() {
		var target = [1, 2, 3];
		result = shift(target);
		eq(result, 1);
		eq(target[0], 2);
		eq(target[1], 3);
	},
	'shift should delete the last element and decrement array.length': function() {
		var target = [1, 2, 3];
		result = shift(target);
		eqstrict(target[2], undefined);
		eq(target.length, 2);
	},
	'shift should return undefined if array is empty': function() {
		result = shift([]);
		eqstrict(result, undefined);
	},
	'If object has no length property, shift should add it, set it to 0, and return undefined': function() {
		target = {};
		result = shift(target);
		eq(target.length, 0);
		eqstrict(result, undefined);
	},
	'If length is non-numeric, shift should set it to 0 and return undefined': function() {
		target = {
			length: 'abc',
			0: 'skipped'
		}
		result = shift(target);
		eq(target.length, 0);
		eqstrict(result, undefined);
	},
	'If length is convertible to an integer, shift should convert it and decrement by 1': function() {
		target = {
			length: 2.8
		}
		shift(target);
		eq(target.length, 1);
	},
	'If object length property is an integer, shift should decrement it': function() {
		fail();
	},
	'If object does not have an element at index 0, shift should return undefined': function() {
		fail();
		target = {};
		result = shift(target);
		eqstrict(result, undefined);
		target2 = {
			1: 'two',
			length: 1
		}
		result = shift(target2);
		eqstrict(result, undefined);
//		eq(target2[0], 'two');
//		eq(target2[1], undefined);
//		eq(target.length, 0);
	},
	'If object has element at index 1 but not at 0, shift should create index 0 and set it to index 1': function() {
		fail();
	},
	'If object has no element at index 0 or 1, shift should ignore any other indexed elements': function() {
		fail();
	}
});
