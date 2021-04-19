const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Bob Belcher', '0004', 'bbelcher@bburger.com', 'M111');
    
    expect(manager.name).toBe('Bob Belcher');
    expect(manager.id).toBe('0004');
    expect(manager.email).toBe('bbelcher@bburger.com');
    expect(manager.officeId).toBe('M111');
});

test("gets employee's role", () => {
    const manager = new Manager('Bob Belcher', '0004', 'bbelcher@bburger.com', 'M111');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
    expect(manager.getRole()).toEqual(expect.any(String));
});