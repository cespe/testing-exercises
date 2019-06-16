// function includes() based on array.prototype.includes()

function includes(array, valueToFind /* optional */ , findIndex) {
	var startingIndex = 0;
	if (Number.isInteger(findIndex)) {
		if (findIndex > 0) {
			startingIndex = findIndex;
		} else {
			startingIndex = array.length + findIndex;
		}
	}

	for (i = startingIndex; i < array.length; i++) {
		if (valueToFind === array[i]) {
			return true;
		}
		if (Number.isNaN(valueToFind)) {
			if (Number.isNaN(array[i])) {
				return true;
			}
		}
	}

	return false;	
}

