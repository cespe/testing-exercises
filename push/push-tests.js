// Tests for push() based on array.prototype.push()
// See array.prototype.push-spec.js file for notes and console log tests

tests({
	'push should take an array and return its length.': function() {
	var target = [1, 2, 3];
	var result = push(target);
	eq(result, target.length);
	},
	'push should take zero or more argument values and append them to array.': function() {
	var target = [1, 2, 3];
	push(target);
	eq(target.length, 3);
	var target = [1, 2, 3];
	push(target, 4);
	eq(target[3], 4);
	eq(target.length, 4);
	var target = [1, 2, 3];
	push(target, 4, 5, 6);
	eq(target[3], 4);
	eq(target[4], 5);
	eq(target[5], 6);
	eq(target.length, 6);
	var target = [1, 2, 3];
	push(target, undefined);
	eq(target[3], undefined);
	eq(target.length, 4);
	var obj = {};
	var target = [];
	push(target, obj);
	eq(target[0], obj);
	eq(target.length, 1);
	},
	'If array-resembling object has no length property, push should create it.': function() {
	var obj = {};
	push(obj, 'a');
	eq(obj.length, 1);
	},
	'If length is not an integer, push should convert it to one.': function() {
	var obj = {
		length: '0'
	}
	push(obj, 5, 6);
	eq(obj[0], 5);
	eq(obj[1], 6);
	eq(obj.length, 2);
	var obj = {
		length: '2.8'
	}
	push(obj, 6);
	eq(obj[2], 6);  // parseInt produces a floor value, i.e. 2.8 --> 2
	eq(obj.length, 3);
	},
	'If push cannot convert length to an integer, it should append to index 0.': function() {
	var obj = {
		length: 'abc'
	}
	push(obj, 8);
	eq(obj[0], 8)
	eq(obj.length, 1);
	var obj = {
		length: null
	}
	push(obj, 8);
	eq(obj[0], 8)
	eq(obj.length, 1);
	var obj = {
		length: NaN
	}
	push(obj, 8);
	eq(obj[0], 8)
	eq(obj.length, 1);
	var obj = {
		length: undefined
	}
	push(obj, 8);
	eq(obj[0], 8)
	eq(obj.length, 1);
	var obj = {
		length: {}
	}
	push(obj, 8);
	eq(obj[0], 8)
	eq(obj.length, 1);
	}
});
