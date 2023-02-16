jQuery(document).ready(function($) {
	$('#toggle').click(function() {
        $('#haWidget').slideToggle(2200);
        $('#haWidget').css('display','flex');
    });
});