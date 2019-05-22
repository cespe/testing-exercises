// The function under test is indexOf(), based on array.prototype.indexOf()

function indexOf(array, searchElement) {
	var result = -1;
	for (i = 0; i < array.length; i++) {
		if (array[i] === searchElement) {
			return i;
		}
	return result
	}
}
