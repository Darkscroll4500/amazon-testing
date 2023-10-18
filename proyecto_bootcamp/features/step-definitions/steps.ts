import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

import RegisterPage from '../pageobjects/pag.registro';
import LoginPage from '../pageobjects/pag.iniciar.sesion';
import SecurePage from '../pageobjects/secure.page';
import Carrito from '../pageobjects/carrito';

const pages = {
    login: RegisterPage
}

Given(/^Yo voy a la pagina de crear cuenta$/, async () => {
    await RegisterPage.open();
    await RegisterPage.empiezaAqui.click();
});

When(/^Yo me registro con (.*), (.*), (.*), (.*)$/, async (nombre, correo, contrasena, repetirContrasena) => {
    await browser.pause(3000);
    await RegisterPage.creacionCuenta(nombre, correo, contrasena, repetirContrasena);
    await browser.pause(200000);
});

Then(/^Yo deberia ver un mensaje de confirmacion (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});


Given(/^Yo voy a la pagina de iniciar sesion$/, async () => {
    await RegisterPage.open();
    await RegisterPage.identificate.click();
});

When(/^Yo inicio sesion con (.*), (.*)$/, async (correo, contrasena) => {
    await browser.pause(3000);
    await LoginPage.iniciarSesion('miboxa5375@klanze.com', '12345Jose');
    await browser.pause(200000);
});


//carrito

When(/^El usuario va al carrito de compras$/, async () => {
    await Carrito.irAlCarrito();
});

Then(/^El carrito debe contener al menos 3 productos$/, async () => {
    const { productCount } = await Carrito.validarProductosEnCarrito();
    expect(productCount).toBeGreaterThanOrEqual(3);
});

Then(/^El subtotal debe corresponder a la suma de los 3 productos$/, async () => {
    const { subtotal } = await Carrito.validarProductosEnCarrito();
    const subtotalRaw = await Carrito.subtotalRaw;
    const calculatedSubtotal = parseFloat(subtotalRaw.replace('US$', '').trim()); // Convierte el subtotal sin formato a un número

    expect(Number(subtotal)).toEqual(calculatedSubtotal);
});


Then(/^Los 3 productos en el carrito deben ser diferentes$/, async () => {
    const { sonProductosDiferentes } = await Carrito.validarProductosEnCarrito();
    expect(sonProductosDiferentes).toBe(true);
});





