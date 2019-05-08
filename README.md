These exercises from Practical Javascript require writing functions equivalent to array methods using test driven development.

The testing framework is SimpleTest, a minimal test runner which extends TinyTest.

SimpleTest tests are written as methods on an anonymous object passed to tests()
which is an alias of run(), the test runner. The method name is a specification
written as an expectation of what the code should do.

About Test Driven Development (TDD)
  know what you're trying to do, i.e. work from an example/test case/spec
  make the steps (specs) manageable by making them small
  work in order of increasing complexity, i.e. do the simplest thing first
  don't get ahead of yourself, do one thing at at time and only what is necessary
  do them in order, e.g. one error at a time
  don't do too much, e.g. don't need to pass the array value to the callback to
    make test 1 pass

TDD Takeaways
  Make each test about one thing
  Only write enough code to clear the CURRENT error
  Repeat until the test passes


