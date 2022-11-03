// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    myFunction,
} from '../functions.js';

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

    expect.equal(actual, expected, "'Cheez-It' -> 'Cheez-It!!!'");

    const expected2 = 'Triscuit!!!';

    const actual2 = addExclamationPoints('Triscuit');

    expect.equal(actual2, expected2, "'Triscuit' -> 'Triscuit!!!'");

    const expected3 = 'Cheetos!!!';

    const actual3 = addExclamationPoints('Cheetos');

    expect.equal(actual3, expected3, "'Cheetos' -> 'Cheetos!!!'");
});

test('multiplyBySeven test', (expect) => {
    const expected = '28';

    const actual = multiplyBySeven('4');

    expect.equal(actual, expected, '4 * 7 = 28');

    const expected2 = '0';

    const actual2 = multiplyBySeven('0');

    expect.equal(actual2, expected2, '0 * 7 = 0');

    const expected3 = '-14';

    const actual3 = multiplyBySeven('-2');

    expect.equal(actual3, expected3, '-2 * 7 = -14');
});

test('multiply by 12 then halve', (expect) => {
    const expected = '6';
    const actual = multiplyBy12ThenHalve('1');
    expect.equal(actual, expected, '1 * 12 halved');

    const expected2 = '0';
    const actual2 = multiplyBy12ThenHalve('0');
    expect.equal(actual2, expected2, '0 * 12 then halved');

    const expected3 = '-6';
    const actual3 = multiplyBy12ThenHalve('-1');
    expect.equal(actual3, expected3, ' -1 * 12 halved');
});
