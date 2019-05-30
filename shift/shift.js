// function shift() based on array.prototype.shift()

function shift(array) {
	if ('length' in array === false) {
		array.length = 0;
	}

	if (!Number(array.length)) {
		array.length = 0;
	} else {
		if (!Number.isInteger(array.length)) {
			array.length = Number.parseInt(array.length);
		}
	}

	if (array.length === 0) {
		return undefined;
	}

	if (0 in array === false) {
		if (1 in array === true) {
			array[0] = array[1];
			delete(array[1]);
		}
		array.length = array.length - 1;
		return undefined;
	}

	var result = array[0];
	
	for (var i = 0; i < array.length; i++) {
		array[i] = array[i + 1];
	}
	delete(array[array.length - 1]);
	array.length = array.length - 1;

	return result;
}
