// function slice() is based on array.prototype.slice()

function slice(array, begin) {
	result = [];
	if (arguments.length === 1) {
		var startIndex = 0;
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
	for (var i = startIndex; i < array.length; i++) {
		result.push(array[i]);
	}
	return result;
}
