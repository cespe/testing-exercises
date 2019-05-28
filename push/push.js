// testing exercises: push() based on array.prototype.push()

function push(array, values) {
	for (var i = 1; i < arguments.length; i++) {
		array[array.length] = arguments[i];
	}
	return array.length;
}
