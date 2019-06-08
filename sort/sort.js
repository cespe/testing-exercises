// function sort() based on array.prototype.sort

function sort(array, /* optional */ compare) {
	for (var i = 0; i < array.length - 1; i++) {
		for (var k = i + 1; k < array.length; k++) {
			if (arguments.length === 2) {
				var comparison = compare(array[i], array[k]);
			}		
			if (typeof(array[i]) === 'string') {
				var firstEl = array[i];	
			}
			if (typeof(array[i]) === 'number') {
				var firstEl = array[i].toString();
			}
			if (typeof(array[k]) === 'string') {
				var secondEl = array[k];	
			}
			if (typeof(array[k]) === 'number') {
				var secondEl = array[k].toString();
			}


			if (firstEl > secondEl) {
				var swap = array[i];
				array[i] = array[k];
				array[k] = swap;
			}
		}
	}
	return array;
}
