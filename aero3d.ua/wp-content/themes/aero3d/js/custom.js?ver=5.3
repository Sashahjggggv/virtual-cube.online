jQuery(function ($) {

	"use strict";

	//popup
	let popupTop = 0;
	function removeScroll() {
		popupTop = $(window).scrollTop();
		$('html').css({
			 "top": -$(window).scrollTop(),
			 "width": "100%"
			}).addClass("overflow-hidden");
	}
	function openPopup(popup) {
		$('.popup-content').removeClass('active');
		$(popup + ', .popup-wrapper').addClass('active');
		removeScroll();
	};


	document.addEventListener( 'wpcf7mailsent', function( event ) {
			openPopup('.popup-content[data-rel="1"]');
			jQuery('.wpcf7-form').trigger('reset');
	}, false );


	function setCookie(cname, cvalue, exdays) {
		const d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		let expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for(let i = 0; i <ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	if(getCookie('hide_cookie') != "") {
		$('.cookies-informer').remove();
	} else {
		setCookie('hide_cookie', 'yes');
	}

	$('.decision-hero.open-popup, .project-hero.open-popup').click(function(){
		let rel = $(this).data('rel');
		let markup = $(this).data('markup');
		$('.popup-content[data-rel="'+rel+'"] .popup-inner').html(markup);
	});

});
