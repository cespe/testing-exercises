// function splice() based on array.prototype.splice()

function splice(array, start, deleteCount, items) {
	var result = [];

	if (start > array.length) {
		start = array.length;
	}
	if (start < 0) {
		start = array.length + start;
		if (start < 0) {
			start = 0;
		}
	}
	if (deleteCount >= array.length) {
		deleteCount = array.length - 1;
	}
	if (arguments.length < 2) {
		return []
	}
	if (arguments.length === 2) {
		var k = 0;
		for (var i = start; i < array.length; i++) {
			result[k] = array[i];	
			k++;
		}
		array.length = array.length - k;	// after loop, k is the number of removed elements
	}
	if (arguments.length > 2) {
		if (deleteCount > 0) {
			var k = 0;
			for (var i = start; i <= deleteCount + start; i++) {
				result[k] = array[i];
				k++;
			}
			if (start + deleteCount < array.length) {
				var stop = array.length - (start + deleteCount);
				for (var j = start; j <= stop; j++) {
					array[j] = array[j + k];
				}
			}
			array.length = array.length - k;
		}
		if (arguments.length > 3) {
			var itemCount = arguments.length - 3;
			var itemIndex = 3;		// starting index for items to add

			for (var h = start; h <= itemCount; h++) {
				for (var g = array.length; g > start; g--) {
					array[g] = array[g - 1];
				}
				array[h] = arguments[itemIndex];
				itemIndex++;
			}
		}
	}
	return result;
}
