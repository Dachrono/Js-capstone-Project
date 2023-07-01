import counterLikes from '../modules/counterLikes.js';

describe('Test for like counters', () => {
  test('should return 0 dont have likes', () => {
    document.body.innerHTML = `
      <div class="card" id='1'>
        <p class='likeCount'>0</p>
      </div>
    `;
    counterLikes(1);
    const counter = document.getElementById('1').querySelector('.likeCount');
    expect(counter.textContent.toString()).toBe('0');
  });
});

describe('Test for like counters', () => {
  test('should return 1 when the pokemon recibe a like', () => {
    document.body.innerHTML = `
        <div class="card" id='1'>
          <p class='likeCount'>1</p>
        </div>
      `;
    counterLikes(1);
    const counter = document.getElementById('1').querySelector('.likeCount');
    expect(counter.textContent.toString()).toBe('1');
  });
});

describe('Test for like counters', () => {
  test('should return 4 when the pokemon have 4 likes', () => {
    document.body.innerHTML = `
          <div class="card" id='1'>
            <p class='likeCount'>4</p>
          </div>
        `;
    counterLikes(1);
    const counter = document.getElementById('1').querySelector('.likeCount');
    expect(counter.textContent.toString()).toBe('4');
  });
});