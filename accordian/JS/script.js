jQuery(document).ready(function() {
	jQuery('.accordion-section-title').click(function(e) {
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			jQuery('.accordion .accordion-section-title').removeClass('active');
			jQuery('.accordion ' + currentAttrValue).slideToggle(300).addClass('open');
		}else {
			jQuery('.accordion .accordion-section-title').removeClass('active');
			jQuery(this).addClass('active');
			jQuery('.accordion ' + currentAttrValue).slideToggle(300).addClass('open'); 
		}

	});
});