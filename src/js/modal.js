var btnCall = document.querySelectorAll('call');
var btnChat = document.querySelectorAll('chat');

var mask = document.querySelector('.mask--modal');



function closeModal(element) {
    element.classList.remove('modal--show');
    mask.classList.remove('mask--visible');

}


var modals = document.querySelectorAll('.modal');
for(let i = 0; i < modals.length; i++) {
    var btnClose = modals[i].querySelector('.modal__close');
    btnClose.addEventListener('click', () => {
        closeModal(modals[i]); 
    });

    mask.addEventListener('click', function() {
        mask.classList.remove('mask--visible');
        modals[i].classList.remove('modal--show');
    });
}

function addOpenModalEventListener(modalType) {
    var btns = document.querySelectorAll(`button.${modalType}`);
    var modal = document.querySelector(`.modal--${modalType}`);
    for(let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function() {
            modal.classList.add('modal--show');
            mask.classList.add('mask--visible');
        });
    }
}

['call', 'chat'].forEach(function(type) {
    addOpenModalEventListener(type);
});