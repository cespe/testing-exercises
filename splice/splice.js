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
	if (deleteCount + start > array.length) {
		deleteCount = array.length - start;
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
			for (var i = start; i < deleteCount + start; i++) {
				result[k] = array[i];
				k++;
			}
			if (start + deleteCount < array.length) {
				// shift elements left to replace elements targeted for deletion
				for (var j = start; j <= start + deleteCount; j++) {
					array[j] = array[j + k];
				}
			}
			array.length = array.length - k;
		}

		if (arguments.length > 3) {
			var itemCount = arguments.length - 3;	// number of items to insert
			var itemIndex = 3;						// starting index for items to insert

			// shift elements right to make room for insertions
			var shiftIndex = array.length - 1;
			var newEndOfArray = array.length - 1 + itemCount;
			for (var i = newEndOfArray; i > start; i--) {
				array[i] = array[shiftIndex];
				shiftIndex--;
			}
			
			// insert itemCount items beginning at start
			for (var i = start; i < start + itemCount; i++) {
				array[i] = arguments[itemIndex];
				itemIndex++;
			}
		}
	}
	return result;
}
