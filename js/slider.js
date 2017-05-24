/**
 * Created by Admin on 12.10.2016.
 */
$(document).ready(function(){
    var main_swiper = new Swiper('.main-slider', {
        effect: "slide",
        slidesPerView: 1,
        speed: 2000,
        loop: "true",
        autoplay: 2000,
        prevButton: ".control-button-left",
        nextButton: ".control-button-right"
    });
    var brand_swiper = new Swiper('.brands-slider', {
        effect: "slide",
        slidesPerView: 1,
        speed: 2000,
        spaceBetween: 40,
        pagination: ".brands-pagination",
        paginationClickable: "true"
    });
    var entertainment_swiper = new Swiper('.entertainment-slider',{
        effect: "fade",
        slidesPerView: 1,
        speed: 2000,
        prevButton: ".control-button-left",
        nextButton: ".control-button-right"
    });
});

(function($,undefined){
	var  slider = $("#services__slider_1")
	;
	if (slider.length) {
		var oSlider = slider.find('.bxslider').bxSlider({
			nextSelector: '#services__slider_1 > .services__slider-btn-next'
			,prevSelector: '#services__slider_1 > .services__slider-btn-prev'
			,adaptiveHeight: true
			,loop: true
			,pager: false
			// ,auto: true
			,minSlides: 1
			,maxSlides: 1
			,slideWidth: 1024
			,slideMargin: 18
			,nextText: '<i class="g-icon g-icon_10"></i>'
			,prevText: '<i class="g-icon g-icon_9"></i>'
		});
		//arrowHeight();
		$('#tabs_services_1').find('.tabs__controls-link[href="'+ '#services__slider_1' +'"]').bind('click', function (event) {
			 //alert("sadasdasd");
			var tm = setTimeout(function () {
					arrowHeight();
					oSlider.redrawSlider();
					arrowHeight();
					clearTimeout(tm);
				}
				,200
			);
		});
		function arrowHeight () {
			$('#services__slider_1 > .services__slider-btn-next').css({
				height: $('#services__slider_1').find('.article__img').height()+'px'
			});
			$('#services__slider_1 > .services__slider-btn-prev').css({
				height: $('#services__slider_1').find('.article__img').height()+'px'
			});
		}
		$(window).bind("resize", function(ev) {
			arrowHeight();
		});
	}

})($);
(function($,undefined){
	var  slider = $("#services__slider_2")
	;
	if (slider.length) {
		var oSlider = slider.find('.bxslider').bxSlider({
			nextSelector: '#services__slider_2 > .services__slider-btn-next'
			,prevSelector: '#services__slider_2 > .services__slider-btn-prev'
			,adaptiveHeight: true
			,loop: true
			,pager: false
			// ,auto: true
			,minSlides: 1
			,maxSlides: 1
			,slideWidth: 1024
			,slideMargin: 18
			,nextText: '<i class="g-icon g-icon_10"></i>'
			,prevText: '<i class="g-icon g-icon_9"></i>'
		});

		$('#tabs_services_1').find('.tabs__controls-link[href="'+ '#services__slider_2' +'"]').bind('click', function (event) {
			 //alert("sadasdasd2");
			var tm = setTimeout(function () {
					oSlider.redrawSlider();
					arrowHeight();
					clearTimeout(tm);
				}
				,200
			);
		});
		function arrowHeight () {
			$('#services__slider_2 > .services__slider-btn-next').css({
				height: $('#services__slider_2').find('.article__img').height()+'px'
			});
            console.log(arrowHeight);
			$('#services__slider_2 > .services__slider-btn-prev').css({
				height: $('#services__slider_2').find('.article__img').height()+'px'
			});
		}
		$(window).bind("resize", function(ev) {
			arrowHeight();
		});
	}

})($);
(function($,undefined){
	var  slider = $("#services__slider_3")
	;
	if (slider.length) {
		var oSlider = slider.find('.bxslider').bxSlider({
			nextSelector: '#services__slider_3 > .services__slider-btn-next'
			,prevSelector: '#services__slider_3 > .services__slider-btn-prev'
			,adaptiveHeight: true
			,loop: true
			,pager: false
			// ,auto: true
			,minSlides: 1
			,maxSlides: 1
			,slideWidth: 1024
			,slideMargin: 18
			,nextText: '<i class="g-icon g-icon_10"></i>'
			,prevText: '<i class="g-icon g-icon_9"></i>'
		});

		$('#tabs_services_1').find('.tabs__controls-link[href="'+ '#services__slider_3' +'"]').bind('click', function (event) {
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
			$('#services__slider_3 > .services__slider-btn-next').css({
				height: $('#services__slider_3').find('.article__img').height()+'px'
			});
			$('#services__slider_3 > .services__slider-btn-prev').css({
				height: $('#services__slider_3').find('.article__img').height()+'px'
			});
		}
		$(window).bind("resize", function(ev) {
			arrowHeight();
		});
	}

})($);
