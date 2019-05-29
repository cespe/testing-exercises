// function pop() based on array.prototype.pop()

function pop(array) {
	if (!array.length) {
		array.length = 0;
	}
	if (!Number(array.length)) {
		array.length = 0;
	} else {
		array.length = Number.parseInt(array.length);
	}
	if (array.length === 0) {
		return undefined;
	}
	if (!array[array.length] - 1) {
		return undefined;
	}
	var result = array[array.length - 1];
	delete(array[array.length - 1]);
	array.length--;
	return result;
}

