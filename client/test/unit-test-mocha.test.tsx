import React from "react";
//import welcome from "../src/components/Home";

let welcome = require('../src/components/Home');

const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Unit tests', () => {
    it('Welcome without user', () => {
        expect(welcome(null)).should.be.equal("Welcome to recipe book")
    });

    it('Welcome with user', () => {
        const user = {
            login: "Polina"
        }
        expect(welcome(user)).should.be.equal("Welcome to recipe book, Polina")
    });
})