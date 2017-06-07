$(document).ready(function(){

	// Language list show/hide
	$('.lang').hover(function (e) {
		$(this).toggleClass('show');

	});
	$('.lang').click(function (e) {
		// $(this).removeClass('show');
		$(this).find('a').removeClass('selected');
		$(e.target).addClass('selected');
	});

	// function FlyLine (options){
	//   var that = this;
	//   this.itemsList = [];
	//   this.activeClass = 'active',
	//   startedActive = undefined;

	//   if (typeof options.activeClass !== 'undefined') {
	//     this.activeClass = options.activeClass;
	//     console.log(this.activeClass);
	//   } else {
	//     throw new Error("activeClass is set default value as 'active'.");
	//   }

	//   if (typeof options.itemsList !== 'undefined') {
	//     this.itemsList = options.itemsList;
	//     console.log('this.itemsList is: ');
	//     console.log(this.itemsList[1]);
	//     console.log('this.itemsList is: ');
	//     console.log(this.itemsList);
	//   } else {
	//     throw new Error("itemsList is not defined.");
	//   }

	//   this.initialize = function (){

	//     console.log("Initialize() started");

	//     startedActive = that.itemsList.filter('.' + that.activeClass);
	//     var activeIndex = startedActive.index();

	//     console.log(startedActive);
	//     console.log(activeIndex);

	//     switch(activeIndex){
	//       case 0:
	//         that.itemsList.eq(1).addClass('hidden-line to-left');
	//         that.itemsList.eq(2).addClass('hidden-line');
	//         break;
	//       case 1:
	//         that.itemsList.eq(0).addClass('hidden-line');
	//         that.itemsList.eq(2).addClass('hidden-line');
	//         break;
	//       case 2:
	//         that.itemsList.eq(0).addClass('hidden-line');
	//         that.itemsList.eq(1).addClass('hidden-line to-right');
	//         break;
	//     }


	//     this.itemsList.hover(mouseover, mouseout);
	//   };

	//   function mouseover (argument) {
	//     if($(this).hasClass('current')){ return; };

	//     switch($(this).index()){
	//       case 0:
	//         if(startedActive.index() == 1){
	//           that.itemsList.eq(0).removeClass('hidden-line');
	//           that.itemsList.eq(1).addClass('hidden-line to-left');
	//         } else {
	//           that.itemsList.eq(0).removeClass('hidden-line');
	//           that.itemsList.eq(2).addClass('hidden-line to-left');
	//         }
	//         break;
	//       case 1:
	//         if(startedActive.index() == 0){
	//           that.itemsList.eq(0).addClass('hidden-line');
	//           that.itemsList.eq(1).removeClass('hidden-line to-left');
	//         } else {
	//           that.itemsList.eq(1).removeClass('hidden-line to-right');
	//           that.itemsList.eq(2).addClass('hidden-line');
	//         }
	//         break;
	//       case 2:
	//         if(startedActive.index() == 0){
	//           that.itemsList.eq(0).addClass('hidden-line');
	//           that.itemsList.eq(1).removeClass('hidden-line').each(function(){
	//               var $this = $(this);
	//               setTimeout(function () {
	//                 $this.addClass('hidden-line to-right');
	//               }, 125);
	//             setTimeout(function(){
	//               $this.next().removeClass('hidden-line');
	//             }, 325);
	//           });
	//           // that.itemsList.eq(2).removeClass('hidden-line');
	//         } else {
	//           that.itemsList.eq(1).addClass('hidden-line to-right');
	//           that.itemsList.eq(2).removeClass('hidden-line');
	//         }
	//         break;
	//     }
	//   };

	//   function mouseout (argument) {
	//     if($(this).hasClass('current')){ return; };

	//     switch($(this).index()){
	//       case 0:
	//         if(startedActive.index() == 1){
	//           that.itemsList.eq(0).addClass('hidden-line');
	//           that.itemsList.eq(1).removeClass('hidden-line to-left');
	//         } else {
	//           that.itemsList.eq(0).addClass('hidden-line');
	//           that.itemsList.eq(2).removeClass('hidden-line to-left');
	//         }
	//         break;
	//       case 1:
	//         if(startedActive.index() == 0){
	//           that.itemsList.eq(0).removeClass('hidden-line');
	//           that.itemsList.eq(1).addClass('hidden-line to-left');
	//         } else {
	//           that.itemsList.eq(1).addClass('hidden-line to-right');
	//           that.itemsList.eq(2).removeClass('hidden-line');
	//         }
	//         break;
	//       case 2:
	//         if(startedActive.index() == 0){
	//           that.itemsList.eq(2).addClass('hidden-line');
	//           that.itemsList.eq(1).removeClass('hidden-line to-right').each(function(){
	//               var $this = $(this);
	//               setTimeout(function () {
	//                 $this.addClass('hidden-line to-left');
	//               }, 125);
	//             setTimeout(function(){
	//               $this.prev().removeClass('hidden-line');
	//             }, 325);
	//           });
	//           // that.itemsList.eq(0).removeClass('hidden-line');
	//         } else {
	//           that.itemsList.eq(1).removeClass('hidden-line to-right');
	//           that.itemsList.eq(2).addClass('hidden-line');
	//         }
	//         break;
	//     }
	//   };

	// };

	// var tabsFlyLines = new FlyLine(
	//   {
	//     itemsList: $('.tab-titles li'),
	//     activeClass: 'current'
	//   });

	// tabsFlyLines.initialize()


	// Tabs section underline flow effect
	function moveLine (e, itself, setDelay) {
		if(!itself){throw new Error('First argument not set.')};
		var $this = itself,//$('.tab-titles'),
			curTabTitle = $this.find('li.current'),
			line = $this.find('.under-line'),
			timer = setDelay ? setDelay : 0;
		var target = $(e.target);
		target = target.parent();
		if(target.is('li') && !target.hasClass('current')){
			curTabTitle = target;
		}
		function wayToMove () {
			switch(curTabTitle.index()){
				case 0:
					line.css({ left: curTabTitle.outerWidth() / 2 - 25});
					break;
				case 1:
					line.css({ left: curTabTitle.prev().outerWidth() + curTabTitle.outerWidth() / 2 - 25});
					break;
				case 2:
					line.css({ left: curTabTitle.parent().outerWidth() - curTabTitle.outerWidth() / 2 - 25});
					break;
			}
		}
		if(timer > 0){
			setTimeout(function () {
				wayToMove();
			}, timer);
		} else {
			wayToMove();
		}

	};
	// function moveLine (e, setDelay) {
	//   // console.log(e.target);
	//   var curTabTitle,
	//       line = $('.under-line'),
	//       timer = setDelay ? setDelay : 0;
	//       if(e){
	//         curTabTitle = $(this);
	//       } else {
	//         curTabTitle = $('.tab-titles li.current');
	//       }
	//   setTimeout(function () {
	//     switch(curTabTitle.index()){
	//       case 0:
	//         line.css({ left: curTabTitle.outerWidth() / 2 - 25});
	//         break;
	//       case 1:
	//         line.css({ left: curTabTitle.prev().outerWidth() + curTabTitle.outerWidth() / 2 - 25});
	//         break;
	//       case 2:
	//         line.css({ left: curTabTitle.parent().outerWidth() - curTabTitle.outerWidth() / 2 - 25});
	//         break;
	//     }
	//   }, timer);
	// };

	$('.tab-titles').each(function(){
		moveLine(false, $(this), 50);
	})
	// moveLine( false, 50);

	$('.tab-titles')
		.hover(
			function(e){ moveLine(e, $(this)); },
			function(){ moveLine(false, $(this)); }
		);
	$('.tab-titles li')
		.click(function(){
			$(this).siblings().removeClass('current');
			$(this).addClass('current');
			moveLine(false, $(this).parents('.tab-titles'));
		});
	// End Tabs section underline flow effect

	// Fade images on scroll when in window visible area
	$(window).scroll(fadeInWindow);
	function fadeInWindow (){
		$('.can-zoom .img-a img').each(function () {

			if(($(window).scrollTop() + $(window).height() * .95) > $(this).offset().top && $(window).scrollTop() < $(this).offset().top + $(this).height()){
				$(this).addClass('load');
				$(this).parent().addClass('load');
			} else {
				$(this).removeClass('load');
				$(this).parent().removeClass('load');
			}
		});
	};
	// End Fade images on scroll when in window visible area

	// Slider fade
	setTimeout(function () {
		$('.loading').removeClass('loading scale');
	}, 1000);

	// End Slider fade


	// Animation on scroll (Index page)
	if($('.section-ask').length > 0){
		$(document).scroll(askAnimate)
		function askAnimate(){
			if(($(window).scrollTop() + $(window).height() * .85) > $('.section-ask').offset().top){
				$('.section-ask').addClass('play');
			} else {
				$('.section-ask').removeClass('play');
			}
		};
		askAnimate();
	}

	// Animation on scroll (Cars page)
	if($('.short-descr').length > 0){
		$(document).scroll(carDescrAnimate)
		function carDescrAnimate(){
			if( $(window).height() * .99 > $(document).scrollTop()){
				$('.short-descr').addClass('play');
			} else {
				$('.short-descr').removeClass('play');
			}
		};
		carDescrAnimate();
	}

	// Create custom select from real
	function makeCustomSelectListNew (name, selector){
		var s = selector ? selector : '';
		if($(s+' '+'select[name="'+ name +'"]').length > 0){
			$(s+' '+'select[name="'+ name +'"] option').not(':first-child').each(function(i){
				$this = $(this);

				var $li = $('<li>').addClass('option fontB').attr('value', $this.html()).text($this.html());
				$(s+' '+'#'+ name +' ul.select').append($li);
				if ($this.attr("selected") === "selected") {
					$li.trigger('click');
				}
			})
		}
	};



	function makeCustomSelectList (name){
		if($('select[name="'+ name +'"]')){
			$('#'+ name.replace('[','').replace(']','') +' ul.select').html('');
			$('select[name="'+ name +'"] option').not(':first-child').each(function(i){
				$this = $(this);

				var $li = $('<li>').addClass('option fontB').attr('value', $this.val()).text($this.html());
				$('#'+ name.replace('[','').replace(']','') +' ul.select').append($li);
				if ($this.attr("selected") === "selected") {
					$li.trigger('click');
					var currSelectField = $(this).parents('.select-container');
					currSelectField.find('.curr-value').text($(this).text()).css({color: '#000'});
				}
			})
		}
	};
	makeCustomSelectList ('Buyenquiry[modline]');
	makeCustomSelectList ('Toenquiry[modline_id]');
	makeCustomSelectList ('TestDriveMessages[modline]');
	makeCustomSelectList ('Messages[destination]');
	makeCustomSelectList ('Messages1[destination]');
	makeCustomSelectList ('Toenquiry[marka]');
	makeCustomSelectList ('Toenquiry[reason]');

	for (var i = $('.service .car-item').length; i >= 1; i--) {
		if ( $('#chooseYearModel' + i).length >= 1 ){
			(function(index){
				return (function () {
					makeCustomSelectListNew ('model_year', '#chooseYearModel' + index );
				})();

			})(i)
		}

	};

	$('[name=model_year]').on('change', function () {
		//  console.log("$('[name=model_year]')  Changed!!!");
		// window.open(window.location.origin+'/img/'+$(this).find('[selected]').val(),'_blank');
		window.open($(this).find('[selected]').val(),'_blank');
	})




	function getXMLHttpRequest()
	{
		if (window.XMLHttpRequest) {
			return new XMLHttpRequest();
		}

		return new ActiveXObject('Microsoft.XMLHTTP');
	};


	function obtaincolors(idvalue){

		var idmodline =  idvalue;
		var lang = $("html").attr('lang');
		var request = getXMLHttpRequest();
		request.onreadystatechange = function () {

			if (request.readyState == 4) {


				document.getElementById('carcolorsinner').innerHTML = request.responseText;

				if($('#carColorSl').length > 0){

					$('#carColorSl').bxSlider({

						mode: 'fade',
						captions: true,
						pagerCustom: '#carColorSlPager',

						speed: 700,
					});
				};

				getSelectedColor();
				$('#carColorSlPager a').click(getSelectedColor);
				// $('#insert').fadeIn(1600);


			}
		};
		request.open('GET', '/'+lang+'/uslugi/buy/colors.html?id=' + idmodline, true);
		request.send(null);



	}

	function obtaincomplectations(idvalue){

		var idmodline =  idvalue;
		var lang = $("html").attr('lang');
		var request = getXMLHttpRequest();
		request.onreadystatechange = function () {

			if (request.readyState == 4) {


				document.getElementById('buyenquiry-complectation').innerHTML = request.responseText;

				makeCustomSelectList ('Buyenquiry[complectation]');
				// $('#insert').fadeIn(1600);


			}
		};
		request.open('GET', '/'+lang+'/uslugi/buy/complectations.html?id=' + idmodline, true);
		request.send(null);



	}

	// Custom "select" form element
	$('html, body, #popselect, .popup-inner').on('click tap', '.option', function(e){
		var currSelectField = $(this).parents('.select-container'),
			$that = $(this);
		if ($(this).parents('ul').attr('id') == 'ul_modline'){
			obtaincolors($(this).attr('value'));
			obtaincomplectations($(this).attr('value'));
		}
		currSelectField.find('.curr-value').text($(this).text()).css({color: '#000'});
		currSelectField.find('.option').removeClass('curr-opt');
		$(this).addClass('curr-opt');
		$(this).parents('.select').slideToggle(300);
		currSelectField.removeClass('activated').attr('current-value-data', $(this).attr('value'));

		$('select[name="'+currSelectField.attr('namesel')+'"] option').removeAttr('selected').each(function () {  // Set real option to "selected"
			if($(this).html() === $that.html()){
				$(this).attr('selected', true);

				$(this).parent().val($(this).attr('value'));
				$(this).parent().trigger('change');// Add value to select
			}
		});

		$('select[name="'+currSelectField.attr('id')+'"] option').removeAttr('selected').each(function () {  // Set real option to "selected"
			if($(this).html() === $that.html()){
				$(this).attr('selected', true);
				$(this).parent().val($(this).attr('value')); // Add value to select
				$(this).parent().trigger('change');
			}
		});

		$(this).parents('.select-container').find('.fa').toggleClass('rotated');

		e.stopPropagation();
	});

	$('.curr-value').click(function(e){
		e.stopPropagation();
		var currSelectField = $(this).parents('.select-container');
		currSelectField.find('.select').slideToggle(300);
		currSelectField.find('.select-container').toggleClass('activated');
		$(this).next().toggleClass('rotated');
	});

	$('html, body').on('click', function(){
		$('.select-container .select').slideUp(300);
		$('.select-container').find('.fa').removeClass('rotated');
	})
	// End Custom "select" form element


	if($('#mainSl').length > 0){

		$('#mainSl').bxSlider({
			nextSelector: '#nextMainSl',
			prevSelector: '#prevMainSl',

			speed: 1200,
			auto: true,
			pause: 8000,
			onSliderLoad: function(){
				$('.slider-main').addClass('scale');
			}
		});
	};

	if($('#testDriveSl').length > 0){

		$('#testDriveSl').bxSlider({
			pager: false,
			nextSelector: '#nextSl',
			prevSelector: '#prevSl',

			speed: 1200,
		});
	};

	if($('#bodyRepairSl').length > 0){

		$('#bodyRepairSl').bxSlider({
			pager: false,
			nextSelector: '#nextSl',
			prevSelector: '#prevSl',

			speed: 1200,
		});
	};

	if($('#proTectSl').length > 0){

		$('#proTectSl').bxSlider({
			pager: false,
			nextSelector: '#nextSl',
			prevSelector: '#prevSl',

			speed: 1200,
		});
	};

	if($('#exteriorSl').length > 0){

		$('#exteriorSl').bxSlider({
			pager: false,
			mode: 'fade',
			nextSelector: '#exteriorSlNext',
			prevSelector: '#exteriorSlPrev',

			speed: 600,
		});
	};

	if($('#interiorSl').length > 0){

		$('#interiorSl').bxSlider({
			pager: false,
			mode: 'fade',
			nextSelector: '#interiorSlNext',
			prevSelector: '#interiorSlPrev',

			speed: 600,
		});
	};

	if($('#360Sl').length > 0){

		$('#360Sl').bxSlider({
			pager: false,
			mode: 'fade',
			nextSelector: '#360SlNext',
			prevSelector: '#360SlPrev',

			speed: 600,
		});
	};

	if($('#carColorSl').length > 0){

		$('#carColorSl').bxSlider({

			mode: 'fade',
			captions: true,
			pagerCustom: '#carColorSlPager',

			speed: 700,
		});
	};

	if($('#carInterColorSl').length > 0){

		$('#carInterColorSl').bxSlider({
			mode: 'fade',
			captions: true,
			pagerCustom: '#carInterColorSlPager',

			speed: 1200,
		});
	};

	// Specifications expand/collapse tables
	$('.drop-header').click(function(){
		$(this).next().slideToggle();
		$(this).toggleClass('expanded');
		if($(this).hasClass('expanded')){
			$('html, body').animate({
				scrollTop: $(this).offset().top - (parseInt($('body').css('fontSize'))*7.75 + $('.car-page-hash-nav').height() + 26)
			}, 1000, 'swing');
		};
	});

	// Specifications slide tables left-/right + fixed first column
	var isAnimating = false;
	$('.table-slider').on('click', function (e) { return;
		var $table = $(this).siblings('table');

		var margin = parseInt($table.css('margin-left')),
			minMargin = $table.parent().width() - $table.width();
		if( $(e.target).hasClass('slide-right') && !isAnimating && margin > minMargin ){
			isAnimating = true;
			$table.animate({
				marginLeft: '-=150px'
			}, 300, function() {
				isAnimating = false;
			});
		}
		if( $(e.target).hasClass('slide-left') && !isAnimating && $table.css('margin-left') != '0px' ){
			isAnimating = true;
			$table.animate({
				marginLeft: '+=150px'
			}, 300, function() {
				isAnimating = false;
			});
		}


		// Fixing first column
		var firstColumn = $table.find('td:first-child, th:first-child'),
			firstRowHeight = firstColumn.filter('th').next().height();
		if($(e.target).hasClass('slide-right')){
			firstColumn.css({
				position: 'absolute',
				left: 0,
				background: '#eee'
			}).parents('table').css({
				borderLeft: firstColumn.width() + ' solid green'
			});
		}
		if(parseInt($table.css('margin-left')) > -150 && $(e.target).hasClass('slide-left')){
			firstColumn.css({
				position: 'static',
				background: '#eee'
			}).parents('table').css({
				borderLeft: firstColumn.width() + ' solid green'
			});
		}
		if(firstRowHeight > firstColumn.filter('th').height())
			firstColumn.filter('th').css({
				height: firstRowHeight+ 2 + 'px'
			});

		// End Specifications slide tables left-/right
	});

	// Specifications slide Pseudo tables left-/right
	var isAnimating = false;
	/*$('.table-slider').on('click', function (e) {
	 var $table = $('.table-drop .content'); // move all tables on page Cars
	 // var $table = $(this).siblings('.outer').find('.content'); // move only this table

	 $table.each(function () {
	 var margin = parseInt($table.css('margin-left')),
	 fixedColWidth = $(this).closest('.table-drop').is('.no-fixed') ? 0 : 200;
	 //  console.log($(this).closest('.table-drop').is('.no-fixed'));
	 //  console.log(fixedColWidth);
	 minMargin = $table.parent().width() - $table.width() - fixedColWidth;
	 // console.log(minMargin);
	 // console.log(margin);
	 if( $(e.target).hasClass('slide-right') && !isAnimating && margin >= minMargin ){
	 isAnimating = true;
	 $table.animate({
	 marginLeft: '-=150px'
	 }, 300, function() {
	 isAnimating = false;
	 });
	 }
	 if( $(e.target).hasClass('slide-left') && !isAnimating && $table.css('margin-left') != '0px' ){
	 isAnimating = true;
	 $table.animate({
	 marginLeft: '+=150px'
	 }, 300, function() {
	 isAnimating = false;
	 });
	 }
	 })

	 });*/

	$('.table-slider').on('click', function (e) {
		var $table = $('.table-drop .content'); // move all tables on page Cars
		// var $table = $(this).siblings('.outer').find('.content'); // move only this table
		var counter = 0;
		var margin = parseInt($table.eq(3).css('margin-left')),
			fixedColWidth = 200,
			// fixedColWidth = $(this).closest('.table-drop').is('.no-fixed') ? 0 : 200;
			minMargin = $table.parent().width() - $table.width() - fixedColWidth;
		// console.log(minMargin);
		// console.log(margin);
		// console.log( margin >= minMargin );

		if( $(e.target).hasClass('slide-right') && !isAnimating && margin >= minMargin ){
			isAnimating = true;
			if( margin >= (minMargin + fixedColWidth) ){
				// console.log('anim all allowed');
				// console.log(minMargin + fixedColWidth);
				// console.log( margin >= (minMargin + fixedColWidth) );
				$table.animate({
					marginLeft: '-=150px'
				}, 300, function() {
					isAnimating = false;
				});

			} else {
				//  console.log('anim all NOT allowed');
				//  console.log(            $table);
				// console.log(            $table
				//    .filter(function (index) {
				//        return index >= 3;
				//    }));
				$table
					.filter(function (index) {
						return index >= 3;
					})
					.animate({
						marginLeft: '-=150px'
					}, 300, function() {
						isAnimating = false;
					});
			}
		}
		if( $(e.target).hasClass('slide-left') && !isAnimating && $table.eq(3).css('margin-left') != '0px' ){
			isAnimating = true;
			if( $table.eq(0).css('margin-left') != '0px' ){
				$table.animate({
					marginLeft: '+=150px'
				}, 300, function() {
					isAnimating = false;
				});
			} else {
				$table
					.filter(function (index) {
						return index >= 3;
					})
					.animate({
						marginLeft: '+=150px'
					}, 300, function() {
						isAnimating = false;
					});
			}
		}

	});
	// End Specifications slide Pseudo tables left-/right

	// Tabs Section switch
	$('.section-tabs .tab-titles li').click(function () {
		switch($(this).index()){
			case 0:
				$(this).parents('.section-tabs').find('.row-container').removeClass('show-second-tab show-third-tab');
				break;
			case 1:
				$(this).parents('.section-tabs').find('.row-container').addClass('show-second-tab').removeClass('show-third-tab');
				break;
			case 2:
				$(this).parents('.section-tabs').find('.row-container').addClass('show-third-tab').removeClass('show-second-tab');
				break;
		}
	});

	// Tabs Car colours
	$('.car-colors .tab-titles li').click(function () {
		if($(this).index() == 1){
			$('.car-colors .row').addClass('show-right-tab');
		} else {
			$('.car-colors .row').removeClass('show-right-tab');
		}
	});


	// Galleries expand/collapse
	$('.galleries').on('click', '.col .title', function(){
		$('.media [data-media=' + $(this).attr('data-key') + ']').addClass('show push-front');
		$('.media').addClass('visible');
		$('.galleries .row').addClass('do-magic');
	});
	$('.link-back').click(function(e){
		e.preventDefault();
		$('.media').removeClass('visible');
		$('.media .block').removeClass('push-front');
		$('.galleries .row').removeClass('do-magic');
		setTimeout(function () {
			$('.media .block').removeClass('show');
		}, 400);

		if($('[data-media="video"]').hasClass('show')){
			var iframe = $('.show[data-media="video"]').find('iframe'),
				iframeSrc = iframe.attr('src');
			// console.log(iframeSrc);
			iframeSrc = iframeSrc.split('autoplay=1').join('autoplay=0');
			// console.log(iframeSrc);
			iframe.attr('src', '');
			iframe.attr('src', iframeSrc);
		}

	});
	$('.galleries .row .link-more').click(function(e){
		e.preventDefault();
	})
	// End Galleries expand/collapse

	// Main menu behaviour
	$('.main-nav a').click(function (e) {
		//  console.log('Clicked on ".main-nav a"');
		// console.log($(this).parent().hasClass('multi-menu'));
		// console.log($(this).parent().attr('data-submenu'));
		var $that = $(this);
		if($that.parent().hasClass('multi-menu')){
			e.preventDefault();
			if($that.parent().hasClass('is-active')){
				$that.parent().removeClass('is-active');
				$('.sub-nav .list-outer, .main-nav li > ul').slideUp();
				return;
			}
			$that.parent().siblings().removeClass('is-active');
			$that.parent().toggleClass('is-active');
			$('.sub-nav .list-outer, .main-nav li > ul').slideUp();
			setTimeout(function () {
				$('.sub-nav [data-menu-name=' + $that.parent().attr('data-submenu') + ']').slideDown();
			}, 400);
		};
		if($that.parent().find('ul').length >= 1){
			// e.preventDefault();
			// if($that.parent().hasClass('is-active')){
			//   $that.parent().removeClass('is-active');
			//   $('.sub-nav .list-outer, .main-nav li > ul').slideUp();
			//   return;
			// }
			// $that.parent().siblings().removeClass('is-active');
			// $that.parent().toggleClass('is-active');
			// $('.sub-nav .list-outer, .main-nav li > ul').slideUp();
			// setTimeout(function () {
			//   $that.parent().find('ul').slideDown();
			// }, 400);
		}

		$('.top-nav .search').removeClass('is-active');
		$('.search-form').slideUp();
	});
	// Drop lists

	// End Main menu behaviour


	// Search-form drop behaviour
	$('.magnifier').click(function(){
		var srchBtn = $(this).parent();

		if(!srchBtn.hasClass('is-active')){
			$('.main-nav li').removeClass('is-active');
			$('.sub-nav .list-outer, .main-nav li > ul').slideUp();

			$('.search-form').slideDown();
			srchBtn.addClass('is-active');
		} else {
			$('.search-form').slideUp();
			srchBtn.removeClass('is-active');
		}
	});
	// End Search-form drop behaviour


	// parallax effect function
	var isIE = navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.indexOf("Trident") > 0 || navigator.userAgent.indexOf("Edge") > 0,
		wScroll = $(window).scrollTop();
	function parallax(prlxBg, prlxContainer, factor){
		if (isIE) {
			$(prlxBg).css({
				'transform': 'translateY(0px)'
			});
			return;
		};
		if((wScroll + $(window).height()) >= $(prlxBg).offset().top) {
			// console.log("true!");
			$(prlxBg).css({
				'transform': 'translateY(' + (($(prlxContainer).offset().top - wScroll) / $(window).height() * 100) * factor +'%)'
			})
		}
	}

	// Parallax in footer
	var factor = -.5;
	$(window).scroll(function(){
		wScroll = $(this).scrollTop();
		if($(window).width() < 1140){
			factor = -.19;
		} else {
			factor = -.5;
		}
		parallax('.footer .parallax-bg', '.footer', factor);
	});

	// Hash scrollTo navigation in Car page
	$('#hashNav').on('click', 'a', function (e) {
		e.preventDefault();
		var link = $($(this).attr('href').slice($(this).attr('href').indexOf('#')));
		$('html, body').animate({
			scrollTop: link.offset().top - $('.to-hide').height() - $('#hashNav').height() + 2 + 'px'
		}, 1500, 'swing');
		$('#hashNav a').removeClass('is-active');
		$(this).addClass('is-active');
		// console.log(link.offset().top - $('.to-hide').height() - $('.sub-nav').height());
		//  console.log(link.offset().top);
		// console.log($('.to-hide').height() );
		// console.log($('.sub-nav').height());
		// console.log($('#hashNav').height());
	});

	$(window).scroll(function (e) {
		var winHeight = $(window).height();
		$('#hashNav li a').each(function () {
			var windowScrTop = $(window).scrollTop(),
				curZone = $( $(this).attr('href') ),
				curZoneOffTop = curZone.offset().top;
			// console.log(curZone);
			// console.log( windowScrTop < curZoneOffTop && windowScrTop < curZoneOffTop + curZone.height());
			if( windowScrTop < curZoneOffTop && windowScrTop < curZoneOffTop + curZone.height() && windowScrTop + winHeight*.45 > curZoneOffTop ){
				$('#hashNav a').removeClass('is-active');
				$(this).addClass('is-active');
			}
		});

	})
	// End Hash scrollTo navigation in Car page


	// Car page: Specifications filter similar cells in table

	var colsToFilter = $('#specifications .drop').eq(0).find('.row:first-child .td').length;
	$('#showDifferences').click(function (e) {
		e.preventDefault();
		$('#specifications .drop .inner .content').each(function () {

			var rowsToHide = $(this).find('.td.colspan-' + colsToFilter);

			rowsToHide.each(function () {
				$(this).parents('.row').addClass('hidden');
			})

		});
		$('#sets .drop .row').not(':first-child').each(function () {
			var content = $(this).find('.content');

			content.each(function(){

				var cells = $(this).find('.td'),
					cellsValues = [];
				cells.each(function () {
					cellsValues.push($.trim($(this).text()))
				})
				function isSimilar (arr) {
					for (var i = arr.length - 1; i >= 0; i--) {
						if(arr[i] !== arr[0]) {
							return false;
						}
					};
					return true;
				};
				if(isSimilar(cellsValues)){
					$(this).parent().addClass('hidden');
				}

			});

		});

		// Highlight current button
		$(this).addClass('pressed');
		$('#showAll').removeClass('pressed');
	})

	$('#showAll').click(function (e) {
		e.preventDefault();
		$('.specifications .row.hidden').removeClass('hidden');

		// Highlight current button
		$(this).addClass('pressed');
		$('#showDifferences').removeClass('pressed');

	})
	// End Car page: Specifications filter similar cells in table


	// Validation inputs
	$('input[type="email"]').blur(function(){
		if(!validateEmail($(this).val())){
			$(this).addClass('error');
			// $(this).focus();
		} else {
			$(this).removeClass('error');
		}
	});

	$('input[type="text"]').blur(function(){
		if($(this).val() == ''){
			$(this).addClass('error');
		} else {
			$(this).removeClass('error');
		}
	});

	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}


	// Modals (popups) behaviour
	var body = $('body');
	toggleModal = function(popupId){
		if(window.matchMedia('(max-width: 3000px)').matches){
			body.toggleClass('body-locked');
		}
		$('#'+ popupId + ', ' + popupId).toggleClass('is-shown');
	};

	// On index page
	$('.write-us, .write-us a').on('click', function(){toggleModal('writeToCenter');return false;});
	// On vacancies page
	$('.reply-vacancy').on('click', function(){toggleModal('replyVacancy');return false;});
	// On services page
	$('#signupToService').on('click', function(){toggleModal('signForService');return false;});
	// On news, specials pages
	/*$('.btn-subscribe').on('click', function(){
	 if($(this).closest('form').find('input[nameh=name]').val() == ''){
	 $(this).closest('form').find('input[nameh=name]').addClass('error');
	 return false;
	 } else {
	 $(this).closest('form').find('input[nameh=name]').removeClass('error');
	 }
	 if(!validateEmail($(this).closest('form').find('input[nameh=email]').val())){
	 $(this).closest('form').find('input[nameh=email]').addClass('error');
	 return false;
	 } else {
	 $(this).closest('form').find('input[nameh=email]').removeClass('error');
	 }
	 toggleModal('subscribed');
	 return false;
	 });*/
	// On buy-car, test-drive pages
	/*$('form#buy_car, form#test_drive').on('submit', function(){
	 if($(this).closest('form').find('input[name=name]').val() == ''){
	 $(this).closest('form').find('input[name=name]').addClass('error');
	 return false;
	 } else {
	 $(this).closest('form').find('input[name=name]').removeClass('error');
	 }
	 if($(this).closest('form').find('input[name=tel]').val() == ''){
	 $(this).closest('form').find('input[name=tel]').addClass('error');
	 return false;
	 } else {
	 $(this).closest('form').find('input[name=tel]').removeClass('error');
	 }
	 if(!validateEmail($(this).closest('form').find('input[name=email]').val())){
	 $(this).closest('form').find('input[name=email]').addClass('error');
	 return false;
	 } else {
	 $(this).closest('form').find('input[name=email]').removeClass('error');
	 }
	 toggleModal('waitResponse');
	 return false;
	 });*/

	// On body-repair, body-repair-light, vacancies page
	$('.consultants-list').on('click','.write-letter', function(){
		var consultName = $(this).closest('.col').find('.contact-info-title').text() ? $(this).closest('.col').find('.contact-info-title').text() : $(this).siblings('.name').text();
		var consultId = $(this).closest('.col').find('.contact-info-title').text() ? $(this).closest('.col').find('.contact-info-title').text() : $(this).siblings('.idname').text();
		$('#consultName').text(consultName);
		$('input[nameh=consultant]').val($.trim(consultName));
		$('input[nameh=consultantid]').val($.trim(consultId));
		toggleModal('writeToConsultant');
		return false;
	});

	$('.write-letter').on('click', function(){
		var consultName = $(this).closest('.col').find('.contact-info-title').text() ? $(this).closest('.col').find('.contact-info-title').text() : $(this).siblings('.name').text();
		var consultId = $(this).closest('.col').find('.contact-info-title').text() ? $(this).closest('.col').find('.contact-info-title').text() : $(this).siblings('.idname').text();
		$('#consultName').text(consultName);
		$('input[nameh=consultant]').val($.trim(consultName));
		$('input[nameh=consultantid]').val($.trim(consultId));
		toggleModal('writeToConsultant');
		return false;
	});

	$('#creditenquiry').on('click', function(e){
		e.preventDefault();

		toggleModal('writeToCredit');
		return false;
	});

	/*$('#writeToConsultant #sendMsg').on('click', function(){
	 toggleModal('writeToConsultant');
	 toggleModal('waitResponse2');
	 return false;
	 });*/

	// Close modal on click outside
	$('.popup').on('click', function(){toggleModal($(this).attr('id'));body.removeClass('body-locked');return false;});
	$('.popup-inner').on('click', function(e){e.stopPropagation()});


	$('.service .car-item').on('click', function(){
		toggleModal('chooseYearModel'+($(this).index()+1));
		return false;
	});


	/* $('#replyVacancy #sendMsg').on('click', function(){
	 toggleModal('replyVacancy');
	 return false;
	 });

	 $('#writeToCenter #sendMsg').on('click', function(){
	 toggleModal('writeToCenter');
	 toggleModal('waitResponse');
	 return false;
	 });*/

	// Close modal
	$('.close').click(function () {
		toggleModal($(this).parents('.popup').attr('id'));
		body.removeClass('body-locked');
	})

	// $('#formWriteUs').submit(function(e){e.preventDefault()});
	// End Modals (popups) behaviour


	// Buy car page: put selected car color into input
	function getSelectedColor () {
		var text = $(this).text() ? $(this).text() : $('#carColorSlPager a.active').text();
		$('input[nameh=car_color]').val(text);
		// console.log(text);
	};
	getSelectedColor();

	$('#carColorSlPager a').click(getSelectedColor);


	//  Resume input File workaround
	$('#resumeFile').change(function (e) {
		var arr = $(this).val().split('\\'),
			fileName = arr[arr.length-1];
		// console.log(fileName);
		$('.file-info').prepend('<div class="name"><p class="fontB">'+ fileName +'</p> <div class="remove"></div></div>');
		var fileType = fileName.split('.'),
			allowedTypes = ['doc', 'docx', 'pdf', 'txt'];
		function checkTypeAllowed (type, types) {
			for (var i = types.length - 1; i >= 0; i--) {
				if (types[i] == type) return true;
			};
			return false;
		}
		/*if(!checkTypeAllowed(fileType[fileType.length-1], allowedTypes)){
		 $('.file-info').append('<span class="fontB">Невірний тип файлу!</span>')
		 };*/


	});
	$('.file-info').on('click', '.remove', function(e){
		e.stopPropagation();
		// console.log('.remove clicked');
		$('.file-info').empty();
		$('#resumeFile').val('');
	})
	//  End Resume input File workaround

	// Questions page show/hide answer
	$('.questions-item .toggler').click(function(){
		$(this)
			.toggleClass('showing')
			.siblings('.text').slideToggle();
	});


});

