// function sort() based on array.prototype.sort

function sort(array, /* optional */ compare) {

	// first remove undefined and empty elements from the sort
	var emptyElements = 0;
	var undefinedElements = 0;

	var originalLength = array.length;  // splice will decrement array.length, messing up the loop
	
	for (var j = originalLength - 1; j >= 0; j--) {
		if (j in array === false) {
			emptyElements++;
			array.splice(j, 1);
		}
		if (array[j] === undefined) {
			undefinedElements++;
			array.splice(j, 1);
		}
	}

	// now sort the "real" elements
	for (var i = 0; i < array.length - 1; i++) {
		for (var k = i + 1; k < array.length; k++) {
			if (arguments.length === 1) {
				if (typeof(array[i]) === 'string') {
					var firstEl = array[i];	
				} else {
					var firstEl = '' + array[i];
				}
				if (typeof(array[k]) === 'string') {
					var secondEl = array[k];	
				} else {
					var secondEl = '' + array[k];
				}
				// normalizing to enable UTF-16 comparisons turns out not to be necessary
				//	firstEl = firstEl.normalize();
				//	secondEl = secondEl.normalize();

				if (firstEl > secondEl) {
					var swap = array[i];
					array[i] = array[k];
					array[k] = swap;
				}
			}
			if (arguments.length === 2) {
				var comparison = compare(array[i], array[k]);
				if (comparison > 0) {
					var swap = array[i];
					array[i] = array[k];
					array[k] = swap;
				}
			}
		}		
	}
	// restore undefined elements to end of array, to be followed by empty elements
	for (var i = 0; i < undefinedElements; i++) {
		array.push(undefined);
	}
	// restore empty elements to the end of the array
	array.length = array.length + emptyElements;

	return array;
}
