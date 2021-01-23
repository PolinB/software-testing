import React from 'react';
import Home from "./components/Home";
import {BrowserRouter, NavLink} from "react-router-dom";
import Navigation from "./components/Navigation";

const TestRenderer = require('react-test-renderer');

describe('Component tests', () => {
  describe('Component tests for navigation menu', () => {
    it('Render menu without user', () => {
      const testRender = TestRenderer.create(<BrowserRouter><Navigation isLogin={false} logoutFunc={() => {}}/></BrowserRouter>);
      const testInstance = testRender.root;
      const elements = testInstance.findAllByType(NavLink).map((element: any) =>
          element.props.children
      );
      expect(elements).toContain('Home');
      expect(elements).toContain('Register');
      expect(elements).toContain('Login');
    })

    it('Render menu with user', () => {
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
})
