// function copyWithin based on array.prototype.copyWithin()

function copyWithin(array, target) {
	var slice = [];
	for (var i = 0; i < array.length; i++) {
		slice[i] = array[i];
	}
	var startIndex = 0;
	for (var k = target; k < array.length; k++) {
		array[k] = slice[startIndex];
		startIndex++;
	}
	return array;
}
