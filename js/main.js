(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

  $(document).ready(function () {
		var url = window.location;
		$('ul.navigation a').filter(function() {
			return this.href == url;
		}).addClass('active');
  });



})(jQuery);
