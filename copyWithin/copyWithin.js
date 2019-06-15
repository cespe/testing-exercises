// function copyWithin based on array.prototype.copyWithin()

function copyWithin(array, target /* optional */, start, end) {

	var elToCopy = array.slice(start, end);

	var targetIndex = target;

	if (target < 0) {
		var targetIndex = array.length + target;
		if (targetIndex < 0) {
			return array;
		}
	}

	var targetLength = array.length - targetIndex;
	if (elToCopy.length > targetLength) {
		elToCopy = elToCopy.slice(0, targetLength);
	}

	for (var i = 0; i < elToCopy.length; i++) {
		array[targetIndex] = elToCopy[i];
		targetIndex++
	}
	
	return array;
}
