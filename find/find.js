// The function under test is find, based on array.prototype.find.
// See array.find-spec.md for specs and test cases.

function find(array, callback, /* optional */ altThis) {
	var initialLength = array.length;
	var boundCallback = callback.bind(altThis);
	for (var i = 0; i < initialLength; i++) {
		var test = boundCallback(array[i], i, array);
		if (test) {
			return array[i];
		} // no need for else since default is to return undefined
	}
}

