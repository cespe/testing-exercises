// function copyWithin based on array.prototype.copyWithin()

function copyWithin(array, target) {
	var slice = [];
	for (var i = 0; i < array.length; i++) {
		slice[i] = array[i];
	}
	var startIndex = 0;
	var targetIndex = target;
	if (target < 0) {
		targetIndex = array.length + target;
		if (targetIndex < 0) {
			return array;
		}
	}

	for (var k = targetIndex; k < array.length; k++) {
		array[k] = slice[startIndex];
		startIndex++;
	}
	return array;
}
