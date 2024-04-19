# Preguntas

## ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

## ¿Cuáles son algunos tipos de datos JS?

Existen seis tipos de datos primitivos, es decir, que no son un objeto. Hay que tener cuidado con este concepto porque JavaScript en muchas situaciones convierte automáticamente los datos primitivos en objetos equivalentes a excepción de **null** y **undefined**.

* **Undefined:** representa una variable que no ha sido declarada o a la cual no se le ha asignado un valor.

```javascript
console.log(typeof undefined);

// undefined
```

* **Boolean:** representa un valor lógico y puede tener dos valores, ya sean **true** o **false**.&#x20;

```javascript
console.log(typeof true);

// boolean
```

* **Number:** permite representar y manipular valores numéricos como «37» o «-9.25».

```javascript
console.log(typeof 42);

// number
```

* **String:** representa datos textuales (cadenas de caracteres).

```javascript
console.log(typeof 'MZ');

// string
```

* **BigInt:** representa valores numéricos que son demasiado grandes para ser representados por el tipo de dato **number**.

```javascript
console.log(typeof 1234567890123456789n);

// bigint
```

* **Symbol:** es un valor primitivo único e inmutable.

```javascript
console.log(typeof Symbol(1));

// symbol
```

#### Otros tipos de datos de JavaScript

* **Null:** representa la ausencia intencional de cualquier valor, un valor nulo o «vacío».
* **Object:** representa una colección de datos definidos y entidades más complejas.

```javascript
console.log(typeof {});

//object
```

* **Function:** es una forma abreviada para funciones, aunque cada constructor de funciones se deriva del constructor **Object**. Son objetos con la capacidad de ser ejecutables.

```javascript
console.log(typeof function() {});

// function
```

## ¿Cuáles son las tres funciones de String en JS?

#### 1. String.split()

Divide una cadena en un arreglo de subcadenas de la cadena original a partir de un carácter separado.

```javascript
let cadena = "Hola,mundo,JavaScript";
console.log(cadena.split(","));

// (3) ['Hola', 'mundo', 'JavaScript']
```

#### 2. String.substring()

Extrae caracteres desde un índice A hasta un índice B sin incluirlo

```javascript
let cadena = "Hola";
console.log(cadena.substring(0,3));

// Hol
```

#### 3. String.trim()

Elimina espacios en blanco al inicio y al final de una cadena:

```javascript
let cadena = "   Hola   ";
console.log(cadena.trim());

// Hola
```

## ¿Qué es un condicional?

En el mundo de la programación, a menudo necesitamos que nuestro código tome decisiones basadas en ciertas condiciones. Aquí es donde entra en juego el condicional _if_ en JavaScript.

### Condicional if.

El condicional _if_ evalúa una expresión y, si esa expresión es verdadera, ejecuta un bloque de código. La estructura básica del condicional _if_ es simple y directa.

```
// Sintaxis
```

```javascript
/if (condición) {
    // Código a ejecutar si la condición es verdadera
}
```

#### Ejemplos:

#### Verificar si un número es mayor que 10.

```javascript
let numero = 15;
if (numero > 10) {
    console.log("El número es mayor que 10.");
}

// El número es mayor que 10.
```

#### Verificar si un número es positivo

```javascript
let numero = 5;
if (numero > 0) {
    console.log("El número es positivo.");
}

// El número es positivo.
```

#### Comprobar si una palabra es "hola"

```javascript
let palabra = "hola";
if (palabra === "hola") {
    console.log("La palabra es hola.");
}

// La palabre es hola.
```



#### Verificar si un estudiante pasó el examen

```javascript
let nota = 85;
if (nota >= 60) {
    console.log("El estudiante pasó el examen.");
}

// El estudiante pasó el examen.
```

#### Verificar si un número es par o impar

<pre class="language-javascript"><code class="lang-javascript"><strong>let numero = 7;
</strong>if (numero % 2 === 0) {
    console.log("El número es par.");
}

if (numero % 2 !== 0){
    console.log("El número es impar.");
}

