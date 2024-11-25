  function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
  }
  
  console.log("Solucion 1:");
  console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15
  console.log(calcularAreaRectangulo(7, 2)); // Resultado: 14
  console.log(calcularAreaRectangulo(6, 4)); // Resultado: 24
  console.log("///////////////");
  /*
  Para calcular el área de un rectángulo, se multiplica la longitud por el ancho.
  Creé una función que toma dos argumentos, longitud y ancho, y retorna el producto de estos dos valores.
  */

  
  function contarPalabras(cadena) {
    return cadena.split(' ').length;
  }
  
  console.log("Solucion 2:");
  console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 4
  console.log(contarPalabras("El sol brilla hoy")); // Resultado: 4
  console.log(contarPalabras("Tengo un coche nuevo")); // Resultado: 4
  console.log("///////////////");
  /*
  Para contar las palabras en una cadena, primero dividí la cadena en palabras usando el espacio como delimitador.
  Después, simplemente conté el número de elementos en el array resultante.
  */

  function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
  }
  
  console.log("Solucion 3:");
  console.log(invertirCadena("hola")); // Resultado: "aloh"
  console.log(invertirCadena("mundo")); // Resultado: "odnum"
  console.log(invertirCadena("javascript")); // Resultado: "tpircsavaj"
  console.log("///////////////");
  /*
  Para invertir una cadena, primero la convertí en un array de caracteres, luego invertí el array,
  y finalmente volví a unir los caracteres en una cadena.
  */

  function esPalindromo(cadena) {
    let cadenaInvertida = cadena.split('').reverse().join('');
    return cadena === cadenaInvertida;
  }
  
  console.log("Solucion 4:");
  console.log(esPalindromo("neuquen")); // true
  console.log(esPalindromo("reconocer")); // true
  console.log(esPalindromo("rallar")); // true
  console.log(esPalindromo("java")); // false
  console.log("///////////////");
  /*
  Para determinar si una cadena es un palíndromo, primero invertí la cadena y luego comparé la cadena original con la invertida.
  Si son iguales, la cadena es un palíndromo.
  */
  
  function edadCanina(edad) {
    const edadCanina = edad * 7;
    console.log(`La edad del perro en años humanos es: ${edadCanina}`);
  }
  
  console.log("Solucion 5:");
  edadCanina(7); // La edad del perro en años humanos es: 49
  edadCanina(3); // La edad del perro en años humanos es: 21
  edadCanina(5); // La edad del perro en años humanos es: 35
  console.log("///////////////");
  /*
  Para convertir la edad de un perro a años humanos, simplemente multipliqué la edad del perro por 7,
  ya que se considera que cada año de vida de un perro equivale aproximadamente a siete años humanos.
  */
  