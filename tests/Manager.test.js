const Manager = require('../lib/Manager');

const manager = new Manager('Joanne', 101, 'joanne@email.com', 111);

test('Can create an engineer object', () => {
    expect(typeof(manager)).toBe('object');
});

test('Does getName show a name', () => {
    expect(manager.getName()).toBe('Joanne');
});

test('Does getId show an id', () => {
    expect(manager.getId()).toBe(101);
});

test('Does getEmail show an email', () => {
    expect(manager.getEmail()).toBe('joanne@email.com');
});

test('Does getOfficeNumber show an office number', () => {
    expect(manager.getOfficeNumber()).toBe(111);
});

test('Does getRole show the Manager role', () => {
    expect(manager.getRole()).toBe('Manager');
});