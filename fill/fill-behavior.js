var arr = [1, 2, 3];
undefined
arr.fill('x');
(3) ["x", "x", "x"]
arr.fill('x', 1);
(3) ["x", "x", "x"]
arr.fill('z', 1, 2);
(3) ["x", "z", "x"]
obj = {
	
}
{}
[].fill.call(obj, 'x');
{}
obj
{}__proto__: Object
[].fill.call(obj, 'x', 0);
{}
[].fill.call(obj, 'x', 0, 2);
{}
obj
{}__proto__: Object
obj1 = {
	length: 2,
	0: 1,
	1: 2
}
{0: 1, 1: 2, length: 2}
[].fill.call(obj1, 'x')
{0: "x", 1: "x", length: 2}
obj2 = {
	length: 2
}
{length: 2}
[].fill.call(obj2, 'x')
{0: "x", 1: "x", length: 2}
[].fill.call(obj2, 'x', 1)
{0: "x", 1: "x", length: 2}
[].fill.call(obj2, 'x', 0, 1)
{0: "x", 1: "x", length: 2}
[].fill.call(obj2, 'y', 1)
{0: "x", 1: "y", length: 2}
obj3 = {
	0: 1,
	1: 2
}
{0: 1, 1: 2}
[].fill.call(obj3, 'x')
{0: 1, 1: 2}
[].fill.call(obj3, 'x', 0, 2)
{0: 1, 1: 2}
obj4 = {
	0: 1,
	1: 2,
	length: 4
}
{0: 1, 1: 2, length: 4}
[].fill.call(obj4, 'x')
{0: "x", 1: "x", 2: "x", 3: "x", length: 4}
obj5 = {
	3: 1,
	length: 5
}
{3: 1, length: 5}
[].fill.call(obj5, 'x')
{0: "x", 1: "x", 2: "x", 3: "x", 4: "x", length: 5}
obj6 = {
	length: 'abc',
	0: 1,
}
{0: 1, length: "abc"}
[].fill.call(obj6, 'x')
{0: 1, length: "abc"}
obj7 = {
	0: 1,
	1: 2,
	length: '2'
}
{0: 1, 1: 2, length: "2"}
[].fill.call(obj7, 'x')
{0: "x", 1: "x", length: "2"}
