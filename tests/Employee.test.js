const Employee = require('../lib/Employee');

const employee = new Employee('Maggie', 2, 'maggie@email.com');

test('Can create an object', () => {
    expect(typeof(employee)).toBe('object');
});

test('Does getName show a name', () => {
    expect(employee.getName()).toBe('Maggie');
});

test('Does getId show an id', () => {
    expect(employee.getId()).toBe(2);
});

test('Does getEmail show an email', () => {
    expect(employee.getEmail()).toBe('maggie@email.com');
});

test('Does getRole show employee', () => {
    expect(employee.getRole()).toBe('Employee');
});