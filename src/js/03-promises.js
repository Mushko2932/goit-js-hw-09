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
refs.formValue.addEventListener('submit', createPromise);
refs.btnCreate.addEventListener('click', () => {
  console.log('click')
})

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
