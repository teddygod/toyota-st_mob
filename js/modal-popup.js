"use strict";

// window.onbeforeunload = function(){
// 	return false;		
// 	}

// var m1 = new Modal('#main');

function Modal (sSelector) {
    var m = this;
    // 1. Data section
    m.main           = $(sSelector);
    m.backgroundMask = m.main.find('.background-mask');
    m.AllModalBox    = m.main.find('.modal-box');
    // 2. Logic section
    m.showModal = function (event) {
        event.preventDefault(); 
        var  CurrentModalDiv = $(this).attr('href')
            ,ScrollPosition  = $(window).scrollTop() + 100;
            ;
        m.backgroundMask.fadeIn(400, 
                        function () {
                            $(CurrentModalDiv).css('display', 'block')//.toggleClass('scale-in');
                                           .animate({
                                               // top : ScrollPosition + 'px'
                                               top : 20 + 'vh'
                                              ,opacity : 1
                                              //,transform : 'scale('1')'
                                            }
                                            , 300
                                            );
                            }
                        );
        }
    m.closeModal = function () {
        m.AllModalBox.animate({
                            opacity: 0
                            ,top: 0
                            }
                            ,400
                            ,function(){
                                $(this).css('display', 'none');
                                m.backgroundMask.fadeOut(400); 
                                // m.backgroundMask.fadeDown(400); 
                                }
             );
        }   
    // 3. Evevnts section
    m.main.find('.modal-show').bind('click', m.showModal);
    // $('.modal-show').bind('click', m.showModal);
    m.main.find('.modal-box__close-btn, .background-mask').bind('click', m.closeModal);
};
