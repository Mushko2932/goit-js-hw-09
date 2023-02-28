import flatpickr from 'flatpickr';
import convertMs from './converter';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
};

flatpickr('input#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      differenceDate(selectedDates[0]);
  },
});

function differenceDate(selectedDates) {
    const currentDate = new Date();

    if (selectedDates <= currentDate) {
        refs.btnStart.disabled = true;
        return alert('Please choose a date in the future');
    } else refs.btnStart.disabled = false;
}

refs.input.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.value);
});

refs.btnStart.addEventListener('click', () => {
    const intervalId = setInterval(() => {
      
    }, 1000);
});
