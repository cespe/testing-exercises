## Spec for array.prototype.find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

>The **find()** method returns the **value** of the **first element** in the array that satisfies the provided testing function. Otherwise `undefined` is returned.

Syntax is the same as forEach except find() returns either the found value or `undefined`. Like filter, find's callback must be a testing function that returns true or false.

>var elementFound = arr.filter(callback(element[, index[, array]])[, thisArg])

Like filter(), find() is called initial array.length times. If the callback makes the array longer or shorter, find() still runs the same number of times. This means that an element pushed onto the array will not be visited by find() unless an earlier element is removed with splice().

The MDN page has a good set of edge-case examples on how find() works with sparse arrays and with deleting elements. It does not have any examples of splicing an element out, however.

The only real point to make is that find() and filter() run original array.length times. MDN should point out the behavior with splice. Unlike delete, splice does remove an element and so a pushed element would be visited by find.

```javascript
// visit all elements of sparse array, including the holes
var sparseArray = [0, 1, , , , 5, 6];

sparseArray.find(function(value, index) {
  console.log('visited index ' + index + ' with value ' + value);
});
```

```javascript
// deleted items are merely set to undefined, not removed, so they are still visited
var sparseArray = [0, 1, , , , 5, 6];

sparseArray.find(function(value, index) {
  if (index === 0) {
    console.log('deleted element ' + sparseArray[5] + ' with delete')
    delete sparseArray[5];
  }
  console.log('visited index ' + index + ' with value ' + value);
});
```

```javascript
// items removed with splice are not visited
var testArray = [1, 2, 3, 4, 5];

testArray.find(function(value, index) {
  if (index === 0) {
    console.log('removed element with value ' + testArray[3] + ' with splice')
    testArray.splice(3, 1);
  }
  console.log('visited index ' + index + ' with value ' + value);
});
```

```javascript
// an item pushed to array will be visited by find if an earlier item is removed by splice
var testArray = [1, 2, 3, 4, 5];

testArray.find(function(value, index) {
  if (index === 0) {
    console.log('removed element with value ' + testArray[3] + ' with splice')
    testArray.splice(3, 1);
    console.log('pushed element with value 6 to end of array');
    testArray.push(6);
  }
  console.log('visited index ' + index + ' with value ' + value);
});
```


