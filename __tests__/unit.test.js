// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('valid phone number with dashes returns true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number with parentheses returns true', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('phone number with letters returns false', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('phone number with too few digits returns false', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

test('valid email returns true', () => {
  expect(isEmail('student@example.com')).toBe(true);
});

test('another valid email returns true', () => {
  expect(isEmail('name@ucsd.edu')).toBe(true);
});

test('email without @ returns false', () => {
  expect(isEmail('studentexample.com')).toBe(false);
});

test('email without domain ending returns false', () => {
  expect(isEmail('student@example')).toBe(false);
});

test('valid strong password returns true', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});

test('another valid strong password returns true', () => {
  expect(isStrongPassword('abc_123')).toBe(true);
});

test('password starting with number returns false', () => {
  expect(isStrongPassword('1Password')).toBe(false);
});

test('password with special character returns false', () => {
  expect(isStrongPassword('Password!')).toBe(false);
});

test('valid date returns true', () => {
  expect(isDate('05/01/2024')).toBe(true);
});

test('another valid date returns true', () => {
  expect(isDate('5/1/2024')).toBe(true);
});

test('date with dashes returns false', () => {
  expect(isDate('2024-05-01')).toBe(false);
});

test('date with two digit year returns false', () => {
  expect(isDate('05/01/24')).toBe(false);
});

test('valid six character hex color with # returns true', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('valid three character hex color without # returns true', () => {
  expect(isHexColor('abc')).toBe(true);
});

test('hex color with invalid characters returns false', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});

test('hex color with wrong length returns false', () => {
  expect(isHexColor('#FFFF')).toBe(false);
});