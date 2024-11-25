function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const controls = document.querySelector('#controls');

createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    const boxesArray = [];
    for (let i = 0; i < amount; i += 1) {
      boxesArray.push(createBoxes(i));
    }
    input.value = '';
    boxesContainer.append(...boxesArray);
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const box = document.createElement('div');
  box.style.width = `${30 + amount * 10}px`;
  box.style.height = `${30 + amount * 10}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
