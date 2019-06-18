
tests({
	'pop should remove the last element in array and return it.': function() {
		var target = [1, 2, 3];
		var result = pop(target);
		eq(result, 3);
		eq(target[0], 1);
		eq(target[1], 2);
		eq(target[2], undefined);
	},
	'pop should decrement array.length after removing and returning element.': function() {
		target = [1, 2, 3];
		pop(target);
		eq(target.length, 2);
		target = [1,,];
		pop(target);
		eq(target.length, 1);
		var target = [1,,2];
		var result = pop(target);
		eq(target.length, 2);
		eq(result, 2);
		eq(target[0], 1);
		eq(target[1], undefined);
	},
	'pop should return undefined if array is empty.': function() {
		target = [];
		result = pop(target);
		eq(result, undefined);
		eq(target.length, 0);
	},
	'If given an object with no indexed element at length - 1, pop should return undefined.': function() {
		target = {};
		result = pop(target);
		eq(result, undefined);
		target = {
			length: 'abc'
		};
		result = pop(target);
		eq(result, undefined);
		target = {};
		[].push.call(target, 1);
		target.length = 2;
		result = pop(target);
		eq(result, undefined);
	},
	'if given an object with no length property, pop should create one and set it to 0.': function() {
		target = {};
		result = pop(target);
		eq(result, undefined);
		eq(target.length, 0);
	},
	"If given object's length is not convertible to an integer, pop should set it to 0": function() {
		target = {
			length: 'abc'
		}
		result = pop(target);
		eq(target.length, 0);
		eq(result, undefined);
	},
	"If given object's length is convertible to an integer, pop should convert it and decrement by 1": function() {
		target = {};
		[].push.call(target, 1, 2);
		target.length = 2.8;
		result = pop(target);
		eq(result, 2);
		eq(target.length, 1);
	}
});
