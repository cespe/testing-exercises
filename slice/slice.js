// function slice() is based on array.prototype.slice()

function slice(array) {
	result = [];
	for (var i = 0; i < array.length; i++) {
		result.push(array[i]);
	}
	return result;
}
