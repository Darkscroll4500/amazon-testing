import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'
import  LoginPage  from '../pageobjects/pag.iniciar.sesion';
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
    await inicio_sesionTask.iniciarSesion(correo, contrasena);
    await browser.pause(200000);
});

Then(/^Yo deberia ver un mensaje de bienvenida (.*)$/, async (mensaje) => {
    await expect(LoginPage.bienvenida).toHaveText(mensaje);
    await browser.close();
});

