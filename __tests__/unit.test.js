// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('123-456-7890 is phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('(123)-456-7890 is phone number', () => {
    expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});
test('(123)-4567890 is not phone number', () => {
    expect(functions.isPhoneNumber('(123)-4567890')).toBe(false);
});
test('abc-def-ghij is not phone number', () => {
    expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('lmei@ucsd.edu is email', () => {
    expect(functions.isEmail('lmei@ucsd.edu')).toBe(true);
});
test('validemail@gmail.com is email', () => {
    expect(functions.isEmail('validemail@gmail.com')).toBe(true);
});
test('validemail@gmail.c is not email', () => {
    expect(functions.isEmail('validemail@gmail.c')).toBe(false);
});
test('lmei is not email', () => {
    expect(functions.isEmail('lmei')).toBe(false);
});

test('thisisnot15char is password', () => {
    expect(functions.isStrongPassword('thisisnot15char')).toBe(true);
});
test('a8291437050798 is password', () => {
    expect(functions.isStrongPassword('a8291437050798')).toBe(true);
});
test('8291437050798 is not password', () => {
    expect(functions.isStrongPassword('8291437050798')).toBe(false);
});
test('thisis15character is not password', () => {
    expect(functions.isStrongPassword('thisis15character')).toBe(false);
});

test('05/28/2023 is date', () => {
    expect(functions.isDate('05/28/2023')).toBe(true);
});
test('5/2/2023 is date', () => {
    expect(functions.isDate('5/2/2023')).toBe(true);
});
test('01/01/999 is not date', () => {
    expect(functions.isDate('01/01/999')).toBe(false);
});
test('5/2/20234 is not date', () => {
    expect(functions.isDate('05/2/20234')).toBe(false);
});

test('#FFF is hex', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});
test('#FFFFFF is hex', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});
test('#FFFFF is not hex', () => {
    expect(functions.isHexColor('#FFFFF')).toBe(false);
});
test('#FF is not hex', () => {
    expect(functions.isHexColor('#FF')).toBe(false);
});