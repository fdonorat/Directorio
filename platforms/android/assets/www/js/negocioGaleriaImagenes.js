// JavaScript Document

$(document).on('pageshow', '#Gallery1', function(event) {
	event.preventDefault();
	setNegocioImagenes();
	;(function($) {
		$('.swipebox').swipebox({
		useCSS : true, // false will force the use of jQuery for animations
		useSVG : false, // false to force the use of png for buttons
		hideBarsOnMobile : false, // false will show the caption and navbar on mobile devices
		hideBarsDelay : 3000, // delay before hiding bars
		videoMaxWidth : 1140, // videos max width
		beforeOpen: function() {}, // called before opening
		afterClose: function() {} // called after closing	
		});
	})(jQuery);	
	return false;
});

function setNegocioImagenes() {
		var imagenes_lis = "";
		var i_rows;
		var i_columns = 3;
		if (i_imagenes % i_columns == 0) i_rows = i_imagenes / i_columns;
		else i_rows = (i_imagenes / i_columns) + 1;
		
		$.each(o_imagenes, function (idx, val) {
//			if(idx % i_columns == 0) imagenes_lis += '<div class="gallery-row">';
//			imagenes_lis += '<div class="gallery-item"><a href="' + url_raiz_webapp + "/" + val.urlImgOr + '" rel="external"><img src="' + url_raiz_webapp + "/" + val.urlImgOr + '" alt="' + val.urlImgOr.split('/')[3] + '" /></a></div>';
			imagenes_lis += '<a href="' + url_raiz_webapp + '/' + val.urlImgOr + '" class="swipebox" title="' + val.urlImgOr.split('/')[3] + '"><img src="' + url_raiz_webapp + '/' + val.urlImgOr + '" alt="' + val.urlImgOr.split('/')[3] + '"></a>';
			//if((idx + 1) % i_columns == 0 || idx + 1 == i_imagenes) imagenes_lis += '</div>';
		});
		$('#photos').append(imagenes_lis);
}


/*
$(document).on('pageshow', '#Gallery1', function(e) {
			setNegocioImagenes();
			$("#photos a", e.target).photoSwipe();
			return true;
		});
*/
/*
var	gallery,
		el,
		i,
		page,
		dots,
		slides;
		
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

$(document).on('pageshow', '#Gallery1', function(event) {
		setDotsNav();
		loadImages();
		
});*/
	/*
function loadImages() {
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

	var	gallery,
		el,
		i,
		page,
		dots = document.querySelectorAll('#nav li');
		slides = o_imagenes;
		
		//alert(slides.length);
	
	gallery = new SwipeView('#wrapper', { numberOfPages: slides.length });
	
	// Load initial data
	for (i=0; i<3; i++) {
		page = i==0 ? slides.length-1 : i-1;
		el = document.createElement('img');
		el.className = 'loading';
		
		//el.src = slides[page].img;
		//el.width = slides[page].width;
		//el.height = slides[page].height;
		
		el.src = url_raiz_webapp + "/" + slides[page].urlImgOr;
		el.width = 400;
		el.height = 400;
		el.onload = function () { this.className = ''; }
		gallery.masterPages[i].appendChild(el);
	
		el = document.createElement('span');
		//el.innerHTML = slides[page].desc;
		el.innerHTML = slides[page].urlImgOr.split('/')[3];
		gallery.masterPages[i].appendChild(el);
	}
	
	
	gallery.onFlip(function () {
		var el,
			upcoming,
			i;
	
		for (i=0; i<3; i++) {
			upcoming = gallery.masterPages[i].dataset.upcomingPageIndex;
	
			if (upcoming != gallery.masterPages[i].dataset.pageIndex) {
				el = gallery.masterPages[i].querySelector('img');
				el.className = 'loading';
				
				//el.src = slides[upcoming].img;
				//el.width = slides[upcoming].width;
				//el.height = slides[upcoming].height;
				
				el.src = url_raiz_webapp + "/" + slides[upcoming].urlImgOr;
				el.width = 400;
				el.height = 400;
				
				el = gallery.masterPages[i].querySelector('span');
				//el.innerHTML = slides[upcoming].desc;
				el.innerHTML = slides[upcoming].urlImgOr.split('/')[3];
			}
		}
		
		document.querySelector('#nav .selected').className = '';
		dots[gallery.pageIndex+1].className = 'selected';
	});
	
	gallery.onMoveOut(function () {
		gallery.masterPages[gallery.currentMasterPage].className = gallery.masterPages[gallery.currentMasterPage].className.replace(/(^|\s)swipeview-active(\s|$)/, '');
	});
	
	gallery.onMoveIn(function () {
		var className = gallery.masterPages[gallery.currentMasterPage].className;
		/(^|\s)swipeview-active(\s|$)/.test(className) || (gallery.masterPages[gallery.currentMasterPage].className = !className ? 'swipeview-active' : className + ' swipeview-active');
	});
	
}

function setNegocioImagenes() {
		var imagenes_lis = "";
		var i_rows;
		var i_columns = 3;
		if (i_imagenes % i_columns == 0) i_rows = i_imagenes / i_columns;
		else i_rows = (i_imagenes / i_columns) + 1;
		
		$.each(o_imagenes, function (idx, val) {
			if(idx % i_columns == 0) imagenes_lis += '<div class="gallery-row">';
			imagenes_lis += '<div class="gallery-item"><a href="' + url_raiz_webapp + "/" + val.urlImgOr + '" rel="external"><img src="' + url_raiz_webapp + "/" + val.urlImgOr + '" alt="' + val.urlImgOr.split('/')[3] + '" /></a></div>';
			if((idx + 1) % i_columns == 0 || idx + 1 == i_imagenes) imagenes_lis += '</div>';
		});
		$('#photos').append(imagenes_lis);
}
	
function setDotsNav() {
	var imagenes_lis = "";
	imagenes_lis += '<li id="prev" onclick="gallery.prev()">-</li>';
	for(var i=0; i<i_imagenes; i++) {
		if(i == 0) { imagenes_lis += '<li class="selected" onclick="gallery.goToPage(0)"></li>'; }
		else { imagenes_lis += '<li onclick="gallery.goToPage(' + i + ')"></li>'; }
	}
	imagenes_lis += '<li id="next" onclick="gallery.next()">+</li>';
	$('#nav').append(imagenes_lis);
}*/