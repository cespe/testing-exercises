/*
arr.shift()

shift() removes the first element from an array and returns it.

The array must then be re-indexed by moving each element down and deleting the final (empty)
element. Then array.length must be decremented.

Returns undefined if the array is empty.

shift() works normally on objects resembling arrays just like pop().

An object resembles an array by having a length property convertible to an integer and
corresponding indexed elements.
*/

// normal behavior for object resembling array:
obj = {
	0: 'one',
	1: 'two',
	2: 'three',
	length: 3
}
{0: "one", 1: "two", 2: "three", length: 3}
[].shift.call(obj)
"one"
obj
{0: "two", 1: "three", length: 2}

// also normal if length can be converted to an integer:
obj7 = {
	0: 'one',
	1: 'two',
	2: 'three',
	length: 3.8
}
{0: "one", 1: "two", 2: "three", length: 3.8}
[].shift.call(obj7)
"one"
obj7
{0: "two", 1: "three", length: 2}

// if there is no element 0, shift returns undefined but shifts elements and decrements length.
// in this case, it actually creates index 0 for the shift left!
obj6 = {
	1: 'two',
	2: 'three',
	length: 2
}
{1: "two", 2: "three", length: 2}
[].shift.call(obj6)
undefined
obj6
{0: "two", 2: "three", length: 1}

// length does not have to be correct for shift to work, it just has to be there:
obj3 = {
	0: 'one',
	1: 'two',
	length: 3
}
{0: "one", 1: "two", length: 3}
[].shift.call(obj3)
"one"
obj3
{0: "two", length: 2}
[].shift.call(obj3)
"two"
obj3
{length: 1}
[].shift.call(obj3)
undefined
obj3
{length: 0}

// If length is too short, trailing elements are orphaned, but it still works:
obj4 = {
	0: 'one',
	1: 'two',
	2: 'three',
	length: 2
}
{0: "one", 1: "two", 2: "three", length: 2}
[].shift.call(obj4)
"one"
obj4
{0: "two", 2: "three", length: 1}
[].shift.call(obj4)
"two"
obj4
{2: "three", length: 0}2: "three"length: 0__proto__: Object
[].shift.call(obj4)
undefined
obj4
{2: "three", length: 0}2: "three"length: 0__proto__: Object

// if there is no length property, shift adds it, sets it to 0 and returns undefined:
obj2 = {
	0: 'one',
	1: 'two',
	2: 'three'
}
{0: "one", 1: "two", 2: "three"}
[].shift.call(obj2)
undefined
obj2
{0: "one", 1: "two", 2: "three", length: 0}

// if length is non-numeric, shift sets it to 0 and returns undefined:
obj5 = {
	0: 'one',
	1: 'two',
	3: 'three',
	length: 'abc'
}
{0: "one", 1: "two", 3: "three", length: "abc"}
[].shift.call(obj5)
undefined
obj5
{0: "one", 1: "two", 3: "three", length: 0}


