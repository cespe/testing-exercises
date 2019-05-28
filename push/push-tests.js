// Tests for push() based on array.prototype.push()

tests({
	'push should take an array and return its length': function() {
	var target = [1, 2, 3];
	var result = push(target);
	eq(result, target.length);
	},
	'push should take zero or more argument values and append them to array': function() {
	var target0 = [1, 2, 3];
	push(target0);
	eq(target0.length, 3);
	var target1 = [1, 2, 3];
	push(target1, 4);
	eqstrict(target1[3], 4);
	eq(target1.length, 4);
	var target2 = [1, 2, 3];
	push(target2, 4, 5, 6);
	eqstrict(target2[3], 4);
	eqstrict(target2[4], 5);
	eqstrict(target2[5], 6);
	eq(target2.length, 6);
	var target3 = [1, 2, 3];
	push(target3, undefined);
	eqstrict(target3[3], undefined);
	eq(target3.length, 4);
	var obj = {};
	var target4 = [];
	push(target4, obj);
	eqstrict(target4[0], obj);
	eq(target4.length, 1);
	},
	'If array-resembling object has no length property, push should create it': function() {
	var obj1 = {};
	push(obj1, 'a');
	eq(obj1.length, 1);
	},
	'If length is not an integer, push should convert it to one': function() {
	var obj1 = {
		length: '0'
	}
	push(obj1, 5, 6);
	eqstrict(obj1[0], 5);
	eqstrict(obj1[1], 6);
	eqstrict(obj1.length, 2);
	var obj2 = {
		length: '2.8'
	}
	push(obj2, 6);
	eqstrict(obj2[2], 6);  // parseInt produces a floor value, i.e. 2.8 --> 2
	eq(obj2.length, 3);
	},
	'If push cannot convert length to an integer, it should append to index 0': function() {
	var obj = {
		length: 'abc'
	}
	push(obj, 8);
	eqstrict(obj[0], 8)
	eqstrict(obj.length, 1);
	var obj1 = {
		length: null
	}
	push(obj1, 8);
	eqstrict(obj1[0], 8)
	eqstrict(obj1.length, 1);
	var obj2 = {
		length: NaN
	}
	push(obj2, 8);
	eqstrict(obj2[0], 8)
	eqstrict(obj2.length, 1);
	var obj3 = {
		length: undefined
	}
	push(obj3, 8);
	eqstrict(obj3[0], 8)
	eqstrict(obj3.length, 1);
	var obj4 = {
		length: {}
	}
	push(obj4, 8);
	eqstrict(obj4[0], 8)
	eqstrict(obj4.length, 1);
	}
});
