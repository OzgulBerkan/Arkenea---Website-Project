$(document).ready(function () {
    setTimeout(function(){
    $("#owl-demo").owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        responsive:false
    });
},1000)
});


$('button').click(function () {
    $(this).toggleClass('expanded').siblings('div').slideToggle();
});