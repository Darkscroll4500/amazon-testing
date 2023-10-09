import { $, browser } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get identificate (){
        return $("//a[@id='nav-link-accountList']")
    }

    public get empiezaAqui () {
        return $("//*[@id='nav-signin-tooltip']/div/a")
    }

    public get crearCuenta (){
        return $('#createAccountSubmit')
    }
    public get CampoNombre () {
        return $("//input[@id='ap_customer_name']");
    }

    public get campoCorreo () {
        return $("//input[@id='ap_email']");
    }

    public get campoContrasena () {
        return $("//input[@id='ap_password']")
    }

    public get campoRepetirContrasena () {
        return $("//input[@id='ap_password_check']")
    }

    public get btnContinuar () {
        return $("//input[@id='continue']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async creacionCuenta (nombre: string, correo: string, contrasena: string, repetirContrasena: string) {
        await browser.pause(2000);
        await this.CampoNombre.setValue(nombre);
        await this.campoCorreo.setValue(correo);
        await this.campoContrasena.setValue(contrasena);
        await this.campoRepetirContrasena.setValue(repetirContrasena);
        await this.btnContinuar.click();
    }



    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
