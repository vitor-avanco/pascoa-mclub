$(document).ready(function() {

    $('#funcionamento').owlCarousel({
        loop:false,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:4
            }
        }
    });

    $('#noticias').owlCarousel({
        loop:false,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:4
            }
        }
    });


    $('#estrelas-mobile').owlCarousel({
        loop:true,
        nav:true,
        // margin:10,
        // center:true,
        pagination: true,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots:true,
        items:1,
        responsive:{
            0:{
                items:1
            }
        }
    });


    // $('#estrelas-mobile').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows:false // deixar true
    // });



    $('.cargo input[type=radio]').click(function() {
        var cargo = $(this).val();

        if (cargo === 'donofrota') {
            $('.donofrota').css('display','block');
        }
        else {
            $('.donofrota').css('display','none');
        }
    });


    $('.dados-pessoais button.next').click(function() {
        $('#modalCadastro').modal('show');
    });

    $('.quiz button.finalizar').click(function() {
        $('#modalQuiz').show();
    });


    $('.extrato-pontos ul.nav-pills li:first-child a').on('click',function() {
        $('ul.nav-pills li a').removeClass('active');
        $('.tela').hide();
        $('#pontos').show();
        $(this).addClass('active');
    });
    $('.extrato-pontos ul.nav-pills li:nth-child(2) a').on('click',function() {
        $('ul.nav-pills li a').removeClass('active');
        $('.tela').hide();
        $('#estrelas').show();
        $(this).addClass('active');
    });
    $('.extrato-pontos ul.nav-pills li:last-child a').on('click',function() {
        $('ul.nav-pills li a').removeClass('active');
        $('.tela').hide();
        $('#simulador').show();
        $(this).addClass('active');
    });



    $('.faq .duvida a.botao').on('click',function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text('+');
        }
        else {
            $(this).addClass('active');
            // $(this).css('background-color','#00adef');
            $(this).text('-');
        }
    });


    $(".form-check label").click(function(){
        $(".form-check label").removeClass("check");
        $(this).addClass("check");
    });

    $('button.navbar-toggler').on('click',function(){
        if ( $('div#navbarNav').hasClass('show') ) {
            $('header nav > a').show();
            $('button.navbar-toggler').css('position','absolute');
        } else {
            $('header nav > a').hide();
            $('button.navbar-toggler').css('position','fixed');
        }
    });

    
});