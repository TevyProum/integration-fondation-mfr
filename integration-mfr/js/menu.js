jQuery(document).ready(function($) {
	$('#open-burger').click(function() {
        $('#slide').slideToggle(700);
        $('.burger').toggleClass('menu-open');
        $('body').toggleClass('body-overflow');
    });

    $('#slide a').click(function() {
        $('#slide').slideToggle(200);
        $('.burger').removeClass('menu-open');
        $('body').removeClass('body-overflow');
    });
});