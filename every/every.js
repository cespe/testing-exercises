// Function every(), based on array.prototype.every()

function every(array, callback, /* optional */ altThis) {
	var initialLength = array.length;
	var boundCallback = callback.bind(altThis);
	for (var i = 0; i < initialLength; i++) {
		if (i in array) {
			test = boundCallback(array[i], i, array);
			if (test === false) {
				return false;
			}
		}
	}
	return true;
}

