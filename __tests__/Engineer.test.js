const Engineer = require('../lib/Engineer');

const obj = {
    name: 'Jane Doe',
    id: '0123456789',
    email: 'janedoe@company.com',
    github: 'janedoe'
}

describe('Engineer', () => {
    describe('constructor', () => {
        it('should create Engineer object', () => {
            const engineer = new Engineer(obj);

            expect(engineer.name).toBe('Jane Doe');
            expect(engineer.id).toBe('0123456789');
            expect(engineer.email).toBe('janedoe@company.com');
            expect(engineer.github).toBe('janedoe');
        });
    });

    describe('getName', () => {
        it("should return engineer's name", () => {
            const engineer = new Engineer(obj);

            expect(engineer.getName()).toBe('Jane Doe');
        });
    });

    describe('getId', () => {
        it("should return engineer's id", () => {
            const engineer = new Engineer(obj);

            expect(engineer.getId()).toBe('0123456789');
        });
    });

    describe('getEmail', () => {
        it("should return engineer's email", () => {
            const engineer = new Engineer(obj);

            expect(engineer.getEmail()).toBe('janedoe@company.com');
        });
    });

    describe('getRole', () => {
        it('should return "Engineer"', () => {
            const engineer = new Engineer(obj);

            expect(engineer.getRole()).toBe('Engineer');
        });
    });

    describe('getGithub', () => {
        it("should return engineer's github username", () => {
            const engineer = new Engineer(obj);

            expect(engineer.getGithub()).toBe('janedoe');
        });
    });
});