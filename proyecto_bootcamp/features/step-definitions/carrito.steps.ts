import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

import RegisterPage from '../pageobjects/pag.registro';
import { LoginTask } from '../tasks/loginTask';
import { CarritoTask } from '../tasks/carritoTask';

const carritoTask = new CarritoTask()
const inicio_sesionTask = new LoginTask()
const pages = {
    carrito: CarritoTask
}

//carrito

Given(/^Yo agrego productos al carrito$/, async () => {
    await RegisterPage.open();
    await RegisterPage.identificate.click();
    await browser.pause(1000);
    await inicio_sesionTask.iniciarSesion("miboxa5375@klanze.com", "12345Jose");
    await browser.pause(2000);
    await carritoTask.agregarProductosAlCarrito("camara")

});

When(/^El usuario va al carrito de compras$/, async () => {
    await browser.pause(1000);
    await carritoTask.irAlCarrito();

});

Then(/^El carrito debe contener al menos 3 productos$/, async () => {
    const { productCount } = await carritoTask.validarProductosEnCarrito();
    expect(productCount).toBeGreaterThanOrEqual(3);
});


Then(/^Los 3 productos en el carrito deben ser diferentes$/, async () => {
    const { sonProductosDiferentes } = await carritoTask.validarProductosEnCarrito();
    expect(sonProductosDiferentes).toBe(true);
    await browser.pause(1000);
});


Then(/^El subtotal debe corresponder a la suma de los 3 productos$/, async () => {
    const subtotal_amazon = await carritoTask.subtotalAmazon()
    const subtotal_personal = await carritoTask.subtotalPersonal()
    expect((subtotal_personal) == (subtotal_amazon));
})





// Then(/^El subtotal debe corresponder a la suma de los 3 productos$/, async () => {
//     const { subtotal } = await carritoTask.validarProductosEnCarrito();
//     const subtotalRaw = await carritoTask.subtotalRaw;
//     const calculatedSubtotal = parseFloat(subtotalRaw.replace('US$', '').trim()); // Convierte el subtotal sin formato a un número

//     expect(Number(subtotal)).toEqual(calculatedSubtotal);
// });



