const userGrid = document.querySelector('.grid-user');
const computerGrid = document.querySelector('.grid-computer');
const displayGrid = document.querySelector('.grid-display');
const ships = document.querySelectorAll('.ship');
const destroyer = document.querySelector('.destroyer-container');
const submarine = document.querySelector('.submarine-container');
const cruiser = document.querySelector('.cruiser-container');
const battleship = document.querySelector('.battleship-container');
const carrier = document.querySelector('.carrier-container');
const startButton = document.getElementById('start');
const rotateButton = document.getElementById('rotate');
const turnDisplay = document.querySelector('#whose-go');
const infoDisplay = document.querySelector('#info');
const userSquares = [];
const computerSquares = [];
const width = 10;

// Función de fábrica para crear las naves, llamar al elemento HTML correcta dentro de la función y ready;
const shipss = (name) => {
  const getName = () => name;
  return { getName };
};
const destroyers = shipss('destroyer');

//Create board
const createBoards = (grid, squares) => {
  for (let i = 0; i < width ** 2; i++) {
    const square = document.createElement('div');
    square.dataset.id = i;
    grid.appendChild(square);
    squares.push(square);
  }
};

createBoards(userGrid, userSquares);
createBoards(computerGrid, computerSquares);

// Para crear ships random en el grid de la computadora
const shipArray = [
  {
    name: 'destroyer',
    directions: [
      [0, 1],
      [0, width],
    ],
  },
  {
    name: 'submarine',
    directions: [
      [0, 1, 2],
      [0, width, width * 2],
    ],
  },
];

console.log(shipArray);
