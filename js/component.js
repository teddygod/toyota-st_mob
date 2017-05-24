/* клас "компонент" - хранит общие свойства и мeтоды */
function component() {
	this.elem = null; // хранит указатель (доступ) на основной хтмл-елемент
	this.find = function (sSelector){
		return this.elem.find(sSelector);
		}
	this.init = function (sSelector){
		if (!$(sSelector).length > 0) {
			alert("Element not found!!!");
			}
		else {
			this.elem = $(sSelector);
			}
		}
}
component.prototype.find = function (sSelector){
		return this.elem.find(sSelector);
		}
component.prototype.init = function (sSelector){
		if (!$(sSelector).length > 0) {
			alert("Element not found!!!");
			}
		else {
			this.elem = $(sSelector);
			}
		}
/* клас "компонент" - хранит общие свойства и мeтоды */

function Customajax () {
	// this.flagAjax = false;
}

Customajax.prototype.ajaxRequest = function (sUrl, iTimeout, oSettings, callback ) {
		// if (this.flagAjax === true) {return alert("busy!!!!")}
		// this.flagAjax = true;
		this.oAjax = $.ajax({
				 'url' 		: sUrl + '?t-' + new Date().getTime() //
				,'method'	: 'POST'
				,'dataType' : 'json'
				,'timeout'  : iTimeout //
				,'data' 	: oSettings
				, 'success' : function (oServerResponse) { //
					if (callback) {
						callback(oServerResponse);
					}
					// this.flagAjax = false;
					}
				, 'error'   : function (oAjax) {
					alert('Проблемы с расчетами, повторите попытку позже');
					}
				, 'complete': function (oAjax) { // Обьеденяет Succes и Error . Техническая логика
					if(oAjax.status == 200) { // 200 = OK
						if ( typeof(oAjax.responseJSON) == 'undefined'){
							console.error('could not parse server response as JSON object', oAjax.responseText);
							}
						else {
							//this.elem.addClass("b-calc_status_ok");
							// this.status('ok');
							}

						}
					else if (oAjax.statusText == "timeout") {
						console.error('AJAX request timed out');
						}
					else if (oAjax.status == 403) { // access forbidden
						console.error('access forbidden');
						}
					else {
						console.error("Unpredicated error", oAjax);
						}
				}
			});
	}