// Custom sorting plugin
(function($) {
	$.fn.sorted = function(customOptions) {
		var options = {
			reversed: false,
			by: function(a) { return a.text(); }
		};
		$.extend(options, customOptions);
		$data = $(this);
		arr = $data.get();
		arr.sort(function(a, b) {
			var valA = options.by($(a));
			var valB = options.by($(b));
			if (options.reversed) {
				return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;
			} else {
				return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;
			}
		});
		return $(arr);
	};
})(jQuery);

// DOMContentLoaded
$(function() {

	// bind radiobuttons in the form
	var $filterType = $('#filterManagers input[name="consultants"]');

	// get the first collection
	var $consultants = $('#consultants');

	// clone applications to get a second collection
	var $data = $consultants.clone();

	// attempt to call Quicksand on every form change
	$filterType.change(function(e) {
		if ($('#filterManagers input[name="consultants"]:checked').val() == 'all') {
			var $filteredData = $data.find('li');
		} else {
			var $filteredData = $data.find('li[data-type=' + $('#filterManagers input[name="consultants"]:checked').val() + ']');
		}


		// console.log($('#filterManagers input[name="consultants"]:checked'));
		// console.log($filteredData);
		// call quicksand
		$consultants.quicksand($filteredData, {
			duration: 750,
			useScaling : true,
			easing: 'swing',
			atomic: true
		});
	});


});