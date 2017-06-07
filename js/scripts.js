$(document).ready(function(){
    var
        $body=$('body'),
        $sub_m_trigger=$(".submenu-trigger"),
        $header=$('.header'),
        $mob_menu=$('.mob-menu'),
        $cat_menu=$('.category-section'),
        $header_height=$header.css('height').slice(0,-2),
        $doc_height=$(window).height(),
        $mob_menu_proper_height=$doc_height,
        $cat_menu_proper_height=$mob_menu_proper_height-60,
        $overflow_counter=0,
        $bd=$('.brands-display>div>div');

    $mob_menu.css("max-height", $mob_menu_proper_height+2+'px');
    $cat_menu.css("max-height", $cat_menu_proper_height+2+'px');
    $cat_menu.css("height", $cat_menu_proper_height+2+'px');
    $(window).resize(function(){
        $doc_height=$(window).height();
        $mob_menu_proper_height=$doc_height;
        $cat_menu_proper_height=$mob_menu_proper_height-60;
        $mob_menu.css("max-height", $mob_menu_proper_height+2+'px');
        $cat_menu.css("max-height", $cat_menu_proper_height+2+'px');
        $cat_menu.css("height", $cat_menu_proper_height+2+'px');
    });
    $(window).scroll(function () {
        // if($(window).height()<1025)
        $doc_height=$(window).height();
        $mob_menu_proper_height=$doc_height-$header_height;
        $cat_menu_proper_height=$mob_menu_proper_height-60;
        $mob_menu.css("max-height", $mob_menu_proper_height+2+'px');
        $cat_menu.css("max-height", $cat_menu_proper_height+2+'px');
        $cat_menu.css("height", $cat_menu_proper_height+2+'px');
    });

    $('.mob-burger').click(function(){
        $mob_menu.stop().slideToggle(600).toggleClass('opened-menu');
        if( $mob_menu.hasClass('opened-menu')) {
            $overflow_counter++;
            $body.css('overflow-y','hidden');
        } else{
           $overflow_counter--;
            if($overflow_counter==0){
                $body.css('overflow-y','visible');
            }
        }
    });
    $bd.click(function () {
       var $bi=$(this).find('.additional-layer'),
           $bi_all=$bd.find('.additional-layer');
        if($bi.hasClass('info-show')){
            $bi_all.removeClass('info-show');
        } else {
            $bi_all.removeClass('info-show');
            $bi.addClass('info-show');
        }
    });
    var
        $top_menu=$('.top-sticky'),
        $bot_menu=$('.bottom-sticky');
    // $category_menu.css('top',$doc_height-60+'px');
    $('.category-trigger').click(function(){
        // $(this).toggleClass('triggered');
        $cat_menu.stop().slideToggle(300).toggleClass('opened-menu');
        if( $cat_menu.hasClass('opened-menu')) {
            $bot_menu.css('bottom',-80+'px');
            setTimeout(function () {
                $top_menu.css('top',70+'px');
            }, 300);
            $overflow_counter++;
            $body.css('overflow-y','hidden');
            // $category_menu.css('top',0);
        } else{
            $overflow_counter--;
            $top_menu.css('top',120+'vh');
            setTimeout(function () {
                $bot_menu.css('bottom',0);
            }, 300);
            // $category_menu.css('top',$doc_height-60+'px');
            if($overflow_counter==0){
                $body.css('overflow-y','visible');
            }
        }
    });
    $sub_m_trigger.click(function () {
        event.preventDefault();
        var $sub_m=$(this).siblings(".submenu"),
            $ml=$(this).siblings(".main-link");
        $sub_m.stop().slideToggle(400);
        $(this).add($ml).toggleClass("triggered");
    });

    var $to_top=$('.return-to-top-holder'),
        $to_top_button=$('.return-to-top');
    $(window).scroll(function () {
        if($(window).scrollTop()>1000){
            $to_top.addClass('triggered-to-top');
        }
        else{
            $to_top.removeClass('triggered-to-top');
        }
    });
    $to_top_button.click(function () {
        event.preventDefault();
        $('body, html').animate({scrollTop: 0}, 800);
        $(this).removeClass('triggered-to-top');
    });

    //-----------------------------------------------------mobile-menu
    (function ($,undefined) {//  main-menu_mobile-menu
        var  btnBurger = $('.header__mobile-btn')
            ,mobMenu = $('.header__mobile-menu');

        btnBurger.bind('click', function () {

            btnBurger.hasClass('close') ? btnBurger.removeClass('close')
                : btnBurger.addClass('close');
            mobMenu.slideToggle();
        });
    })($);

    function close_menu(){
        $('.header__mobile-btn').removeClass('close');
        $('.header__mobile-menu').toggle();
    }
    $('.main-menu__item').parents('.main-menu_mobile-menu').on('click', close_menu);

    //--------------arrow phone------------------------
    (function ($,undefined) {//  main-menu_mobile-menu
        var  btnArr = $('.down-arrow')
            ,foneMenu =  $('.hidden-fone');

        btnArr.bind('click', function () {

            btnArr.hasClass('top-arr') ? btnArr.removeClass('top-arr')
                : btnArr.addClass('top-arr');
            foneMenu.slideToggle();
        });
    })($);

    $('.main').css({
           'padding-top' : $('.wrapper').find('.header').height()+'px'
        });
    //-----------------------------------------------------mobile-menu

    function mainHeight () {
        $('.main').css({
            'padding-top' : $('.wrapper').find('.header').height()+'px'
        });

    }
    $(window).bind("resize", function(ev) {
        mainHeight();
    });




    /*var $gal_trigger=$('.gallery-trigger'),
        $gal_close=$('.gallery-close'),
        $pop_mask=$('.background-mask'),
        $gallery;
    $gal_trigger.click(function () {
        event.preventDefault();
        $gallery=$(this).siblings(".gallery-popup");
        var $gal=$gallery.find(".gallery-slider");
        $gallery.fadeIn(500, function () {
            var gallery_swiper = new Swiper($gal ,{
                effect: "fade",
                slidesPerView: 1,
                loop: "true",
                speed: 500,
                autoHeight: "true",
                prevButton: ".control-button-left",
                nextButton: ".control-button-right"
            })
        });
        $gal_close.fadeIn(500);
        $pop_mask.fadeIn(500);
    });
    $gal_close.click(function () {
        $gallery.fadeOut(500);
        $gal_close.fadeOut(500);
        $pop_mask.fadeOut(500);
    });
    $pop_mask.click(function () {
        $gallery.fadeOut(500);
        $gal_close.fadeOut(500);
        $pop_mask.fadeOut(500);
    });*/


});

