const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('constructor', () => {
        it('should create employee object', () => {
            const employee = new Employee('Jane Doe', '0123456789', 'janedoe@company.com');

            expect(employee.name).toBe('Jane Doe');
            expect(employee.id).toBe('0123456789');
            expect(employee.email).toBe('janedoe@company.com');
        });
    });

    describe('getName', () => {
        it("should return employee's name", () => {
            const employee = new Employee('Jane Doe', '0123456789', 'janedoe@company.com');

            expect(employee.getName()).toBe('Jane Doe');
        });
    });

    describe('getId', () => {
        it("should return employee's id", () => {
            const employee = new Employee('Jane Doe', '0123456789', 'janedoe@company.com');

            expect(employee.getId()).toBe('0123456789');
        });
    });

    describe('getEmail', () => {
        it("should return employee's email", () => {
            const employee = new Employee('Jane Doe', '0123456789', 'janedoe@company.com');

            expect(employee.getEmail()).toBe('janedoe@company.com');
        });
    });

    describe('getRole', () => {
        it('should return "Employee"', () => {
            const employee = new Employee('Jane Doe', '0123456789', 'janedoe@company.com');

            expect(employee.getRole()).toBe('Employee');
        });
    });
});