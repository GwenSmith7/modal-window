'use strict';

// store elements in variables

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// functions

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  //console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// saving each modal window in a variable
const btnOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++) {
  // clicking any Show Modal button will make the modal window pop-up with overlay
  btnOpenModal[i].addEventListener('click', openModal);
}

// if the X is clicked, the modal window will close and overlay is removed
btnCloseModal.addEventListener('click', closeModal);

// closes the modal window when clicking outside of the box
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
