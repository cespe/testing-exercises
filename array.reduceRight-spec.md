
No initialValue supplied, so initialValue is 'e' and loop starts at 'd'

testArray = ['a', 'b', 'c', 'd', 'e'];
numberOfTimesCalled = 0;

testArray.reduceRight(function(a, b) {
	numberOfTimesCalled++;
	return a + b;
});
// returns "edcba"
// numberOfTimesCalled is 4

Empty values in a sparse array are skipped

sparseArray = ['a',,'b','c']; // length is 4

sparseArray.reduceRight(function(a, b) {
	numberOfTimesCalled++;
	return a + b;
});
// returns "cba"
// numberOfTimesCalled is 2

What happens if the array is modified is hard to understand

testArray.reduceRight(function(accumulator, currentValue, i) {
	if (i === 2) {
		testArray.push('f');
	}
	numberOfTimesCalled++
	return accumulator + currentValue;
});
// returns "edcba"
// numberOfTimesCalled is 5
// testArray is (6) ["a", "b", "c", "d", "e", "f"]
// the pushed element 'f' is not re-visited, but the loop runs one more time

Behavior with splice() is just plain weird. When a new element is added, it shifts index i to the left so that the next element is skipped.

testArray = ['a', 'b', 'c', 'd', 'e'];
(5) ["a", "b", "c", "d", "e"]
testArray.reduceRight(function(accumulator, currentValue, i) {
	if (i === 2) {
		testArray.splice(0,0,'f');
	}
	numberOfTimesCalled++
	return accumulator + currentValue;
});
// returns "edcaf"
// numberOfTimesCalled is 4
// testArray is (6) ["f", "a", "b", "c", "d", "e"]
// 'b' is skipped at original index 1 because it becomes index 2 after the splice

