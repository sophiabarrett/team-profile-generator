const Manager = require('../lib/Manager');

const obj = {
    name: 'Jane Doe',
    id: '0123456789',
    email: 'janedoe@company.com',
    officeNum: '7'
}

describe('Manager', () => {
    describe('constructor', () => {
        it('should create Manager object', () => {
            const manager = new Manager(obj);

            expect(manager.name).toBe('Jane Doe');
            expect(manager.id).toBe('0123456789');
            expect(manager.email).toBe('janedoe@company.com');
            expect(manager.officeNum).toBe('7');
        });
    });

    describe('getName', () => {
        it("should return manager's name", () => {
            const manager = new Manager(obj);

            expect(manager.getName()).toBe('Jane Doe');
        });
    });

    describe('getId', () => {
        it("should return manager's id", () => {
            const manager = new Manager(obj);

            expect(manager.getId()).toBe('0123456789');
        });
    });

    describe('getEmail', () => {
        it("should return manager's email", () => {
            const manager = new Manager(obj);

            expect(manager.getEmail()).toBe('janedoe@company.com');
        });
    });

    describe('getRole', () => {
        it("should return manager's office number", () => {
            const manager = new Manager(obj);

            expect(manager.getOfficeNum()).toBe('7');
        });
    });

    describe('getOfficeNum', () => {
        it('should return "Manager"', () => {
            const manager = new Manager(obj);

            expect(manager.getRole()).toBe('Manager');
        });
    });
});