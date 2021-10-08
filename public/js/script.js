$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('.navbar').addClass('blackto');
	} else {
		$('.navbar').removeClass('blackto');
	}
})
$(document).ready(function () {
	$('.navbar-nav>li>a:not(.dropdown-toggle)').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});
});
$(function () {
	$('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
	trigger: 'focus'
})