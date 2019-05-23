// function includes() based on array.prototype.includes()

function includes(array, valueToFind) {
	for (i = 0; i < array.length; i++) {
		if (valueToFind === array[i]) {
			return true;
		}
	}
	return false;	
}

