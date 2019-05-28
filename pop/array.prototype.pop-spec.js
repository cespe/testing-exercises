/*
 pop(array) removes the last element of array and returns it, reducing the length of the array.

 pop() returns undefined if the array is empty.

May be called on objects resembling arrays.
	If object is empty, pop returns undefined and creates a length property set to 0.
	If object cannot be converted to a number, pop returns undefined and sets length to 0.
	Object needs a numerical length property and an indexed element corresponding to length
	in order to return a meaningful result.
		Otherwise, it returns undefined and decrements length if it is an integer.

*/


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
