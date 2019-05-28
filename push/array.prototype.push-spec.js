/*
Appends one or more elements to the end of an array.

arr.push(element1[, ...[, elementN]])

The maximum number of elements a function can take is limited in practice,
so don't make the list too long. MDN says see apply() for details.

To work on "objects resembling arrays," push() relies on a length property.
If the object has no length property, push() will create one.
If the length property can't be converted to a number, push() will use index 0.
	length will then be set to 1, squashing the previous non-number value.

Returns the new length of the array.

Since it mutates the array, it is not suitable for strings, which are immutable,
or for arguments.
*/

// Test cases for array.prototype.push.call()

var obj = {};
undefined
obj.length
undefined
obj = {
	length: 0
}
{length: 0}
[].push.call(obj, 1);
1
obj
{0: 1, length: 1}0: 1length: 1__proto__: Object

obj2 = {
	length: NaN
}
{length: NaN}
[].push.call(obj2, 1);
1
obj2
{0: 1, length: 1}
Number('abc')
NaN

obj3 = {
	length: 'abc'
}
{length: "abc"}
[].push.call(obj3, 5);
1
obj3
{0: 5, length: 1}
obj4 = {}
{}
[].push.call(obj4, 5);
1
obj4
{0: 5, length: 1}
[].push.call(obj4, 6, 7, 8);
4
obj4
{0: 5, 1: 6, 2: 7, 3: 8, length: 4}
Number.parseInt(10.05)
10

obj5 = {
	length: 10.05
}
{length: 10.05}
[].push.call(obj5, 8);
11
obj5
{10: 8, length: 11}10: 8length: 11__proto__: Object

// Use Number and Number.parseInt to convert length
Number('abc')
NaN
Number.parseInt(10.05)
10
Number(Number.parseInt('12.3'))
12
