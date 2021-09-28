/**
 * longitud, dónde han sido golpeados y si se han hundido o no.
 */

const Ship = (length) => {
  const getLength = () => length;

  const hit = () => 1;

  const sunk = (damage) => {
    length -= damage;
    return length - damage <= 0 ? true : false;
  };

  return { getLength, hit, sunk };
};

const star = Ship(4);
const lenin = Ship(2);

console.log(star.sunk(lenin.hit()));
console.log(star.getLength());
console.log(star.sunk(lenin.hit()));
console.log(star.getLength());
console.log(star.sunk(lenin.hit()));
console.log(star.getLength());
console.log(star.sunk(lenin.hit()));
console.log(star.getLength());
