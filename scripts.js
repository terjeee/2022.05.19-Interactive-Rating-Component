const btnRating = document.querySelectorAll('.btnRating');
const btnSubmit = document.querySelector('#btnSubmit');

let rating;

btnRating.forEach(btn =>
  btn.addEventListener('click', function (event) {
    rating = event.target.value;
  })
);
