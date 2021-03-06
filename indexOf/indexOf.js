// The function under test is indexOf(), based on array.prototype.indexOf()

function indexOf(array, searchElement /* optional */, fromIndex) {
	var startingIndex = 0;
	fromIndex = Number.parseInt(fromIndex);
	if (Number.isInteger(fromIndex)) {
		if (fromIndex >= array.length) {
			return -1;
		}
		if (fromIndex < 0) {
			startingIndex = array.length + fromIndex;
		} else {
			startingIndex = fromIndex;
		}
	}
	for (i = startingIndex; i < array.length; i++) {
		if (array[i] === searchElement) {
			return i;
		}
	}
	return -1;
}
