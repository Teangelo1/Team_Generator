const Intern = require('../lib/intern.js');

describe("Intern", () =>{
    describe("Initialize new instance of employee class", () => {
        it("Should extend the employee class and make a new Intern", () => {
           const intern = new Intern();

            expect(intern).toEqual(new Intern())
        })
    })
})

describe('we want getRole() to return "Intern" ', () => {
    const intern = new Intern("Teangelo", 3, "yes@google.com", "School Name" );
    expect(intern.getRole()).toEqual("Intern")
});

describe("Getting school name from getSchool() function for Intern", () => {
    const school = "school";
    const intern = new Intern("Teangelo", 3, "yes@google.com", school);
    expect(intern.getSchool()).toEqual(school);
})
