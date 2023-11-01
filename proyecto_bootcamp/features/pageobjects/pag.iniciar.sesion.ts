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
    


    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
