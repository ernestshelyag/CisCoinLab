$(window).on('load', function () {
    $('body').show();
    $('.preloader').delay(100).fadeOut('slow');
});

$( function () {

    //tabs

    var $filterBtn = $('.side-btn1');
    var filterOut = function () {
        var $filterBtnActive = $('.side-btn1.active'),
            idToggle = $filterBtnActive.attr('data-toggle'),
            $filterCard = $('.field1'),
            $filterCardActive = $('.field1[data-id="' + idToggle + '"]');
        $filterCard.hide();
        $filterCardActive.fadeIn();
    };
    filterOut();
    $filterBtn.on('click', function (e) {
        e.preventDefault();
        $filterBtn.removeClass('active');
        $(this).addClass('active');
        filterOut();
    });

    var $filterBtn2 = $('.side-btn2');
    var filterOut2 = function () {
        var $filterBtnActive = $('.side-btn2.active'),
            idToggle = $filterBtnActive.attr('data-toggle'),
            $filterCard = $('.field2'),
            $filterCardActive = $('.field2[data-id="' + idToggle + '"]');
        $filterCard.hide();
        $filterCardActive.fadeIn();
    };
    filterOut2();
    $filterBtn2.on('click', function (e) {
        e.preventDefault();
        $filterBtn2.removeClass('active');
        $(this).addClass('active');
        filterOut2();
    });

    //eye

    $('#eye').on('click', function(){
       $(this).toggleClass('active');
        if($('#eye').hasClass('active')){
            $('#pass').attr('type', 'text');
        } else {
            $('#pass').attr('type', 'password');
        }
    });

    //scrollbar

    $('.this-scroll-content').scrollbar({
        "autoScrollSize": false,
        "scrolly": $('.custom-scrollbar')
    });

    // modal

    $('.js-popup-modal').on('click', function (e) {
        e.preventDefault();
        $.magnificPopup.open({
            items: {
                src: '#modal'
            }
        });
    });

    $('.js-popup-success').on('click', function (e) {
        e.preventDefault();
        $.magnificPopup.open({
            items: {
                src: '#success'
            }
        });
    });

    $('.js-popup-lang-modal').on('click', function (e) {
        e.preventDefault();
        $.magnificPopup.open({
            items: {
                src: '#lang-modal'
            }
        });
    });

    // lang-pick

    $('.header__lang-block').on('click', function (e){
       $(this).toggleClass('active');
    });

    // headder

    $('.header__menu-btn').on('click', function (e){
        $('.header__hidden-list-block').addClass('active');
    });

    $('.header__close-btn').on('click', function (e){
        $('.header__hidden-list-block').removeClass('active');
    });

});