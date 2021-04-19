const Intern = require('../lib/Intern.js');

test ('creates an intern object', () => {
    const intern = new Intern('Gene Belcher', '0003', 'gbelcher@bburger.com', 'College');
    expect(intern.name).toBe('Gene Belcher');
    expect(intern.id).toBe('0003');
    expect(intern.email).toBe('gbelcher@bburger.com');
    expect(intern.school).toBe('College');
});

test("gets intern's school", () => {
    const intern = new Intern('Gene Belcher', '0003', 'gbelcher@bburger.com', 'College');
    expect(intern.getSchool()).toEqual(expect.stringContaining('College'));
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("gets intern's role", () => {
    const intern = new Intern('Gene Belcher', '0003', 'gbelcher@bburger.com', 'College');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
    expect(intern.getRole()).toEqual(expect.any(String));
});