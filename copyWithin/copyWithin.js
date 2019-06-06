// function copyWithin based on array.prototype.copyWithin()

function copyWithin(array, target, start, end) {
//	var startIndex = Number.parseInt(start);
//	if (Number.isNaN(startIndex)) {
//		startIndex = 0;
//	}
//	if (startIndex < 0) {
//		startIndex = array.length + startIndex; 	
//	}
//	
//	if (end === undefined) {
//		var end = array.length;
//	} else {
//		end = Number.parseInt(end);
//		if (Number.isNaN(end)) {
//			return array;
//		}
//	}
	//if (end < 0) {
	//	end = array.length + end; 	
	//}

	var elToCopy = array.slice(start, end);
//	for (var i = startIndex; i < end; i++) {
//		slice[i] = array[i];
//	}

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
	
//	var targetLength = array.length - targetIndex;

//	var sliceIndex = 0;

//	for (var k = targetIndex; k <= array.length; k++) {
//		array[k] = slice[sliceIndex];
//		sliceIndex++;
//	}
//
	
	return array;
}
