import { $, $$ } from '@wdio/globals';

export class CarritoPage {


    public get btnComprarProdUno() {
        return $('(//input[@name="submit.addToCart"])[1]')
    }
    public get btnComprarProdDos() {
        return $('(//input[@name="submit.addToCart"])[2]')
    }
    public get btnComprarProdTres() {
        return $('(//input[@name="submit.addToCart"])[3]')
    }

    // public get btnCompraDeNuevo(){
    //     return $()
    // }

    public get seleccionarCarrito() {
        return $("//a[@id='nav-cart']");
    }
    public get productosEnCarrito() {
        return $$("//div[@class='sc-item-content-group']"); // Selecciona todos los elementos que representan productos en el carrito
    }

    public get subtotal() {
        // return $('#sc-subtotal-amount-buybox').getText(); // Selector para el subtotal del carrito
        return $("//span[@id='sc-subtotal-amount-buybox']").getText();
    }
    public get subtotalRaw() {
        return $("//span[@id='sc-subtotal-amount-activecart']").getText();
    }

}

export default new CarritoPage();