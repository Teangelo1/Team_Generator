const Manager = require('../lib/manager.js');

describe("Manager", () =>{
    describe("Initialize new instance of employee class", () => {
        it("Should extend the employee class and make a new Manager", () => {
           const manag = new Manager();

            expect(manag).toEqual(new Manager())
        })
    })
})

describe('we want getRole() to return "Manager" ', () => {
    const manag = new Manager ("Teangelo", 3, "yes@google.com", "School Name" );
    expect(manag.getRole()).toEqual("Manager")
});

