// Función de fábrica para crear las naves, llamar al elemento HTML correcta dentro de la función y ready;
import { shipss } from './code/shipFactory.js';
import { createBoards } from './code/gameBoard.js';

const userSquares = [];
const computerSquares = [];
const userGrid = document.querySelector('.grid-user');
const computerGrid = document.querySelector('.grid-computer');
const displayGrid = document.querySelector('.grid-display');
const ships = document.querySelectorAll('.ship');
// const destroyer = document.querySelector('.destroyer-container');
// const submarine = document.querySelector('.submarine-container');
// const cruiser = document.querySelector('.cruiser-container');
// const battleship = document.querySelector('.battleship-container');
// const carrier = document.querySelector('.carrier-container');
const destroyer = shipss('destroyer');
const submarine = shipss('submarine');
const cruiser = shipss('cruiser');
const battleship = shipss('battleship');
const carrier = shipss('carrier');
const startButton = document.getElementById('start');
const rotateButton = document.getElementById('rotate');
const turnDisplay = document.querySelector('#whose-go');
const infoDisplay = document.querySelector('#info');
const width = 10;
let isHorizontal = true;

createBoards(userGrid, userSquares);
createBoards(computerGrid, computerSquares);

// Para crear ships random en el grid de la computadora
const shipArray = [
  {
    name: destroyer.getName(),
    directions: destroyer.getDirections(),
  },
  {
    name: submarine.getName(),
    directions: submarine.getDirections(),
  },
  {
    name: cruiser.getName(),
    directions: cruiser.getDirections(),
  },
  {
    name: battleship.getName(),
    directions: battleship.getDirections(),
  },
  {
    name: carrier.getName(),
    directions: carrier.getDirections(),
  },
];

// Dibujar ships en location random
const generate = (ship) => {
  let randomDirection = Math.floor(Math.random() * ship.directions.length);
  let current = ship.directions[randomDirection];
  let direction;
  if (randomDirection === 0) direction = 1;
  if (randomDirection === 1) direction = 10;

  let randomStart = Math.abs(
    Math.floor(Math.random() * computerSquares.length - ship.directions[0].length * direction)
  );

  const isTaken = current.some((index) => computerSquares[randomStart + index].classList.contains('taken'));
  const isAtRightEdge = current.some((index) => (randomStart + index) % width === width - 1);
  const isAtLeftEdge = current.some((index) => (randomStart + index) % width === 0);

  if (!isTaken && !isAtLeftEdge && !isAtRightEdge) {
    current.forEach((element) => computerSquares[randomStart + element].classList.add('taken', ship.name));
  } else {
    generate(ship);
  }
};

generate(shipArray[0]);
generate(shipArray[1]);
generate(shipArray[2]);
generate(shipArray[3]);
generate(shipArray[4]);

// Función para rotar las naves

const rotate = () => {
  if (isHorizontal) {
    destroyer.getElement().classList.toggle('destroyer-container-vertical');
    submarine.getElement().classList.toggle('submarine-container-vertical');
    cruiser.getElement().classList.toggle('cruiser-container-vertical');
    battleship.getElement().classList.toggle('battleship-container-vertical');
    carrier.getElement().classList.toggle('carrier-container-vertical');
    displayGrid.classList.toggle('isHorizontal');
    isHorizontal = false;
  }
  isHorizontal = true;
};

rotateButton.addEventListener('click', rotate);

// Mover al grid del usuario con API Drag and Drop de HTML

ships.forEach((element) => {
  element.addEventListener('dragstart', dragStart);
});

userSquares.forEach((square) => {
  square.addEventListener('dragstart', dragStart);
  square.addEventListener('dragover', dragOver);
  square.addEventListener('dragenter', dragEnter);
  square.addEventListener('dragleave', dragLeave);
  square.addEventListener('drop', dragDrop);
  square.addEventListener('dragend', dragEnd);
});

let selectedShipNameWithIndex;

ships.forEach((element) => {
  element.addEventListener('mousedown', (e) => {
    selectedShipNameWithIndex = e.target.id;
  });
});

let draggedShip;
let draggedShipLength;

function dragStart(e) {
  draggedShip = this;
  for (let i = 0; i < draggedShip.childNodes.length; i++) {
    if (draggedShip.childNodes[i].nodeType === 3) {
      draggedShip.childNodes[i].parentNode.removeChild(draggedShip.childNodes[i]);
    }
  }
  console.log(draggedShip.lastChild.id);
  draggedShipLength = draggedShip.childNodes.length;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  console.log('drag leave');
}

// TODO: sHacer tests para esta función y para los otros módulos
function dragDrop() {
  //Para ver en donde estará el último elemento de  nuestra nave
  let shipNameWithLastId = draggedShip.lastChild.id;
  let shipClass = shipNameWithLastId.slice(0, -2);
  let lastShipIndex = parseInt(shipNameWithLastId.substr(-1));
  let shipLastId = lastShipIndex + parseInt(this.dataset.id);
  let selectedShipIndex = parseInt(selectedShipNameWithIndex.substr(-1));
  shipLastId = shipLastId - selectedShipIndex;
  console.log(shipLastId);
}

function dragEnd() {}
