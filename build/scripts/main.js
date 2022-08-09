const buttons = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');
const tags = document.querySelector('.tags-page__tabs');
const divs = [...document.querySelectorAll('.tags__card')];

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const tag = e.target.innerHTML.slice(1);
    const result = divs.filter((div) => div.id.includes(tag));

    result.forEach((div) => {
      const clases = div.classList.value;

      if (clases.includes('tags__card-page')) {
        div.classList.remove('tags__card-page');
      } else {
        div.classList.add('tags__card-page');
      }
    });
  });
});

inputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase();
    const result = divs.filter((div) => div.id.includes(search));

    if (e.target.value !== '' && result.length > 0) {
      tags.style.display = 'none';
      result.forEach((div) => div.classList.remove('tags__card-page'));
    } else {
      tags.style.display = 'flex';
      result.forEach((div) => div.classList.add('tags__card-page'));
    }
  });
});
