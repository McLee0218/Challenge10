const Intern = require("../lib/Intern");

test ("is for intern section", () => {
    const intern = new intern("Dian", 1111, "example@mail.com", "Clark Atlanta University");
    expect(intern.school).toEqual(expect.any(string));
});