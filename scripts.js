// const/let

const btnRating = document.querySelectorAll('.btnRating');
const btnSubmit = document.querySelector('#btnSubmit');

const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const insertRating = document.querySelector('#insertRating');

let rating;

// functions

function toggleClassHidden(element) {
  element.classList.toggle('hidden');
}

// btnRating(1-5)

btnRating.forEach(btn =>
  btn.addEventListener('click', function (e) {
    rating = Number(e.target.value);
  })
);

// btnSubmit

btnSubmit.addEventListener('click', function (e) {
  if (!rating) return;

  insertRating.append(rating);

  toggleClassHidden(page1);
  toggleClassHidden(page2);
});
