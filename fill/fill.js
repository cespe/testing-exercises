// function fill() based on array.prototype.fill()

function fill(array, value, start, end) {
	if (arguments.length === 1) {
		return array;
	}

	if (start === undefined) {
		startIndex = 0;
	} else {
		if (start < 0) {
			startIndex = array.length + start;
		} else {
			startIndex = start;
		}
	}

	if (end === undefined) {
		endIndex = array.length;
	} else {
		if (end < 0) {
			endIndex = array.length + end;
		} else {
			endIndex = end;
		}
	}

	for (var i = startIndex; i < endIndex; i++) {
		array[i] = value;
	}
	return array;
}
