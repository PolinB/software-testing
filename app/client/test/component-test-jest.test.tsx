import Home from "../src/components/Home";
import React from "react";

const TestRenderer = require('react-test-renderer');

describe('Component test for home page', () => {
    it('Render phrase without user', () => {
        const user = null
        const testRender = TestRenderer.create(<Home user={user}/>);
        const testInstance = testRender.root;
        expect(testInstance.findByType('p').props.children).toEqual('Welcome to recipe book')
    });

    it('Render phrase with user', () => {
        const user = {
            login: "Test"
        };
        const testRender = TestRenderer.create(<Home user={user}/>);
        const testInstance = testRender.root;
        expect(testInstance.findByType('p').props.children).toEqual('Welcome to recipe book, Test')
    });
});