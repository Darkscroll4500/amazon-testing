Feature: Yo como usuario deseo crear una cuenta e iniciar sesion

  @registro
  Scenario Outline: Crear una nueva cuenta

    Given Yo voy a la pagina de crear cuenta
    When Yo me registro con <nombre>, <correo>, <contrasena>, <repetirContrasena>
    Then Yo deberia ver un mensaje de confirmacion <message>

    Examples:
      | nombre   | correo                 | contrasena           | repetirContrasena    | message                        |
      | tomsmith | jahaxeb452@estudys.com | SuperSecretPassword! | SuperSecretPassword! | You logged into a secure area! |
  # | foobar   | usuario4567@gmail.com | barfoo               | barfoo               | Your username is invalid!      |

  @login
  Scenario: iniciar sesion

    Given Yo voy a la pagina de iniciar sesion
    When Yo inicio sesion con <correo> , <contrasena>
    Then Yo deberia ver un mensaje de confirmacion <message>
    
      
