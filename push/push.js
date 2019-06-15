// testing exercises: push() based on array.prototype.push()

function push(array, /* first value required, others optional */ values) {
	if (!Array.isArray(array)) {
		if (!array.length) {
			array.length = 0;
		}
		if (!Number(array.length)) {
			array.length = 0;
		}
		if (!Number.isInteger(array.length)) {
			array.length = Number.parseInt(array.length);
		}
	
		for (var i = 1; i < arguments.length; i++) {
			array[array.length] = arguments[i];
			array.length++
		}
	} else {
		for (var i = 1; i < arguments.length; i++) {
			array[array.length] = arguments[i];
		}
	}

	return array.length;
}
