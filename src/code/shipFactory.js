const width = 10;

const shipss = (name) => {
  let elementoHTML;
  let X;
  let Y;
  switch (name) {
    case 'destroyer':
      elementoHTML = document.querySelector('.destroyer-container');
      X = [0, 1];
      Y = [0, width];
      break;
    case 'submarine':
      elementoHTML = document.querySelector('.submarine-container');
      X = [0, 1, 2];
      Y = [0, width, width * 2];
      break;
    case 'cruiser':
      elementoHTML = document.querySelector('.cruiser-container');
      X = [0, 1, 2];
      Y = [0, width, width * 2];
      break;
    case 'battleship':
      elementoHTML = document.querySelector('.battleship-container');
      X = [0, 1, 2, 3];
      Y = [0, width, width * 2, width * 3];
      break;
    case 'carrier':
      elementoHTML = document.querySelector('.carrier-container');
      X = [0, 1, 2, 3, 4];
      Y = [0, width, width * 2, width * 3, width * 4];
      break;
  }

  const getName = () => name;
  const getElement = () => elementoHTML;
  const getDirections = () => {
    return [X, Y];
  };

  return { getName, getElement, getDirections };
};

export { shipss };
