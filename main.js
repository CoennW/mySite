document.addEventListener('DOMContentLoaded', function () {
    const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
        document.getElementById('horizontal').scrollLeft += 300;
      //document.querySelector('#horizontal').addEventListener('click', function () { this.scrollBy({ right: 10, top: 0, behavior: 'smooth' }) });
    };
    buttonLeft.onclick = function () {
        document.getElementById('horizontal').scrollLeft -= 300;
     
    };
});



