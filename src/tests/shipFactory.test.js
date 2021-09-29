import { Ship } from '../code/shipFactory';

test('Si es que recibe golpes, la posición debe cambiar a -1', () => {
  const star = Ship([1, 1, 1, 1], 'Pepe');
  star.hit(1);
  expect(star.getSize()).toEqual([1, -1, 1, 1]);
});

test('Si todos los elementos son igual a -1, entonces devolver true: ', () => {
  const star = Ship([1, 1, 1, 1], 'Pepe');
  star.hit(0);
  star.hit(1);
  star.hit(2);
  star.hit(3);
  expect(star.isSunk()).toBe(true);

  const starship = Ship([1, 1, 1, 1, 1, 1, 1], 'Pepe');
  starship.hit(0);
  starship.hit(1);
  starship.hit(2);
  starship.hit(3);
  expect(starship.isSunk()).toBe(false);
});
