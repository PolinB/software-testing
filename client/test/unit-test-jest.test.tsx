import {welcome} from "../src/components/Home";
import React from "react";

describe('Unit tests', () => {
    it('Welcome without user', () => {
        expect(welcome(null)).toBe("Welcome to recipe book")
    });

    it('Welcome with user', () => {
        const user = {
            login: "Polina"
        }
        expect(welcome(user)).toBe("Welcome to recipe book, Polina")
    });
});
