import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'
import  LoginPage  from '../pageobjects/pag.iniciar.sesion';
import RegisterPage from '../pageobjects/pag.registro';
import SecurePage from '../pageobjects/secure.page';
import Carrito from '../pageobjects/carrito.page';

import { RegisterTask } from '../tasks/registroTask';

const registerTask = new RegisterTask()
const pages = {
    register: RegisterPage
}


//registro
Given(/^Yo voy a la pagina de crear cuenta$/, async () => {
    await RegisterPage.open();
    await RegisterPage.empiezaAqui.click();
});

When(/^Yo me registro con (.*), (.*), (.*), (.*)$/, async (nombre, correo, contrasena, repetirContrasena) => {
    await browser.pause(3000);
    await registerTask.creacionCuenta(nombre, correo, contrasena, repetirContrasena);
    await browser.pause(200000);
});

Then(/^Yo deberia ver un mensaje de bienvenida (.*)$/, async (mensaje) => {
    await expect(LoginPage.bienvenida).toHaveText(mensaje);
    window.close();
});
