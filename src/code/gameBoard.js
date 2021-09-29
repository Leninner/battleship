import { Ship } from './shipFactory.js';

//Debo enviar coordenadas al momento de desplegar cada figura en el tablero de juego

const len = Ship([1, 1, 1, 1], 'Buque');

len.hit(2);
console.log(len.isSunk());
console.log(len.getSize());
console.log(len.getName());
