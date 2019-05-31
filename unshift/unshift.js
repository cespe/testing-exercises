// function unshift() based on array.prototype.unshift()

function unshift(array, values) {
	if ('length' in array === false) {
		array.length = 0;
	}
	if (!Number(array.length)) {
		array.length = 0;
	} else {
		if (!Number.isInteger(array.length)) {
			array.length = Number.parseInt(array.length);
		}
	}
	
	if (arguments.length > 1) {
//		array.length = array.length + (arguments.length - 1);
		for (var k = arguments.length - 1; k > 0; k--) {
			for (var i = array.length; i > 0; i--) {
				array[i] = array[i - 1];
			}
			array[0] = arguments[k];
		}
	}
	return array.length;
}

