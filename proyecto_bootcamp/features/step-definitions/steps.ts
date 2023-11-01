import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

// import {expect} from 'chai';
// import {expect as assert} from 'chai';

import RegisterPage from '../pageobjects/pag.registro';


import SecurePage from '../pageobjects/secure.page';

import { RegisterTask } from '../tasks/registroTask';

const registerTask = new RegisterTask()
const pages = {
    register: RegisterPage
}


Given(/^Yo voy a la pagina de crear cuenta$/, async () => {
    await RegisterPage.open();
    await RegisterPage.empiezaAqui.click();
});

When(/^Yo me registro con (.*), (.*), (.*), (.*)$/, async (nombre, correo, contrasena, repetirContrasena) => {
    await browser.pause(3000);
    await registerTask.creacionCuenta(nombre, correo, contrasena, repetirContrasena);
    await browser.pause(200000);
});

Then(/^Yo deberia ver un mensaje de confirmacion (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});



