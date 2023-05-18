$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleclass('fa-time');
        $('header').toggleclass('toggle')
    });

 $(window).on('scroll load',function(){

    $('#menu').removeclass('fa-time');
        $('header').removeclass('toggle')

 });

});