//Calcular el area y perimetro de un rectangulo
const base = 8;
const altura = 4;
const area = base * altura;
const perimetro = 2 * (base + altura);
console.log (`Area: ${area} cm²`);
console.log (`Perímetro: ${perimetro} cm`);

// Saber si un número es par o impar usando el operador %
const numero = 7;
const esPar = numero % 2 === 0;
console.log(`¿${numero} es par?: ${esPar}`);

//Calcular el promedio de tres notas
const nota1 = 80;
const nota2 = 90;
const nota3 = 70;
const promedio = (nota1 + nota2 + nota3) / 3;
console.log(`Promedio: ${promedio}`);

//Area de in triangulo
const Base = 10; 
const Altura = 5;
const AreaTriangulo = (Base * Altura) / 2;
console.log(`Area del triangulo: ${AreaTriangulo} cm²`);

//area de un circulo
const radio = 3;
const areaCirculo = radio * radio * Math.PI;
console.log(`Area del circulo: ${areaCirculo.toFixed(2)} cm²`);

//Volumen de un circulo (lado³) usando el operador **
const lado = 4;
const volumenCubo = lado ** 3;
console.log(`Volumen del cubo: ${volumenCubo} cm³`);


