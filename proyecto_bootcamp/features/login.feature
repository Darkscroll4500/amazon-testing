Feature: Yo como usuario deseo iniciar sesion

  @login
  Scenario Outline: iniciar sesion

    Given Yo voy a la pagina de iniciar sesion
    When Yo inicio sesion con <correo> , <contrasena>
    Then Yo deberia ver un mensaje de bienvenida <mensaje>

    Examples:
      | correo                | contrasena | mensaje        |
      | miboxa5375@klanze.com | 12345Jose  | Hola, tomsmith |
      | miboxa5375@klanze.com | 12345Jose  | Hola tomsmith  |
