import {RegisterPage} from "..//pageobjects/pag.registro";
import { $, browser } from '@wdio/globals'

export class RegisterTask extends RegisterPage{

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    public async creacionCuenta (nombre: string, correo: string, contrasena: string, repetirContrasena: string) {
        await browser.pause(2000);
        await this.campoNombre.setValue(nombre);
        await this.campoCorreo.setValue(correo);
        await this.campoContrasena.setValue(contrasena);
        await this.campoRepetirContrasena.setValue(repetirContrasena);
        await this.btnContinuar.click();
    }

    // public async iniciarSesion (correo: string, contrasena: string) {
    //     await browser.pause(2000);
    //     await this.campoCorreo.setValue(correo);
    //     await this.campoContrasena.setValue(contrasena);
    //     await this.btnContinuar.click();
    // }
}