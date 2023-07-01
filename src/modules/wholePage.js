const liItem = (desc) => {
  const ul = document.querySelector('.navBar');
  const uLi = document.createElement('li');
  uLi.className = 'navItem';
  ul.appendChild(uLi);
  const tagA = document.createElement('a');
  tagA.href = '#';
  tagA.textContent = `${desc}`;
  uLi.appendChild(tagA);
};

export const header = () => {
  const header = document.createElement('header');
  header.classList.add('header', 'p-fix');
  document.body.appendChild(header);

  const container = document.querySelector('.header');
  const box = document.createElement('div');
  box.classList = 'container';
  container.appendChild(box);

  const logo = document.createElement('img');
  logo.className = 'logo';
  logo.alt = 'pokemon logo';
  box.appendChild(logo);

  const uList = document.createElement('ul');
  uList.className = 'navBar';
  box.appendChild(uList);

  liItem('Pokemon');
  liItem('Locations');
  liItem('Items');
};

export const main = () => {
  const main = document.createElement('main');
  main.classList.add('main');
  for (let i = 0; i < 3; i += 1) {
    if (i === 0) {
      const container = document.createElement('section');
      container.classList.add('container', 'grid', 'pokeCards');
      main.append(container);
    } else if (i === 1) {
      const container = document.createElement('section');
      container.classList.add('container', 'locationCards', 'hidden');
      main.append(container);
    } else if (i === 2) {
      const container = document.createElement('section');
      container.classList.add('container', 'itemCards', 'hidden');
      main.append(container);
    }
  }

  document.body.appendChild(main);
};

export const footer = () => {
  const footer = document.createElement('footer');
  const container = document.createElement('div');

  footer.classList.add('footer', 'p-fix');
  container.classList.add('container');
  container.innerHTML = '<p>Created By Anthony Vásquez and Andrés Zamorano CC License</p>';
  footer.appendChild(container);
  document.body.appendChild(footer);
};
