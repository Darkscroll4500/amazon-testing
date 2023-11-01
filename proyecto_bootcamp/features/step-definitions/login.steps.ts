import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

// import {expect} from 'chai';
// import {expect as assert} from 'chai';

import RegisterPage from '../pageobjects/pag.registro';


import SecurePage from '../pageobjects/secure.page';
import { LoginTask } from '../tasks/loginTask';

const inicio_sesionTask = new LoginTask()
const pages = {
    login: LoginTask
}

Given(/^Yo voy a la pagina de iniciar sesion$/, async () => {
    await RegisterPage.open();
    await RegisterPage.identificate.click();
});

When(/^Yo inicio sesion con (.*), (.*)$/, async (correo, contrasena) => {
    await browser.pause(3000);
    await inicio_sesionTask.iniciarSesion('miboxa5375@klanze.com', '12345Jose');
    await browser.pause(200000);
});

