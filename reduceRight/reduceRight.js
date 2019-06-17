// Function reduceRight, based on array.prototype.reduceRight.

function reduceRight(array, callback, initialValue) {
//	var originalLength = array.length;
	var sparseArray = Object.keys(array);
	var startingIndex = array.length - 1;
	if (arguments.length > 2) {
			if (sparseArray.length === 0) {
			return initialValue;
		}
		var accumulator = initialValue;
	} else {
		if (sparseArray.length === 0) {
			throw new TypeError("reduceRight of empty array with no initial value");
		}
		if (sparseArray.length === 1) {
			onlyIndex = sparseArray[0];
			return array[onlyIndex];
		}
		// Skip holes at beginning of array
		while (startingIndex in array === false) {
			startingIndex--
		}
	
		var accumulator = array[startingIndex];
		startingIndex--;	// start loop at second index position

		}
	var currentValue = array[startingIndex];
	for (i = startingIndex; i >= 0; i--) {
		if (i in array) {
			accumulator = callback(accumulator, array[i], i, array);
		}
	}
	return accumulator;
}
