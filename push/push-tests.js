/*
Appends one or more elements to the end of an array.

arr.push(element1[, ...[, elementN]])

The maximum number of elements a function can take is limited in practice,
so don't make the list too long. MDN says see apply() for details.

To work on "objects resembling arrays," push() relies on a length property.
If the object has no length property, push() will create one.
If the length property can't be converted to a number, push() will use index 0.

Returns the new length of the array.

Since it mutates the array, it is not suitable for strings, which are immutable.
*/
