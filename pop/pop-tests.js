
tests({
	'pop should remove the last element in array and return it': function() {
		var target = [1, 2, 3];
		var result = pop(target);
		eqstrict(result, 3);
		eqstrict(target[0], 1);
		eqstrict(target[1], 2);
		eqstrict(target[2], undefined);
	},
	'pop should decrement array.length after removing and returning element': function() {
		target = [1, 2, 3];
		pop(target);
		eq(target.length, 2);
		target2 = [1,,];
		pop(target2);
		eq(target2.length, 1);
		var target3 = [1,,2];
		var result3 = pop(target3);
		eq(target3.length, 2);
		eqstrict(result3, 2);
		eqstrict(target3[0], 1);
		eqstrict(target3[1], undefined);
	},
	'pop should return undefined if array is empty': function() {
		target = [];
		result = pop(target);
		eqstrict(result, undefined);
		eq(target.length, 0);
	},
	'If object does not have an indexed element at length, pop should return undefined': function() {
		target0 = {};
		result0 = pop(target0);
		eqstrict(result0, undefined);
		target1 = {
			length: 'abc'
		};
		result1 = pop(target1);
		eqstrict(result1, undefined);
		target2 = {};
		[].push.call(target2, 1);
		target2.length = 2;
		result2 = pop(target2);
		eqstrict(result2, undefined);
	},
	'if object does not have length property, pop should create one and set it to 0': function() {
		target = {};
		result = pop(target);
		eqstrict(result, undefined);
		eq(target.length, 0);
	},
	'If length is not convertible to an integer, pop should set it to 0': function() {
		target = {
			length: 'abc'
		}
		result = pop(target);
		eq(target.length, 0);
		eqstrict(result, undefined);
	},
	'If length is convertible to an integer, pop should convert it and decrement by 1': function() {
		target = {};
		[].push.call(target, 1, 2);
		target.length = 2.8;
		result = pop(target);
		eqstrict(result, 2);
		eq(target.length, 1);
	}
});
