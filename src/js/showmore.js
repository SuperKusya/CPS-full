var btnsShowMore = document.querySelectorAll('.showmore');

for(let i = 0; i < btnsShowMore.length; i++) {
    btnsShowMore[i].addEventListener('click', function () {
        var parentClass = btnsShowMore[i].parentNode.parentNode.classList.item(0);
        var container =  btnsShowMore[i].parentNode.querySelector(`.${parentClass}__list`);
        container.classList.toggle(`${parentClass}__list--show`);
        btnsShowMore[i].classList.toggle('showmore--show');
    });
}
