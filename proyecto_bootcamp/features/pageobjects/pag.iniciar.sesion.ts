import { $, browser } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get campoCorreo () {
        return $("//input[@id='ap_email']");
    }

    public get campoContrasena () {
        return $("//input[@id='ap_password']")
    }


    public get btnContinuar () {
        return $("//input[@id='continue']");
    }

    public get btnIniciarSesion () {
        return $("//input[@id='signInSubmit']");
    }

    public get bienvenida () {
        return $("//span[@id='nav-link-accountList-nav-line-1']");
    }

    public get btnCompraDeNuevo () {
        return $('//*[@id="nav-xshop"]/a[2]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async iniciarSesion (correo: string, contrasena: string) {
        await browser.pause(2000);
        await this.campoCorreo.setValue(correo);
        await this.btnContinuar.click();
        await browser.pause(2000);
        await this.campoContrasena.setValue(contrasena);
       await this.btnIniciarSesion.click();
    
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
