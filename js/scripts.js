const values = [6, 3, 9, 7, 5, 90, 23, 15, 64];

const printFirst10Numbers = () => {
  for (let i = values.length; i >= 0; i--) {
    //siempre se pone un length cuando se trata de recorrer un array para que pueda ser escalable, nunca un numero.
    console.log(values[i]);
  }
};

printFirst10Numbers();

console.log('----------------');

const values2 = [6, 3, 9, 7, 5, 90, 23, 15, 64];

const printFirstNumbers = () => {
  for (let i = 0; i < values2.length; i++) {
    console.log(values2[i]);
  }
};

printFirstNumbers();

console.log('----------------');

const values3 = [6, 3, 9, 7, 5, 90, 23, 15, 64];
const sentence = 'Es hora de llorar';

const printNumbers = () => {
  // FOR OF ya sabe donde empiez y donde termina
  for (const value of values) {
    console.log(value);
  }
};
printNumbers();

const printLetter = () => {
  // por cada índice del array o string
  for (const letter of sentence) {
    console.log(letter);
  }
};

printLetter();

// 1️⃣ Camila está revisando una lista de nombres, (por ejemplo: ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía']). Debe imprimir cada nombre en mayúsculas, uno por línea.Ejemplo salida: PEDRO ANA LUIS ELENA SOFÍA

const namesList = ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía'];

const namesToUpperCase = () => {
  for (const name of namesList) {
    console.log(name.toUpperCase());
  }
};
namesToUpperCase();

// 2️⃣ Bego tiene un array con precios. Debe sumar todos los precios usando un bucle for y mostrar el total. Ejemplo entrada: [23, 78, 45] Ejemplo salida: Total: 146
const prices = [23, 78, 45];

const addPrices = () => {
  let totalAmount = 0;

  for (const price of prices) {
    totalAmount = price + totalAmount;
  }
  console.log(totalAmount);
};
addPrices();
console.log('----------------');
// 3️⃣ Macarena quiere generar tres códigos de seguridad y almacenarlos en un array. Cada código debe ser un número aleatorio entre 1000 y 9999. Usa un bucle for para generar los códigos y luego mostrarlos. Ejemplo salida: [4356, 7890, 1234]

const generatorCode = () => {
  let numbersCode = [];
  for (let i = 0; i < 3; i++) {
    const calucalteNumber = Math.floor(Math.random() * (9999 - 1000) + 1000);
    numbersCode.push(calucalteNumber);
  }
  console.log(numbersCode);
};
generatorCode();

// 4️⃣ Abby encontró una lista de suministros en un refugio: ['Agua', 'Munición', 'Botiquín', 'Czst']. Debe comprobar si todos los elementos contienen al menos una vocal. Ejemplo salida: Agua contiene vocales. Munición contiene vocales. Botiquín contiene vocales. Czst no contiene vocales.

// 5️⃣ Bego está calculando precios con descuento. Tiene un array con precios, (por ejemplo [150, 300, 50]). Si el precio es mayor a 100, aplica un 20% de descuento, si no, un 10%. Usa un bucle para mostrar cada precio original, descuento aplicado y precio final. Ejemplo salida: Precio original: 150 - Descuento aplicado: 30 - Precio final: 120 Precio original: 300 - Descuento aplicado: 60 - Precio final: 240 Precio original: 50 - Descuento aplicado: 5 - Precio final: 45

// 7️⃣ Sabrina quiere verificar cuántos números aleatorios generados entre 1 y 100 son múltiplos de 3. Haz una función que haga esta comprobación con 10 números. Ejemplo salida: Números generados: [12, 35, 75, 9, 27, 4, 6, 88, 15, 3] Múltiplos de 3 encontrados: 7

// 8️⃣ Macarena tiene un array con tres nombres y debe crear un array nuevo con las iniciales de cada nombre en mayúsculas usando un bucle. Ejemplo entrada: ['Pedro', 'Ana', 'Luis'] Ejemplo salida: ['P', 'A', 'L']

// 9️⃣ Abby está revisando mensajes cifrados. Tiene un array con palabras (cantidad y palabras a tu elección) que deben invertirse y mostrarse en minúsculas. Usa un bucle para procesarlas todas. Investiga sobre las funciones split(), reverse() y join( Ejemplo entrada: ['FUEGO', 'REFUGIO', 'SUMINISTROS'] Ejemplo salida: ['oguef', 'oiguref', 'sotsinimus']  //Este es el del split

// 🔟 Camila quiere generar un código de acceso combinando letras aleatorias y números. Usa un bucle para crear un string aleatorio de 6 caracteres sacados de 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'. Ejemplo salida: 'A3P9K8'

// 1️⃣1️⃣ Macarena quiere crear un sistema que genere combinaciones de nombres y apellidos. Tiene dos arrays: ['Juan', 'Ana', 'Luis'] y ['Pérez', 'Martínez', 'García']. Debe generar todos los nombres posibles combinando uno de cada array.Ejemplo salida: Juan Pérez Juan Martínez Juan García Ana Pérez Ana Martínez Ana García Luis Pérez Luis Martínez Luis García

// 1️⃣2️⃣ Abby quiere comprobar si al menos uno de los números generados aleatoriamente entre 1 y 100 es divisible por 5. Genera 5 números y muestra si se cumple la condición. Ejemplo salida: Números generados: [23, 45, 67, 12, 90] Números divisibles por 5 encontrados: [45, 90]

// 1️⃣3️⃣ Camila tiene un array con nombres y quiere mostrar sólo aquellos que tienen más de 4 letras. Ejemplo entrada: ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía'] Ejemplo salida: ['Pedro', 'Elena', 'Sofía']

// 1️⃣4️⃣ Bego tiene un array con tres palabras y quiere mostrar todas las combinaciones posibles de esas palabras usando dos palabras a la vez y cuyas combinaciones no repitan la palabra. Ejemplo entrada: ['Sol', 'Luna', 'Estrella' Ejemplo salida: Sol Luna Sol Estrella Luna Sol Luna Estrella Estrella Sol Estrella Luna

// 1️⃣5️⃣ Sabrina quiere generar un nombre de usuario aleatorio combinando una consonante, una vocal y un número aleatorio entre 1 y 99. Debe hacerlo 5 veces y mostrar los resultados. Ejemplo salida: ['MA87', 'RO56', 'LE23', 'FI99', 'PU12']

// 1️⃣6️⃣ Abby tiene problemas con las tablas de multiplicar, quiere hacer 2 funciones que reciban un número y le impriman la tabla de multiplicar de ese número desde hasta el 10 una en orden descendente y otra en orden ascendente.
