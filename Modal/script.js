"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
/* using the querySelectorAll to select all the elements with the given class */

/* Removing the hidden class from modal and overlay inorder to make them visible */
const openModal = function () {
  /* accessing the classes of an element using classList */
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

/* adding the hidden calss to modal and overlay inorder to hide them */
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

/* Making the ShowModal button functional when clicked */
for (let i = 0; i < btnOpenModal.length; ++i)
  btnOpenModal[i].addEventListener("click", openModal);

/* Making the Close modal button functional when clicked */
btnCloseModal.addEventListener("click", closeModal);

/* Closing the modal when user clicks anywhere except the modal i.e. on the overlay */
overlay.addEventListener("click", closeModal);

/* Closing the modal using the ESC key
   For keyboard key events we don't have a specific element thus we listen on the whole document.
   We use the keydown event which means pressing a keyboard key once
*/
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
