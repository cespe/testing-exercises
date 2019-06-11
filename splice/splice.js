// function splice() based on array.prototype.splice()

function splice(array, start) {
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
	return result;
}
