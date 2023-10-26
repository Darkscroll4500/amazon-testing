import { $, $$ } from '@wdio/globals';

class Carrito {


    public get btnComprarProdUno(){
        return $('(//input[@name="submit.addToCart"])[1]')
    }
    public get btnComprarProdDos(){
        return $('(//input[@name="submit.addToCart"])[2]')
    }
    public get btnComprarProdTres(){
        return $('(//input[@name="submit.addToCart"])[3]')
    }

    public get seleccionarCarrito (){
        return $("//div[@id='nav-cart-text-container']");
    }
    public get productosEnCarrito() {
        return $$("//div[@class='sc-item-content-group']"); // Selecciona todos los elementos que representan productos en el carrito
    }

    public get subtotal() {
        return $('#sc-subtotal-amount-buybox').getText(); // Selector para el subtotal del carrito
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
    public async agregarProductosAlCarrito() {
        await this.btnComprarProdTres.click();
        await this.btnComprarProdDos.click();
        await this.btnComprarProdUno.click();
    }

    public async irAlCarrito() {
        await this.seleccionarCarrito.click();
        //const carritoElement: any = await $('a[aria-label="3 artículos en el carrito"]'); // Usar 'any' para evitar problemas de tipo
    }

    public get subtotalRaw() {
        return $('#sc-subtotal-amount-buybox .a-price').getText();
    }
}

export default new Carrito();
