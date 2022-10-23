const Engineer = require("../lib/Engineer");

test ("is for engineer section", () => {
    const engineer = new engineer("Lance", 4444, "example@mail.com", "github");
    expect(engineer.github).toEqual(expect.any(string));
    expect(engineer.userName).toEqual(expect.any(string));
});