
var title = document.querySelector("#intro .title");
var section = document.querySelectorAll("section");
window.addEventListener("wheel", go);
document.querySelector(".nav")
.addEventListener("click", goSection);
$(".gnb").click(goSection);
$(".nav").click(goSection);
var offset = 0;
var sectionCounter = 0;
var count = 0;
function go(e){
    count++;
    var goCount = count%5;
    if(e.wheelDelta < 0){
        if(goCount == 4 && sectionCounter < 5){
            sectionCounter++;
        }
    }else{
        if(goCount == 4 && sectionCounter > 0){
            sectionCounter--;
        }
    }
    offset = innerHeight * sectionCounter; //innerWidth, scrollLeft
    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");

    if(sectionCounter > 0){
        $(".menu").addClass("on");
    }else{
        $(".menu").removeClass("on");
    }
    console.log(sectionCounter);
    setTimeout(activeMenu,300);
}

function activeMenu(){ //휠을 이용한 메뉴이동
    section.forEach(function(ele){ele.classList.remove("on");});
    for(var i=0; i<section.length; i++){
        section[i].classList.remove("on");
    }
    section[sectionCounter].classList.add("on");
    
    $(".nav a").removeClass("on");
    $(".nav li").eq(sectionCounter).children("a").addClass("on");
    $(".gnb a").removeClass("active");
    $(".gnb li").eq(sectionCounter).children("a").addClass("active");
}

function goSection(e){// nav 메뉴
    sectionCounter = e.target.getAttribute("datanum");
    $(".nav a").removeClass("on");
    e.target.classList.add("on");
    $(".gnb a").removeClass("active");
    e.target.classList.add("active");

    offset = innerHeight * sectionCounter; //innerWidth, scrollLeft
    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");

    setTimeout(activeMenu,300);
    
}

function goSection(e){
    sectionCounter = e.target.getAttribute("datanum");
    $("nav a").removeClass("on");
    e.target.classList.add("on");

    offset = innerHeight * sectionCounter; //innerWidth, scrollLeft
    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");

    setTimeout(activeMenu,300);
  
}

// 스크롤 막기 시작
$('html, body').css({'overflow': 'hidden', 'height': '100%'});
$('#element').on('scroll touchmove mousewheel', function(event) {
event.preventDefault();
event.stopPropagation();
return false;
});
//스크롤 막기 끝

// burger
$(".burger").click(
    function(){
        $(".burger").toggleClass("on");
        $("nav").toggleClass("on");
    }
);

// 
$(".btn").click(
    function(){
        $(".btn").toggleClass("active");
        $("#profile").toggleClass("active");
        var onoff = $(".btn").hasClass("active");
        console.log(onoff);
        if(onoff){
            $(".btn-text").html("라이트모드");
        }else{
            $(".btn-text").html("다크모드");
        }
    }
);



// bx 슬라이더
$('#bxslider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 600
  });

// 
$(".box1 a").click(
    function(){
        $(".popup1").fadeIn();
    }
);
$(".box2 a").click(
    function(){
        $(".popup2").fadeIn();
    }
);
$(".box3 a").click(
    function(){
        $(".popup3").fadeIn();
    }
);
$(".close").click(
    function(){
        $(".popup").fadeOut();
    }
);