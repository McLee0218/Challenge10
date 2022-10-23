const Manager = require("../lib/Manager");

test ("is for manager section", () => {
    const manager = new manager("Dian", 1111, "example@mail.com", "Clark Atlanta University");
    expect(manager.officeNumber).toEqual(expect.any(string));
});