function fullScreen(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    }
}

window.onload = function () {
    imgs = document.getElementById('slideshow').children;
    picInterval = 2000;
    currentPic = 0;
    imgs[currentPic].style.animation = 'fadeImg ' + picInterval + 'ms';

    setInterval(function () {
        imgs[currentPic].removeAttribute('style');
        if (currentPic == imgs.length - 1) {
            currentPic = 0;
        } else {
            currentPic++;
        }
        imgs[currentPic].style.animation = 'fadeImg ' + picInterval + 'ms';
    }, picInterval);
}

//INDEX 2
var index = 0;
slideshow();

function slideshow() {
    var i;
    var pics = document.getElementsByClassName("slides");
    for (i = 0; i < pics.length; i++) {
        pics[i].style.display = "none";
    }
    index++;
    if (index > pics.length) { index = 1 }
    pics[index - 1].style.display = "block";
    setTimeout(slideshow, 5000);
}