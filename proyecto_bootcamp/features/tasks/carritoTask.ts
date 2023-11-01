import { CarritoPage } from "../pageobjects/carrito.page"

export class CarritoTask extends CarritoPage{

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
    
    

}

