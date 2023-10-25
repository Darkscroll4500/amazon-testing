Feature: Yo como usuario deseo crear una cuenta e iniciar sesion

  @registro
  Scenario Outline: Crear una nueva cuenta

    Given Yo voy a la pagina de crear cuenta
    When Yo me registro con <nombre>, <correo>, <contrasena>, <repetirContrasena>
    Then Yo deberia ver un mensaje de bienvenida <message>

    Examples:
      | nombre   | correo                | contrasena       | repetirContrasena    | message        |
      | Hermione | fadaka2527@unbiex.com | SuperSecretPass! | SuperSecretPassword! | Hola Hermione  |
      | Hermione | fadaka2527@unbiex.com | SuperSecretPass! | SuperSecretPass!     | Hola, Hermione |
      | Hermione | fadaka2527@unbiex.com | SuperSecretPass! | SuperSecretPass!     | Hola Hermione  |



  @login
  Scenario Outline: iniciar sesion

    Given Yo voy a la pagina de iniciar sesion
    When Yo inicio sesion con <correo> , <contrasena>
    Then Yo deberia ver un mensaje de bienvenida <mensaje>

    Examples:
      | correo                | contrasena | mensaje        |
      | miboxa5375@klanze.com | 12345Jose  | Hola, tomsmith |
      | miboxa5375@klanze.com | 12345Jose  | Hola tomsmith  |
