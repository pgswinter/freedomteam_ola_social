$(window).ready(function(){
	$('.hero-area').fw_get_img();
	$('.cont-form').the_popup({
		click_item: $('.apply-job'),
		background_item: $('.set-bg')
	})
});