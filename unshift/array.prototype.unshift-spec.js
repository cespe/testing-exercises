// objects resembling arrays behave badly without "a length reflecting the last
// in a series of consecutive, zero-based numerical properties."

obj5 = {
	3: 'four',
}
{3: "four"}
[].unshift.call(obj5, 2);
1
obj5
{0: 2, 3: "four", length: 1}

// this one is really weird -- why'd it delete index 2?
obj6 = {
	2: 'three',
	3: 'four',
	length: 2
}
{2: "three", 3: "four", length: 2}
[].unshift.call(obj6, 2);
3
obj6
{0: 2, 3: "four", length: 3}

// also weird
jb2 = {
	0: 'one',
	2: 'three',
	length: 2
}
{0: "one", 2: "three", length: 2}
[].unshift.call(obj2, 'prepended');
2
obj2
{0: "prepended", 1: 1, length: 2}

// normal
obj = {
	0: 'one',
	1: 'two',
	2: 'three',
	length: 3
}
{0: "one", 1: "two", 2: "three", length: 3}
[].unshift.call(obj, 'prepended');
4
obj
{0: "prepended", 1: "one", 2: "two", 3: "three", length: 4}


