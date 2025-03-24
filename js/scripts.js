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
