import { Gameboard } from '../code/gameBoard';

test('Debe devolver la posición de golpe: ', () => {
  const len = Gameboard(0, 0);
  expect(len.toggleHit(len.getX(), len.getY())).toBe(0);
  const mat = Gameboard(1, 0);
  expect(mat.toggleHit(mat.getX(), mat.getY())).toBe(0);
  const pepe = Gameboard(0, 1);
  expect(pepe.toggleHit(pepe.getX(), pepe.getY())).toBe(1);
});
