function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const DELAY = 1000;

const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

let colorChangeInterval = null;
refs.stop.disabled = true;

const startChangeBackground = () => {
    refs.start.disabled = true;
    refs.stop.disabled = false;

    colorChangeInterval = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, DELAY);
};

const stopChangeBackgroud = () => {
    refs.stop.disabled = true;
    refs.start.disabled = false;

    clearInterval(colorChangeInterval);
};

refs.start.addEventListener('click', startChangeBackground);
refs.stop.addEventListener('click', stopChangeBackgroud);
