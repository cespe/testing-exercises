// function join() based on array.prototype.join()

function join(array, separator) {
	if (separator === undefined) {
		delimiter = ',';
	} else {
		delimiter = '' + separator;
	}

	var result = '';
	var element;

	for (var i = 0; i < array.length; i++) {
		if (array[i] === null || array[i] === undefined) {
			element = '';
		} else {
			element = array[i];
		}
		result = result + element + delimiter;
	}

	if (delimiter.length === 0) {
		return result;
	} else {
		return result.slice(0, -delimiter.length);
	}
}