// El número es impar.
</code></pre>

### Condicional if - else.

Imagina que está en una encrucijada y debe tomar una decisión basada en una condición. Si se cumple una condición, tomas el camino de la izquierda; de lo contrario, tomas el camino de la derecha. Esa es precisamente la esencia del condicional _if-else_.

```
// Sintaxis
```

```javascript
 if (condición) {
    // Código a ejecutar si la condición es verdadera
    } else {
    // Código a ejecutar si la condición original es falsa
    }
```

#### Ejemplos:

#### Determinar el tipo de suscripción en una plataforma.

<pre class="language-javascript"><code class="lang-javascript">let horasVistas = 50;
<strong>if (horasVistas > 40) {
</strong>     console.log("Recomendamos la suscripción Premium.");
}
else {
     console.log("Una suscripción Estándar es suficiente para ti.");
}

// Recomendamos la suscripción Premium.
</code></pre>

#### Verificar si un usuario puede acceder a un contenido exclusivo.

```javascript
let esMiembro = true;
let tieneCupon = false;

if (esMiembro || tieneCupon) {
   console.log("¡Puedes acceder al contenido exclusivo!");
} else {
   console.log("Lo sentimos, necesitas ser miembro o tener un cupón.");
}

// ¡Puedes acceder al contenido exclusivo!
```

#### Determinar el descuento aplicado en una tienda en línea

```javascript
let esEstudiante = true;
let esPrimerCompra = false;

if (esEstudiante || esPrimerCompra) {
    console.log("Tienes un 10% de descuento.");
} else {
    console.log("No tienes descuentos disponibles.");
}
    
// Tienes un 10% de descuento.
```

## ¿Qué es un operador ternario?

El operador condicional (ternario) es el único **operador en JavaScript** que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if. Siendo un condicional simple que ejecuta una de dos instrucciones posibles dependiendo de la evaluación previa de una condición.

**Sintaxis**

```javascript
condición ? expresión1 : expresión2;
```

**Parámetros**

* **Condición**.- Expresión que se puede evaluar como verdadera o falsa.
* **Expresión 1 y 2**.- Expresiones con valores definidos que pueden ejecutarse dependiendo de la condición.

**Forma de uso**

```javascript
variable = expresion ? true_value : false_value;
```

Esto permite básicamente una asignación condicional a una variable en función de la evaluación de la expresión. Si es cierto, entonces true\_value se asigna a la variable, caso contrario, entonces false\_value se asigna a la variable.

**Ejemplos**

```javascript
var max = ( num1 > num2 ) ? num1 : num2 ;
```

En este ejemplo es , max para ser asignado el número con el valor más alto . La expresión indica que si num1 es mayor que num2, entonces num1 se asigna a max . Si, sin embargo, la expresión es falsa ( lo que significa que num2 es menor o igual a num1 ), a continuación, num2 se asigna a máx .

```javascript
var miEdad = 24;
var mayorEdad = (miEdad > 18) ? “Sí, eres mayor de edad” : “No, sigue intentando”;
```

En este segundo ejemplo vemos cómo reconocer un dato si es mayor a 18, y asignar a la variable un string, con dos posibilidades.

```javascript
var diaFeriado = true;
“Hoy debo pagar ” + ( diaFeriado ? “19 pesos” : “15 pesos”);
```

En este otro caso evaluamos una expresión booleana, y se obtiene un string el cual posteriormente es concatenado a otro.

Podemos usar también el operador ternario con una estructura más larga.

```javascript
var a = 11;
var numeroObtenido = a == 5 ? ‘Cinco’ :
                    a == 7 ? ‘Siete’:
                    a == 11 ? ‘Once’:
                    a == 15 ? ‘Quince’:
                    'Otro Número;

console.log( numeroObtenido ); // Once
```

En este caso, ampliamos el uso del condicional ternario, donde cuando la primera condición evaluada no es verdadera, optamos por establecer una nueva condición y seguir el ciclo anterior.



## ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

## ¿Qué es la palabra clave "this" en JS?
