const Engineer = require('../lib/engineer.js');

describe("engineer", () =>{
    describe("Initialize new instance of employee class", () => {
        it("Should extend the employee class and make a new engineer", () => {
           const engin = new Engineer();

            expect(engin).toEqual(new Engineer())
        })
    })
})

describe("we want getRole() to return \"Engineer\"", () => {
    const engin = new Engineer("Teangelo", 3, "yes@google.com", "userGit" );
    expect(engin.getRole()).toEqual("Engineer")
});

describe("Getting Github from gitHub() function for Engineer", () => {
    const userName = "Git username";
    const engin = new Engineer("Teangelo", 3, "yes@google.com", userName);
    expect(engin.getGithub()).toEqual(userName);
})