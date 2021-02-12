const Employee = require('../lib/employee');

describe("employee", () => {
    describe("Initialize new instance of employee class", () => {
        it("Should make a new employee", () => {
            const mainEmp = new Employee;
            expect(mainEmp).toEqual(new Employee)
        })
    })
})