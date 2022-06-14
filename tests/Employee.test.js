const Employee = require('../lib/Employee');

test('Can create an object', () => {
    const employee = new Employee('Maggie', 2, 'maggie@email.com');
    expect(typeof(employee)).toBe('object');
})