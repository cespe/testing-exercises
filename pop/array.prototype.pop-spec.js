/*
 pop(array) removes the last element of array and returns it, reducing the length of the array.

 pop() returns undefined if the array is empty.

Try the delete operator and manually decrementing array.length.

May be called on objects resembling arrays.
*/

// If object is "array-like" then pop should work normally
// "Array-like" means having an integer length property and corresponding indexed elements
obj = {}
{}
[].push.call(obj, 1, 2, 3)
3
obj
{0: 1, 1: 2, 2: 3, length: 3}
[].pop.call(obj)
3
obj
{0: 1, 1: 2, length: 2}

// Otherwise, pop always returns undefined and ...
// If there is no length, pop creates it and sets it to 0
// If length is non-numeric, pop sets it to 0
// If length is an integer but with no corresponding element, pop decrements length

obj2
{0: 1, length: 1}
obj2.length = 'abc'
"abc"
obj2
{0: 1, length: "abc"}
[].pop.call(obj2)
undefined
obj2
{0: 1, length: 0}
obj4 = {
}
{}
[].pop.call(obj4)
undefined
obj4
{length: 0}length: 0__proto__: Object
obj5 = {
	length: 'abc'
}

{length: "abc"}
obj5
{length: "abc"}
[].pop.call(obj5)
undefined
obj5
{length: 0}length: 0__proto__: Object
[].push.call(obj5, 5)
1
obj5
{0: 5, length: 1}
[].pop.call(obj5)
5
obj5
{length: 0}length: 0__proto__: Object
obj6 = {}
{}
[].push.call(obj6, 1, 2, 3)
3
obj6
{0: 1, 1: 2, 2: 3, length: 3}
obj6.length = 8
8
obj6
{0: 1, 1: 2, 2: 3, length: 8}
[].pop.call(obj6)
undefined
obj6
{0: 1, 1: 2, 2: 3, length: 7}
obj6.length = 'abc'
"abc"
obj6
{0: 1, 1: 2, 2: 3, length: "abc"}
[].pop.call(obj6)
undefined
obj6
{0: 1, 1: 2, 2: 3, length: 0}
[].pop.call(obj6)
undefined
obj6
{0: 1, 1: 2, 2: 3, length: 0}
