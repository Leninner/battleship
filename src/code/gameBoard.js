//Create board
const width = 10;

const createBoards = (grid, squares) => {
  for (let i = 0; i < width ** 2; i++) {
    const square = document.createElement('div');
    square.dataset.id = i;
    grid.appendChild(square);
    squares.push(square);
  }
};

export { createBoards };
