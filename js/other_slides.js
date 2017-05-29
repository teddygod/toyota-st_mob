/*
 * Created by teddygod on 19.05.2017.
 */


(function($,undefined){
    var  slider = $("#specifications__slider")
        ;
    if (slider.length) {
        var oSlider = slider.find('.bxslider').bxSlider({
            nextSelector: '#specifications__slider > .specifications__slider-btn-next'
            ,prevSelector: '#specifications__slider > .specifications__slider-btn-prev'
            ,adaptiveHeight: true
            ,loop: false
            ,pager: false
            // ,auto: true
            ,minSlides: 1
            ,maxSlides: 1
            ,slideWidth: 1024
            ,slideMargin: 18
            ,nextText: '<i class="g-icon g-icon_10"></i>'
            ,prevText: '<i class="g-icon g-icon_9"></i>'
        });

        $('#tabs_specifications').find('.tabs__controls-link[href="'+ '#specifications__slider' +'"]').bind('click', function (event) {
            //alert("sadasdasd3");
            var tm = setTimeout(function () {
                    oSlider.redrawSlider();
                    arrowHeight();
                    clearTimeout(tm);
                }
                ,200
            );
        });

        function arrowHeight () {
            $('#specifications__slider > .specifications__slider-btn-next').css({
                height: $('#specifications__slider').find('.bx-viewport').height()+'px'
            });
            $('#specifications__slider > .specifications__slider-btn-prev').css({
                height: $('#specifications__slider').find('.bx-viewport').height()+'px'
            });
        }
        $(window).bind("resize", function(ev) {
            arrowHeight();
        });
        $(window).bind("load", function(ev) {
            arrowHeight();
        });
    }

})($);
