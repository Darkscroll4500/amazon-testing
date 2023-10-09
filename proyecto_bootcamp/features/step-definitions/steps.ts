import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

Given(/^Yo voy a la pagina de crear cuenta$/, async () => {
    await LoginPage.open();
    await LoginPage.empiezaAqui.click();
});

When(/^Yo me registro con (.*), (.*), (.*), (.*)$/, async (nombre, correo, contrasena, repetirContrasena) => {
    await browser.pause(3000);
    await LoginPage.creacionCuenta(nombre, correo, contrasena, repetirContrasena);
    await browser.pause(200000);
});

Then(/^Yo deberia ver un mensaje de confirmacion (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

