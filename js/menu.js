/*Funcion para que desde en navegador de la parte superior se delice*/ 
$(function () {

    window.addEventListener('resize', function(){
        let acerca = $('#acercademi').offset().top,
            proyect = $('#proyectos').offset().top;
    });


    $('#enlace-acercade').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 550
        },800);
    });

    $('#enlace-proyectos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:  1350
        },800);
    });

});