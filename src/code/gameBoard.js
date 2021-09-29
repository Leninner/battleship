import { Ship } from './shipFactory.js';

//Debo enviar coordenadas al momento de desplegar cada figura en el tablero de juego

const Gameboard = (name) => {
  const getName = () => name;
  const displayBoard = (board, name) => {
    if (name === 'user') {
      const user = document.querySelector('.user');
      user.addEventListener('click', (e) => {
        if (e.target.classList[0] === 'prueba') {
          e.target.classList.add('active');
        }
      });

      board.forEach((element) => {
        element.forEach((element) => {
          let doit = document.createElement('div');
          doit.classList.add('prueba');
          user.append(doit);
        });
      });
    } else {
      const com = document.querySelector('.com');
      com.addEventListener('click', (e) => {
        if (e.target.classList[0] === 'prueba') {
          e.target.classList.add('active');
        }
      });

      board.forEach((element) => {
        element.forEach((element) => {
          let doit = document.createElement('div');
          doit.classList.add('prueba');
          com.append(doit);
        });
      });
    }
  };

  const toggleHit = (x, y) => {
    return board[x][y];
  };

  const receiveAttack = (cord) => alert(cord);

  return { toggleHit, displayBoard, getName };
};
export { Gameboard };
