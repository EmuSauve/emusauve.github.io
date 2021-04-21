// Smooth Scrolling
$(function(){
    $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
});

// Navigation
$(".mobileToggleMenu").hide();

var menuOpen = false;

$(".mobileMenuIcon").on("click", function(){
    $(".mobileToggleMenu").slideToggle();
    menuOpen = !menuOpen;
    if (menuOpen) {
        $(".mobileMenuIcon").html("<img src='images/close.svg' alt='Close icon'>");
    } else {
        $(".mobileMenuIcon").html("<img src='images/hamburger.svg' alt='Menu icon'>");
    }
});

// Projects link hover
// Recode later using CSS 
$(".project1").hover(function(){
    $(".project1").animate({"opacity":"0.8"},200);
    $(".projectImage1").animate({"background-size":"110%"},200);
}, function(){
    $(".project1").animate({"opacity":"1"},200);
    $(".projectImage1").animate({"background-size":"100%"},200); 
});

$(".project2").hover(function(){
    $(".project2").animate({"opacity":"0.8"},200);
    $(".projectImage2").animate({"background-size":"110%"},200);
}, function(){
    $(".project2").animate({"opacity":"1"},200);
    $(".projectImage2").animate({"background-size":"100%"},200); 
});

$(".project3").hover(function(){
    $(".project3").animate({"opacity":"0.8"},200);
    $(".projectImage3").animate({"background-size":"110%"},200);
}, function(){
    $(".project3").animate({"opacity":"1"},200);
    $(".projectImage3").animate({"background-size":"100%"},200); 
});

$(".project4").hover(function(){
    $(".project4").animate({"opacity":"0.8"},200);
    $(".projectImage4").animate({"background-size":"110%"},200);
}, function(){
    $(".project4").animate({"opacity":"1"},200);
    $(".projectImage4").animate({"background-size":"100%"},200); 
});