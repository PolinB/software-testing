import React from 'react';

const playwright = require('playwright');

const PAGE_URL = 'http://localhost:3000';
const delay = (ms: any) => new Promise(res => setTimeout(res, ms));

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
    });

    afterEach(async () => {
        await browser.close();
    });

    test(`Load start page`, async () => {
        expect(await page.goto(PAGE_URL)).not.toBeNull();
    });

    test('Home page', async () => {
        await page.goto(PAGE_URL);
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