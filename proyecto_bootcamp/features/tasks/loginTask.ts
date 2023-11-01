import { LoginPage } from "../pageobjects/pag.iniciar.sesion";
import { $, browser } from '@wdio/globals'

export class LoginTask extends LoginPage {

    /**
         * a method to encapsule automation code to interact with the page
         * e.g. to login using username and password
         */
    public async iniciarSesion(correo: string, contrasena: string) {
        await browser.pause(2000);
        await this.campoCorreo.setValue(correo);
        await this.btnContinuar.click();
        await browser.pause(2000);
        await this.campoContrasena.setValue(contrasena);
        await this.btnIniciarSesion.click();
    }

}
