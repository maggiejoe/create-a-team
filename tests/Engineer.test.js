const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Adrina', 201, 'adrina@email.com', 'adrinaGH');

test('Can create an engineer object', () => {
    expect(typeof(engineer)).toBe('object');
});

test('Does getName show a name', () => {
    expect(engineer.getName()).toBe('Adrina');
});

test('Does getId show an id', () => {
    expect(engineer.getId()).toBe(201);
});

test('Does getEmail show an email', () => {
    expect(engineer.getEmail()).toBe('adrina@email.com');
});

test('Does getGithub show a github account', () => {
    expect(engineer.getGithub()).toBe('adrinaGH');
});

test('Does getRole show the Engineer role', () => {
    expect(engineer.getRole()).toBe('Engineer');
});