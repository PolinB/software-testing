import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from "./components/Home";
import {BrowserRouter, NavLink} from "react-router-dom";
import Navigation from "./components/Navigation";

const TestRenderer = require('react-test-renderer');

describe('component test for home page', () => {
  it('render start phrase', () => {
    render(<App />);
    const linkElements = screen.queryByText('Welcome to CrazyCookBook');
    expect(linkElements).toBeInTheDocument();
  })

  it('render phrase without user', () => {
    const user = null
    const testRender = TestRenderer.create(<Home user={user}/>);
    const testInstance = testRender.root;
    expect(testInstance.findByType('p').props.children).toEqual('Welcome to CrazyCookBook')
  })

  it('render phrase with user', () => {
    const user = {
      login: "Test"
    };
    const testRender = TestRenderer.create(<Home user={user}/>);
    const testInstance = testRender.root;
    expect(testInstance.findByType('p').props.children).toEqual(['Welcome to CrazyCookBook, ', user.login])
  })
})

describe('component tests for navigation menu', () => {
  it('render menu without user', () => {
    const testRender = TestRenderer.create(<BrowserRouter><Navigation isLogin={false} logoutFunc={() => {}}/></BrowserRouter>);
    const testInstance = testRender.root;
    const elements = testInstance.findAllByType(NavLink).map((element: any) =>
        element.props.children
    );
    expect(elements).toContain('Home');
    expect(elements).toContain('Register');
    expect(elements).toContain('Login');
  })

  it('render menu with user', () => {
    const testRender = TestRenderer.create(<BrowserRouter><Navigation isLogin={true} logoutFunc={() => {}}/></BrowserRouter>);
    const testInstance = testRender.root;
    const elements = testInstance.findAllByType(NavLink).map((element: any) =>
        element.props.children
    );
    expect(elements).toContain('Home');
    expect(elements).not.toContain('Register');
    expect(elements).toContain('Logout');
  })
})
