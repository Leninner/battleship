/**
 * longitud, dónde han sido golpeados y si se han hundido o no.
 */

const Ship = (length) => {
  const getLength = () => length;

  const hit = (damage) => {
    length -= damage;
    if (length === 0) {
      return sunk();
    }
    return length;
  };

  const sunk = () => {
    return true;
  };

  return { getLength, hit, sunk };
};

export { Ship };
