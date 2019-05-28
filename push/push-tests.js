/*
Appends one or more elements to the end of an array.

arr.push(element1[, ...[, elementN]])

The maximum number of elements a function can take is limited in practice,
so don't make the list too long. MDN says see apply() for details.

To work on "objects resembling arrays," push() relies on a length property.
If the object has no length property, push() will create one.
If the length property can't be converted to a number, push() will use index 0.

Returns the new length of the array.

Since it mutates the array, it is not suitable for strings, which are immutable,
or for arguments.
*/

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
	'': function() {
	fail();
	},
	'': function() {
	fail();
	},
	'': function() {
	fail();
	},
	'': function() {
	fail();
	},
	'': function() {
	fail();
	},
	'': function() {
	fail();
	},
});
