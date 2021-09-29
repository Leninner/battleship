import { Ship } from './shipFactory.js';

//Debo enviar coordenadas al momento de desplegar cada figura en el tablero de juego

const star = document.querySelector('.star');
const doBoard = (elemento, board) => {
  //Añado evento de escucha a cada cajita a través de delegación de eventos
  elemento.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'prueba') {
      e.target.classList.add('active');
    }
  });

  board.forEach((element) => {
    element.forEach((element) => {
      let doit = document.createElement('div');
      // doit.addEventListener('dragenter', () => {
      //   console.log('Drag Enter');
      // });
      // doit.addEventListener('dragleave', () => {
      //   console.log('Drag Leave');
      // });
      // doit.addEventListener('dragover', (e) => {
      //   // Prevenir el efecto por defecto del navegador
      //   e.preventDefault();
      //   console.log('Drag Over');
      // });
      // doit.addEventListener('drop', () => {
      //   console.log('Drop');
      //   doit
      // });
      doit.classList.add('prueba');
      doit.setAttribute('id', element);
      elemento.append(doit);
    });
  });
};

const Gameboard = (name) => {
  const getName = () => name;

  const displayBoard = (board, name) => {
    if (name === 'user') {
      const user = document.querySelector(`.user`);
      doBoard(user, board);
    } else {
      const com = document.querySelector('.com');
      doBoard(com, board);
    }
  };

  const toggleHit = (x, y) => {
    return board[x][y];
  };

  const receiveAttack = (cord) => alert(cord);

  return { toggleHit, displayBoard, getName };
};

export { Gameboard };
