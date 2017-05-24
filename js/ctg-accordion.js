"use strict";

function CtgAccordion (sSelector) {
	var a = this;

	a.main         = $(sSelector);
	a.items        = a.main.find('.ctg-accordion__item');
	a.itemTrigger  = a.main.find('.ctg-accordion__trigger');
	a.itemEvent    = null;
	// ------------
	a.openItem = function (event) {
		event.preventDefault();
		var  curTrigger  = $(this)
				,item        = curTrigger.closest(".ctg-accordion__item")
				,curIndex    = item.index()
				,curInner    = item.find('.ctg-accordion__inner')
				;
		if ( a.items.eq(curIndex).hasClass("ctg-accordion__item_permanent_open") ){
			return null;
		}
				if ( a.items.eq(curIndex).hasClass("ctg-accordion__item_open") ) {
					curInner.stop(true,true).slideToggle();
					a.items.eq(curIndex).removeClass("ctg-accordion__item_open");
				}
				else {
					curInner.stop(true,true).slideToggle();
					a.items.eq(curIndex).addClass("ctg-accordion__item_open");
				}


	};
	a.itemInit = function () {
		a.items.each(function (key, item) {
				var  jqItem = $(item)
						,itemInner = jqItem.children(".ctg-accordion__inner")
						;
				if ( jqItem.hasClass("ctg-accordion__item_open") ) {
					itemInner.css("display",'block');
				}
				else if ( jqItem.hasClass("ctg-accordion__item_permanent_open") ) {
					itemInner.css("display",'block');
				} else {
					itemInner.css("display",'none');
					itemInner.removeClass("ctg-accordion__item_open");
				}
		});
	};

	//-----------
	a.itemInit();
	a.itemTrigger.bind("click", a.openItem);
}
