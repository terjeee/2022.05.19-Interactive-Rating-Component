const btnRating = document.querySelectorAll('.btnRating');
const btnSubmit = document.querySelector('#btnSubmit');

const page1 = document.querySelector('#page1');

let rating;

// eventListener på btnRating(1-5)

btnRating.forEach(btn =>
  btn.addEventListener('click', function (e) {
    rating = e.target.value;
  })
);

// eventListener på btnSubmit

btnSubmit.addEventListener('click', function (e) {
  if (!rating) return;

  page1.classList.add('hidden');
});
