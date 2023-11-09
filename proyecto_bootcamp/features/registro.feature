Feature: Yo como usuario deseo crear una cuenta

  @registro
  Scenario Outline: Crear una nueva cuenta
    Given Yo voy a la pagina de crear cuenta
    When Yo me registro con <nombre>, <correo>, <contrasena>, <repetirContrasena>
    Then Yo deberia ver un mensaje de confirmacion <message>

    Examples: 
      | nombre   | correo                | contrasena       | repetirContrasena    | mensaje        |
      | Hermione | fadaka2527@unbiex.com | SuperSecretPass! | SuperSecretPassword! | Hola Hermione  |
      | Hermione | fadaka2527@unbiex.com | SuperSecretPass! | SuperSecretPass!     | Hola, Hermione |
      | Hermione | fadaka2527@unbiex.com | SuperSecretPass! | SuperSecretPass!     | Hola Hermione  |
