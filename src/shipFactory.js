/**
 * longitud, dónde han sido golpeados y si se han hundido o no.
 */

const Ship = (arr) => {
  const getSize = () => arr;

  const hit = (position) => {
    arr[position] = 0;
  };

  const isSunk = () => {
    return arr.every((element) => element === 0) ? true : false;
  };

  return { getSize, hit, isSunk };
};

const len = Ship([1, 1, 1, 1]);

len.hit(2);
console.log(len.isSunk());
len.hit(1);
len.hit(0);
len.hit(3);
console.log(len.isSunk());
console.log(len.getSize());

// En cada golpe, debemos comprobar si está hundido o sigue vivo

// export { Ship };
