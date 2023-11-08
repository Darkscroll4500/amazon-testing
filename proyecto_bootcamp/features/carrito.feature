Feature: Yo como usuario deseo validar los productos en el carrito de compras

  @carrito
  Scenario: Validar carrito de compras

    Given Yo agrego productos al carrito
    When El usuario va al carrito de compras
    Then El carrito debe contener al menos 3 productos
    And El subtotal debe corresponder a la suma de los 3 productos
    And Los 3 productos en el carrito deben ser diferentes
