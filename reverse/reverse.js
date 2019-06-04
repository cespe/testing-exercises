//reverse() based on array.prototype.reverse()

function reverse(array) {
	if (!Array.isArray(array)) {
		if ('length' in array === false) {
			return array;
		} else {
			if (Number.parseInt(array.length) === NaN) {
				return array;
			}
		}
		var length = Number.parseInt(array.length);
		var last = length - 1;
		for (var i = 0; i < length/2; i++) {
			if (i in array) {
				var swap = array[i];
				if (last - i in array) {
					array[i] = array[last - i];
				} else {
					delete array[i];
				}
				array[last - i] = swap;
			} else {
				if (last - i in array) {
					array[i] = array[last - i];
					delete array[last - i];
				}
			}
			}
		return array;
	}
	
	var last = Number.parseInt(array.length) - 1;
	for (var i = 0; i < array.length/2; i++) {
		var swap = array[i];
		array[i] = array[last - i];
		array[last - i] = swap;
		}
	return array;
}
