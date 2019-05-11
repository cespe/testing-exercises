// The function under test is findIndex, based on array.prototype.findIndex.

function findIndex(array, callback, /* optional */ altThis) {
	var initialLength = array.length;
	var boundCallback = callback.bind(altThis);
	for (var i = 0; i < initialLength; i++) {
			result = boundCallback(array[i], i, array);
			if (result) {
				return i;
			}
	}
	return -1;
}
