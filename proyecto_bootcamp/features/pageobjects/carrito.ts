import { $, $$ } from '@wdio/globals';

class Carrito {
    public get seleccionarCarrito (){
        return $("//span[@class='nav-cart-icon nav-sprite']");
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

    public async irAlCarrito() {
        const carritoElement: any = await $('a[aria-label="3 artículos en el carrito"]'); // Usar 'any' para evitar problemas de tipo
        await carritoElement.click();
    }

    public get subtotalRaw() {
        return $('#sc-subtotal-amount-buybox .a-price').getText();
    }
}

export default new Carrito();
