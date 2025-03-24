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
  for (const value of prices) {
    console.log(value[0] + value[1] + value[2]);
  }
};
addPrices();
