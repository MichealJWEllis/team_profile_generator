const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
    const engineer = new Engineer ('Linda Belcher', '0002', 'lbelcher@bburger.com', 'mrsburgergit')
    
    expect(engineer.name).toBe('Linda Belcher');
    expect(engineer.id).toBe('0002');
    expect(engineer.email).toBe('lbelcher@bburger.com');
    expect(engineer.gitHub).toBe('mrsburgergit');
});

test ("gets engineer's github username", () => {
    const engineer = new Engineer ('Linda Belcher', '0002', 'lbelcher@bburger.com', 'mrsburgergit')

    expect(engineer.getGitHub()).toEqual(expect.stringContaining('mrsburgergit'));
    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

test("gets engineer's role", () => {
    const engineer = new Engineer ('Linda Belcher', '0002', 'lbelcher@bburger.com', 'mrsburgergit')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
    expect(engineer.getRole()).toEqual(expect.any(String));
});