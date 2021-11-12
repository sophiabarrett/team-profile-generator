const Employee = require('../lib/Employee');

const obj = {
    name: 'Jane Doe',
    id: '0123456789',
    email: 'janedoe@company.com'
}

describe('Employee', () => {
    describe('constructor', () => {
        it('should create employee object', () => {
            const employee = new Employee(obj);

            expect(employee.name).toBe('Jane Doe');
            expect(employee.id).toBe('0123456789');
            expect(employee.email).toBe('janedoe@company.com');
        });
    });

    describe('getName', () => {
        it("should return employee's name", () => {
            const employee = new Employee(obj);

            expect(employee.getName()).toBe('Jane Doe');
        });
    });

    describe('getId', () => {
        it("should return employee's id", () => {
            const employee = new Employee(obj);

            expect(employee.getId()).toBe('0123456789');
        });
    });

    describe('getEmail', () => {
        it("should return employee's email", () => {
            const employee = new Employee(obj);

            expect(employee.getEmail()).toBe('janedoe@company.com');
        });
    });

    describe('getRole', () => {
        it('should return "Employee"', () => {
            const employee = new Employee(obj);

            expect(employee.getRole()).toBe('Employee');
        });
    });
});