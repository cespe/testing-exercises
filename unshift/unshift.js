// function unshift() based on array.prototype.unshift()

function unshift(array, /* first value required, others optional */ values) {
	if ('length' in array === false) {
		array.length = 0;
	} else {
		array.length = Number.parseInt(array.length);
		if (!Number.isInteger(array.length)) {
			array.length = 0;
		}
	}
	
	if (arguments.length > 1) {
		for (var k = arguments.length - 1; k > 0; k--) {
			for (var i = array.length; i > 0; i--) {
				array[i] = array[i - 1];
			}
			array[0] = arguments[k];
			if (!Array.isArray(array)) {
				array.length++;		// must manually increment length in object
			}
		}
	}
	return array.length;
}

