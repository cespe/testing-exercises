// function join() based on array.prototype.join()

function join(array) {
//	if (array.length === 0) {
//		return '';
//	}
//	if (array.length === 1) {
//		if (array[0] === null) {
//			return '';
//		}
//		if (array[0] === undefined) {
//			return '';
//		} else {
//			return '' + array[0];
//		}
//	} else {
		var result = '';
		var element;

		for (var i = 0; i < array.length; i++) {
			if (array[i] === null || array[i] === undefined) {
				element = '';
			} else {
				element = array[i];
			}
			result = result + element + ',';
		}
		return result.slice(0, -1);
//	}
}
