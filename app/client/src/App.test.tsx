import React from 'react';
import Home, {welcome} from "./components/Home";
import {BrowserRouter, NavLink} from "react-router-dom";
import Navigation from "./components/Navigation";

const TestRenderer = require('react-test-renderer');
const playwright = require('playwright');

const PAGE_URL = 'http://localhost:3000';
const delay = (ms: any) => new Promise(res => setTimeout(res, ms));
describe(`E2E tests`, () => {
  describe(`Playwright tests`, () => {
    let browser: any = null;
    let page: any = null;
    let firstName = 'Polina';
    let lastName = 'Burtseva';
    let age = '22';

    beforeEach(async () => {
      browser = await playwright['chromium'].launch();
      page = await browser.newPage();

      if (!page) {
        throw new Error("Connection wasn't established");
      }

      await page.goto(PAGE_URL);
      await delay(100);
    });

    afterEach(async () => {
      await browser.close();
    });

    test(`Load start page`, async () => {
      expect(page).not.toBeNull();
      expect(await page.title()).not.toBeNull();
    });

    test('Home page', async () => {
      expect(await page.innerText('#welcome')).toBe('Welcome to recipe book');
    });

    test('Unknown page', async () => {
      await page.goto(PAGE_URL + '/hello');
      expect(await page.innerText('#not-exist')).toBe('Error: Page does not exist!');
    });

    // Можно запускать лишь 1 раз после поднятия
    test('Register user', async () => {
      let login = 'polinb';
      await page.goto(PAGE_URL + '/register');
      await page.fill('#firstName', firstName);
      await page.fill('#lastName', lastName);
      await page.fill('#login', login);
      await page.fill('#age', age);
      await page.click('#register-submit');

      await delay(100);

      expect(await page.innerText('#welcome')).toBe('Welcome to recipe book');
    });

    // Можно запускать лишь 1 раз после поднятия
    test('Login after register user', async () => {
      let login = 'pbs';
      await page.goto(PAGE_URL + '/register');
      await page.fill('#firstName', firstName);
      await page.fill('#lastName', lastName);
      await page.fill('#login', login);
      await page.fill('#age', age);
      await page.click('#register-submit');
      await delay(100);

      await page.goto(PAGE_URL + '/login');
      await page.fill('#login', login);
      await page.click('#login-submit');
      await delay(100);

      expect(await page.innerText('#welcome')).toBe('Welcome to recipe book, ' + login);

      await page.click('#logout-navlink');
      await delay(100);
      expect(await page.innerText('#welcome')).toBe('Welcome to recipe book');
    });
  });

});

describe('Unit tests', () => {
  it('Welcome without user', () => {
    expect(welcome(null)).toBe("Welcome to recipe book")
  })

  it('Welcome with user', () => {
    const user = {
      login: "Polina"
    }
    expect(welcome(user)).toBe("Welcome to recipe book, Polina")
  })
})

describe('Component tests', () => {
  describe('Component test for home page', () => {
    it('Render phrase without user', () => {
      const user = null
      const testRender = TestRenderer.create(<Home user={user}/>);
      const testInstance = testRender.root;
      expect(testInstance.findByType('p').props.children).toEqual('Welcome to recipe book')
    })

    it('Render phrase with user', () => {
      const user = {
        login: "Test"
      };
      const testRender = TestRenderer.create(<Home user={user}/>);
      const testInstance = testRender.root;
      expect(testInstance.findByType('p').props.children).toEqual('Welcome to recipe book, Test')
    })
  })

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
