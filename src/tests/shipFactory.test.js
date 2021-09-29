import { Ship } from '../shipFactory';

test('Si es que recibe golpes, el tamaño debe diminuir: ', () => {
  const star = Ship(4);
  expect(star.hit(1)).toBe(3);
  expect(star.hit(1)).toBe(2);
  expect(star.hit(1)).toBe(1);
});

test('Si el tamaño es menor o igual a cero, entonces devolver true: ', () => {
  const star = Ship(2);
  expect(star.hit(1)).toBe(1);
  expect(star.hit(1)).toBe(true);
});
