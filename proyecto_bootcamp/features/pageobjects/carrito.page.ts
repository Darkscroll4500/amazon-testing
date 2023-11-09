import { $, $$ } from '@wdio/globals';

export class CarritoPage {



    // Ir al carrito
    public get seleccionarCarrito() {
        return $("//a[@id='nav-cart']");
    }
    public get productosEnCarrito() {
        return $$("//div[@class='sc-item-content-group']"); // Selecciona todos los elementos que representan productos en el carrito
    }

    // Subtotal
    public get subtotal() {
        // return $('#sc-subtotal-amount-buybox').getText(); // Selector para el subtotal del carrito
        return $("//span[@id='sc-subtotal-amount-buybox']").getText();
    }
    // public get subtotalRaw() {
    //     return $("//span[@id='sc-subtotal-amount-activecart']").getText();
    // }

    // Buscar producto en Amazon
    public get buscarAmazon() {
        return $("//input[@id='twotabsearchtextbox']");
    }

    public get btnBuscar() {
        return $("//input[@id='nav-search-submit-button']")
    }

    // Seleccionar los 3 primeros productos en los resultados de la busqueda, 1 producto por cada busqueda igual
    public get btnProd1() {
        return $("//span[@class='rush-component s-latency-cf-section']//div[@class='s-main-slot s-result-list s-search-results sg-row']/child::div[3]//a[@class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']")
    }

    public get btnProd2() {
        return $("//span[@class='rush-component s-latency-cf-section']//div[@class='s-main-slot s-result-list s-search-results sg-row']/child::div[4]//a[@class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']")
    }

    public get btnProd3() {
        return $("//span[@class='rush-component s-latency-cf-section']//div[@class='s-main-slot s-result-list s-search-results sg-row']/child::div[5]//a[@class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']")
    }

    // Agregar producto al carrito
    public get btnAgregarCarrito() {
        return $("//input[@name='submit.add-to-cart']")
    }

    public get precioProductosCarrito() {
        return $("//div[@class='sc-item-content-group']//span[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold']").getText()
        //return $("//div[@class='sc-item-content-group']//span[contains(text(), '.')]")
    }



}

export default new CarritoPage();




// Como inicialmente se intento agregar los productos al carrito
// public get btnComprarProdUno() {
//     return $('//input[@name="submit.addToCart"])[1]')
// }
// public get btnComprarProdDos() {
//     return $('(//input[@name="submit.addToCart"])[2]')
// }
// public get btnComprarProdTres() {
//     return $('(//input[@name="submit.addToCart"])[3]')
// }

// public get btnCompraDeNuevo(){
//     return $()
// }

// Ir a las ofertas del dia
// public get btnOfertasDia(){
//     return $("//a[text()= 'Ofertas del Día']")
//     //div[@ class = "a-carousel-viewport"]//ol[@ class = "a-carousel"]/child::li[1]
// }
