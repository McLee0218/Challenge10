// const { default: test } = require("node:test");
const Employee = require("../lib/Employee");

test("is for the employee section",() => {
    const employee = new Employee("Tameka", 2222, "example@email.com");
    expect (employee.name).toEqual(expect.any(string));
    expect (employee.id).toEqual(expect.any(number));
    expect(employee.email).toContain(expect.any("@"));
});
