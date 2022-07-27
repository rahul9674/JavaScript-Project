'use strict'

const btnOpenModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(const element of btnOpenModal){
    element.addEventListener('click', openModal)
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    console.log(e.key);

    if(e.key === 'Escape' && !modal.classList.contains('.hidden')){
        closeModal();
    }
});

