import flatpickr from 'flatpickr';
import { convertMs } from './converter';
import {addLeadingZero} from './converter';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const DELAY = 1000;

// отримуємо посилання
const refs = {
  inputValue: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  timerValue: document.querySelector('.timer'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.btnStart.disabled = true;

// використовуємо бібліотеку flatpickr
flatpickr('input#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      checkingSelectedDate(selectedDates[0]);
  },
});

// обробляємо дату, обрану користувачем
function checkingSelectedDate(selectedDates) {
  const currentDate = new Date();

  if (selectedDates <= currentDate) {
    Notiflix.Notify.warning('Please choose a date in the future');
    refs.btnStart.disabled = true;
  }
  refs.btnStart.disabled = false;
}

// додаємо слухачів
refs.inputValue.addEventListener('click', e => {
  e.preventDefault();
  //   console.log(e.target.value);
});

refs.btnStart.addEventListener('click', () => {
  // відлік часу
    const timer = setInterval(() => {
      let countdown = new Date(refs.inputValue.value) - new Date();
      refs.btnStart.disabled = true;
      if (countdown >= 0) {
        const timeConvert = convertMs(countdown);

        // додавати 0, якщо в числі менше двох символів
        refs.days.textContent = addLeadingZero(timeConvert.days);
        refs.hours.textContent = addLeadingZero(timeConvert.hours);
        refs.minutes.textContent = addLeadingZero(timeConvert.minutes);
        refs.seconds.textContent = addLeadingZero(timeConvert.seconds);
      }

      // зупиняємо таймер, коли дійшов до кінцевої дати
      if (refs.minutes.textContent === 0 && refs.seconds.textContent === 0) {
        Notiflix.Notify.success('sale time has arrived');
        clearInterval(timer);
      }
    }, DELAY);
});



