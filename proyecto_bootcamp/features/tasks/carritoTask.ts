import { CarritoPage } from "../pageobjects/carrito.page"
import { $, browser } from '@wdio/globals'

export class CarritoTask extends CarritoPage {
    

    public async buscarProducto(producto: string) {
        await browser.pause(2000);
        await this.buscarAmazon.setValue(producto)
        await browser.pause(2000);
        await this.btnBuscar.click();
    }

    public async agregarProductosAlCarrito(producto: string) {
        await this.buscarProducto(producto)
        await this.btnProd1.click();
        await this.btnAgregarCarrito.click();
        await browser.pause(2000);
        await this.buscarProducto(producto)
        await this.btnProd2.click();
        await this.btnAgregarCarrito.click();
        await browser.pause(2000);
        await this.buscarProducto(producto)
        await this.btnProd3.click();
        await this.btnAgregarCarrito.click();
    }

    public async validarProductosEnCarrito(): Promise<{ productCount: number, subtotal: string, sonProductosDiferentes: boolean }> {
        const products: any = await this.productosEnCarrito; // Usar 'any' para evitar problemas de tipo
        const uniqueProducts = new Set(products.map((product: any) => product.getText()));

        return {
            productCount: products.length,
            subtotal: await this.subtotal,
            sonProductosDiferentes: uniqueProducts.size === products.length,
        };
    }
    

    public async irAlCarrito() {
        await this.seleccionarCarrito.click();
        await browser.pause(4000);
        //const carritoElement: any = await $('a[aria-label="3 artículos en el carrito"]'); // Usar 'any' para evitar problemas de tipo
    }

    

}





// Como se tenia inicialmente agregar productos al carrito
// public async agregarProductosAlCarrito() {
//     await this.btnComprarProdTres.click();
//     await this.btnComprarProdDos.click();
//     await this.btnComprarProdUno.click();
// }

// Ofertas el dia
// public async irOfertasDia() {
    //     await this.btnOfertasDia.click()
    // }

