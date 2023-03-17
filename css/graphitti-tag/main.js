const tag = document.querySelector('.tag');
const letters = tag.innerText.split('');
tag.innerText = '';
letters.forEach((letter, i) => {
  const span = document.createElement('span');
  span.innerText = letter;
  span.style.animationDelay = `${i * 0.1}s`;
  tag.appendChild(span);
});