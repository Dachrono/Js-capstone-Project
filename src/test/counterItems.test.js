import counterItems from '../modules/counterItems.js';

describe('Test items counter', () => {
  test('Should return 0 when there are not cards', () => {
    const result = counterItems();
    expect(result).toBe(0);
  });

  test('Should return one when home have 1 card', () => {
    const card = document.createElement('div');
    card.classList.add('card');
    document.body.appendChild(card);
    const result = counterItems();
    expect(result).toBe(1);
    card.remove();
  });

  test('Should return the number of cards created', () => {
    for (let i = 0; i < 3; i += 1) {
      const card = document.createElement('div');
      card.classList.add('card');
      document.body.appendChild(card);
    }
    const result = counterItems();
    expect(result).toBe(3);
  });
});