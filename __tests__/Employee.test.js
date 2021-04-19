const Employee = require('../lib/Employee.js');

test('creates the employee object', () => {
    const employee = new Employee('Tina Belcher', '0001', 'tbelcher@bburger.com');

    expect(employee.name).toBe('Tina Belcher');
    expect(employee.id).toBe('0001');
    expect(employee.email).toBe('tbelcher@bburger.com');
});

test("gets the employee's name", () => {
    const employee = new Employee('Tina Belcher', '0001', 'tbelcher@bburger.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Tina Belcher'));
});

test("gets the employee's ID#", () => {
    const employee = new Employee('Tina Belcher', '0001', 'tbelcher@bburger.com');

    expect(employee.getId()).toEqual(expect.stringContaining('0001'));
});

test("gets the employee's email address", () => {
    const employee = new Employee('Tina Belcher', '0001', 'tbelcher@bburger.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('tbelcher@bburger.com'));
});

test("gets employee's job role", () => {
    const employee = new Employee('Tina Belcher', '0001', 'tbelcher@bburger.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});