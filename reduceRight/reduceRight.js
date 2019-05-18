// The function under test is reduceRight, based on array.prototype.reduceRight.

function reduceRight(array, callback) {
	for (i = array.length - 1; i >= 0; i--) {
		callback(array);
	}
};
