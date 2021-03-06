/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Perso
	var coll = document.getElementsByClassName("collapse");
	var i;

	for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		if (this.classList.contains("active")) {
			this.innerHTML = "<li class=\"collapse\" style=\"cursor: pointer;\"><i class=\"fas fa-chevron-down\"></i>Projets</li>";
		} else {
			this.innerHTML = "<li class=\"collapse\" style=\"cursor: pointer;\"><i class=\"fas fa-chevron-right\"></i>Projets</li>";
		}


		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			$(".sous-liste").css("display", "none");
		} else {
			$(".sous-liste").css("display", "block");
		}
	});
	}

	/* CUSTOM */
	var totalWidth = 0;
	var totalElements = 0;

	$('.certifs').each(function(index) {
		totalWidth += parseInt($(this).width(), 10);
	});

	$('.certifications').each(function(index) {
		totalElements += 1;
	});

	var eachElement = totalWidth/totalElements;

	$(".certifications img").css("width", eachElement + "px");

	$(".leaf_hover").css({
		'width': ($(".leaf_img").width() + 'px')
	});

	var leaf_text_height = $(".leaf_text").height()
	var leaf_margin_top = ($(".leaf_img").height() - leaf_text_height)/2
	$(".leaf_text").css({
		'margin-top': (leaf_margin_top + 'px')
	});

	$(".discordBot_hover").css({
		'width': ($(".discordBot_img").width() + 'px')
	});

	var discordBot_text_height = $(".discordBot_text").height()
	var discordBot_margin_top = ($(".discordBot_img").height() - discordBot_text_height)/2
	$(".discordBot_text").css({
		'margin-top': (discordBot_margin_top + 'px')
	});

	window.onresize = function(event) {
		var totalWidth = 0;
		var totalElements = 0;

		$('.certifs').each(function(index) {
			totalWidth += parseInt($(this).width(), 10);
		});

		$('.certifications').each(function(index) {
			totalElements += 1;
		});

		var eachElement = totalWidth/totalElements;

		$(".certifications img").css("width", eachElement + "px")

		$(".leaf_hover").css({
			'width': ($(".leaf_img").width() + 'px')
		});

		var leaf_text_height = $(".leaf_text").height()
		var leaf_margin_top = ($(".leaf_img").height() - leaf_text_height)/2
		$(".leaf_text").css({
			'margin-top': (leaf_margin_top + 'px')
		});

		$(".discordBot_hover").css({
			'width': ($(".discordBot_img").width() + 'px')
		});

		var discordBot_text_height = $(".discordBot_text").height()
		var discordBot_margin_top = ($(".discordBot_img").height() - discordBot_text_height)/2
		$(".discordBot_text").css({
			'margin-top': (discordBot_margin_top + 'px')
		});
	};

	



})(jQuery);