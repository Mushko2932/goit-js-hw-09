import Notiflix from 'notiflix';

// отримуємо посилання
const refs = {
  formValue: document.querySelector('.form'),
  inputDelay: document.querySelector('name[delay]'),
  inputStep: document.querySelector('name[step]'),
  inputAmount: document.querySelector('name[amount]'),
  btnCreate: document.querySelector('type[submit]'),
};

// вішаємо слухача
refs.formValue.addEventListener('submit', onSubmitForm);

// створюємо ф-ю на момент сабміту форми
function onSubmitForm(e) {
  e.preventDefault();

  let delay = Number(refs.formValue.delay.value);

  for (let i = 1; i <= refs.formValue.amount.value; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += Number(refs.formValue.step.value);
  }
}

// повертаємо один проміс
function createPromise(position, delay) {
  const object = { position, delay };
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(object);
      } else {
        // Reject
        reject(object);
      }
    }, delay);
  });
}

