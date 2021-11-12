const Inter = require('../lib/Intern');

const obj = {
    name: 'Jane Doe',
    id: '0123456789',
    email: 'janedoe@company.com',
    school: 'University of Arizona'
}

describe('Intern', () => {
    describe('constructor', () => {
        it('should create Intern object', () => {
            const intern = new Inter(obj);

            expect(intern.name).toBe('Jane Doe');
            expect(intern.id).toBe('0123456789');
            expect(intern.email).toBe('janedoe@company.com');
            expect(intern.school).toBe('University of Arizona');
        });
    });

    describe('getName', () => {
        it("should return intern's name", () => {
            const intern = new Intern(obj);

            expect(intern.getName()).toBe('Jane Doe');
        });
    });

    describe('getId', () => {
        it("should return intern's id", () => {
            const intern = new Intern(obj);

            expect(intern.getId()).toBe('0123456789');
        });
    });

    describe('getEmail', () => {
        it("should return intern's email", () => {
            const intern = new Intern(obj);

            expect(intern.getEmail()).toBe('janedoe@company.com');
        });
    });

    describe('getRole', () => {
        it('should return "Intern"', () => {
            const intern = new Intern(obj);

            expect(intern.getRole()).toBe('Intern');
        });
    });

    describe('getSchool', () => {
        it("should return intern's school name", () => {
            const intern = new Intern(obj);

            expect(intern.getSchool()).toBe('University of Arizona');
        });
    });
});