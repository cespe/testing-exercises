// function fill() based on array.prototype.fill()

function fill(array, value, start, end) {
	if (arguments.length < 2) {
		return array;
	} else
		if (arguments.length < 3) {
			var start = 0;
		}
		if (arguments.length < 4) {
			var end = array.length;
		}
		for (var i = start; i < end; i++) {
			array[i] = value;
		}
		return array;
}
