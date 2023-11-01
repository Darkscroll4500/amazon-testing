Feature: Yo como usuario deseo iniciar sesion
    Examples:
      | nombre   | correo                 | contrasena           | repetirContrasena    | message                        |
      | tomsmith | jahaxeb452@estudys.com | SuperSecretPassword! | SuperSecretPassword! | You logged into a secure area! |

  @login
  Scenario: iniciar sesion
    Given Yo voy a la pagina de iniciar sesion
    When Yo inicio sesion con <correo> , <contrasena>
    Then Yo deberia ver un mensaje de confirmacion <message>
