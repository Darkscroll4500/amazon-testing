import { CarritoPage } from "../pageobjects/carrito.page"
import { $, browser } from '@wdio/globals'

export class CarritoTask extends CarritoPage {


    public async buscarProducto(producto: string) {
        await this.buscarAmazon.setValue(producto)
        // await browser.pause(1000);
        await this.btnBuscar.click();
    }

    // Agregar 3 productos al carrito, del mismo tipo de producto
    public async agregarProductosAlCarrito(producto: string) {
        await this.buscarProducto(producto)
        await this.btnProd1.click();
        await this.btnAgregarCarrito.click();
        // await browser.pause(1000);
        await this.buscarProducto(producto)
        await this.btnProd2.click();
        await this.btnAgregarCarrito.click();
        // await browser.pause(1000);
        await this.buscarProducto(producto)
        await this.btnProd3.click();
        await this.btnAgregarCarrito.click();
    }


    public async irAlCarrito() {
        await this.seleccionarCarrito.click();
        await browser.pause(1000);
        //const carritoElement: any = await $('a[aria-label="3 artículos en el carrito"]'); // Usar 'any' para evitar problemas de tipo
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

    public async subtotalAmazon() {
        
        return this.subtotal
    }

    public async subtotalPersonal() {
        const preciosCajaTexto: any = await this.precioProductosCarrito;
    
        // Verificar si preciosCajaTexto es un array
        if (Array.isArray(preciosCajaTexto)) {
            // Convertir a números y quitar 'US$'
            var preciosNumeros = preciosCajaTexto.map(function (str: any) { 
                return parseFloat(str.replace('US$', '').trim());
            });
            
            // Sumar los números utilizando reduce
            var subtotalPrecios = preciosNumeros.reduce(function (total, precio) {
                return total + precio;
            }, 0); // El 0 es el valor inicial de total
            
            return subtotalPrecios;
        } 
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

