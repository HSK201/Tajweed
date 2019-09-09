$(document).ready(function(){
    /* --- Night Light Section ---*/
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active');
        $('body').toggleClass('night');
    })
})