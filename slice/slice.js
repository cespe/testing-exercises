// function slice() is based on array.prototype.slice()

function slice(array, begin, end) {
	result = [];
	if (arguments.length === 1) {
		var startIndex = 0;
	}
	if (arguments.length < 3) {
		var endIndex = array.length - 1;
	}
	if (Number.isInteger(begin)) {
		if (begin >= 0) {
			startIndex = begin;
		} else {	// begin is negative
			if (array.length + begin >= 0) {
				startIndex = array.length + begin;
			} else { // prevent negative index
				startIndex = 0;
			}
		}
	} else {
		startIndex = 0;
	}

	if (Number.isInteger(end)) {
		if (end >= 0) {
			if (end <= array.length) {
				endIndex = end - 1;
			} else {
				endIndex = array.length - 1;
			}
		} else {
			endIndex = (array.length - 1) + end;
		}
	} else {
		endIndex = array.length -1;
	}

	for (var i = startIndex; i <= endIndex; i++) {
		result.push(array[i]);
	}
	return result;
}
