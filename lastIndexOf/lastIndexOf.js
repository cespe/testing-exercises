// function under test is lastIndexOf(), based on array.prototype.lastIndexOf()

function lastIndexOf(array, searchElement /* optional */, fromIndex) {
	var startingIndex = array.length - 1;

	if (arguments.length > 2) {	// fromIndex supplied
		fromIndex = Number.parseInt(fromIndex);
		if (Number.isInteger(fromIndex)) {
			if(fromIndex < 0) {
				if (Math.abs(fromIndex) > array.length) {
					return -1;
				} else {
					startingIndex = startingIndex + fromIndex;
				}
			} else {	// fromIndex is >= 0)
				if (fromIndex < array.length) {
					startingIndex = fromIndex;
				}
			}
		} else {	// fromIndex not an integer or convertible to one
			return -1;
		}
	}

	for (i = startingIndex; i >= 0; i--) {
		if (array[i] === searchElement) {
			return i;
		} else {
			return -1;
		}
	}
}
