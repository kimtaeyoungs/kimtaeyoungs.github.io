var title = document.querySelector("#intro .title");
window.addEventListener("wheel", go);

var offset = 0;
var sectionCounter = 0;

function go(e){
    if(e.wheelDelta < 0){
        console.log(e.wheelDelta, "아래로")
        sectionCounter++;
    }else{
        console.log(e.wheelDelta, "위로")
        sectionCounter--;
    }

    offset = innerHeight * sectionCounter;
    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");
}





$('html, body').css({'overflow': 'hidden', 'height': '100%'});
$('#element').on('scroll touchmove mousewheel', function(event) {
event.preventDefault();
event.stopPropagation();
return false;
});
