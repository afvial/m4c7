// Cree una función JS que acepte 4 argumentos. Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". Si es más pequeño, la consola registra "¡El número es menor que 50!"

var sum = function (a, b, c, d) {
  const y = (a + b) * (c + d); {
    if (y > 50) {
      return "¡El número es mayor que 50!";
    } else {
      return "¡El número es menor que 50!";
    }
  }
}

let z = sum(5, 2, 5, 2);
console.log(z);
