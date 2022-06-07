function fullScreen(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    }
}

window.onload = function() {
    imgs = document.getElementById('slideshow').children;
    picInterval = 15000;
    currentPic = 0;
    imgs[currentPic].style.animation = 'fadeImg '+picInterval+'ms';

    setInterval(function(){
        imgs[currentPic].removeAttribute('style');
        if ( currentPic == imgs.length - 1) {
            currentPic = 0; 
        } else { 
            currentPic++; 
        }
        imgs[currentPic].style.animation = 'fadeImg '+picInterval+'ms';
    }, picInterval);
}
