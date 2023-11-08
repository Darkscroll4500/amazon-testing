import { $, browser } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class RegisterPage extends Page {
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
    public get campoNombre () {
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
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('register');
    }
}

export default new RegisterPage();
