const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const Student = require('../Models/Student')

it('should run the test', () => {
    expect(1+1).to.eql(2);
});

describe("YearGroup class tests", () => {
    let myStudent = new Student("Liam King", 11, "11c");
    it('should create a new Student', () => {
        expect(myStudent).to.be.an.instanceOf(Student)
        expect(myStudent.name).to.eql("Liam King");
        expect(myStudent.year).to.eql(11);
        expect(myStudent.form).to.be.string("11c");
    })
    it('should return the year and head initials', () => {
        expect(myStudent.getName()).to.eql("Liam King");
        expect(myStudent.getYearGroup()).to.eql(11);
        expect(myStudent.getFormGroup()).to.eql("11c");
    })
});