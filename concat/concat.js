// The function under TDD is concat(), based on array.prototype.concat()

function concat(value1 /* optional , value2, valueN */) {
	var result = [];
	for (i = 0; i < arguments.length; i++) {
		if (Array.isArray(arguments[i])) {
			for (k = 0; k < arguments[i].length; k++) {
				result.push(arguments[i][k]);
			}
		} else {
			result.push(arguments[i]);
		}
	}
	return result;
}
