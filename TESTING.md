# Testing Strategy

This project uses both unit testing and integration testing.

## Unit Testing
Unit tests verify individual calculator functions such as:

- addition
- subtraction
- multiplication
- division

Edge cases tested include:
- division by zero
- negative numbers
- decimal numbers
- large numbers

## Integration Testing
Integration tests verify that different parts of the application work together.

Examples include:
- performing a full calculation
- verifying the clear function resets the value.

## Testing Pyramid
Most tests are unit tests, with fewer integration tests. This follows the testing pyramid principle.

## Black-box vs White-box Testing
Unit tests use white-box testing because they directly test internal functions.
Integration tests simulate user interactions and represent black-box testing.

## Regression Testing
Running `npm test` allows the test suite to detect regressions when the code is modified.
