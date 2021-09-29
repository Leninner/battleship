/**
 * longitud, dónde han sido golpeados y si se han hundido o no.
 */

const Ship = (arr) => {
  const getSize = () => arr;
  const getName = () => name;

  const hit = (position) => {
    arr[position] = -1;
  };

  const isSunk = () => {
    return arr.every((element) => element === -1) ? true : false;
  };

  return { getSize, getName, hit, isSunk };
};

// En cada golpe, debemos comprobar si está hundido o sigue vivo

export { Ship };
