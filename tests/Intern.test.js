const Intern = require('../lib/Intern');

const intern = new Intern('Gabriella', 11, 'gabriella@email.com', 'UoT');

test('Can create an intern object', () => {
    expect(typeof(intern)).toBe('object');
});

test('Does getName show a name', () => {
    expect(intern.getName()).toBe('Gabriella');
});

test('Does getId show an id', () => {
    expect(intern.getId()).toBe(11);
});

test('Does getEmail show an email', () => {
    expect(intern.getEmail()).toBe('gabriella@email.com');
});

test('Does getSchool show a school', () => {
    expect(intern.getSchool()).toBe('UoT');
});

test('Does getRole show the Intern role', () => {
    expect(intern.getRole()).toBe('Intern');
});