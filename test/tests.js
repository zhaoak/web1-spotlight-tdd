// IMPORT MODULES under test here:
import { addExclamationPoints, myFunction } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('add exclamation points test', (expect) => {
    const expected = 'Cheez-It!!!';

    const actual = addExclamationPoints('Cheez-It');

    expect.equal(actual, expected, 'Cheez-It!!!');
});
