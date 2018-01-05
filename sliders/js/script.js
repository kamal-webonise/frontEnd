
 $(document).ready(function() {
    //var count=0;
    function close_accordion_section() {
        
        $('.accordion .accordion-section-title').removeClass('active');   
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
        
    }
 	// (function hideAllAccordians(){
 	// 	$('.accordion-section-content').hide();
 	// 	$('#accordion-1').show();
 	// 	$('#accordion-1').addClass('active');
 	// 	$('.accordion-section-content').cycle('fade');

 	// })();
 	//var count=0;
 	$('.accordion-section-content').hide();
    $('.accordion-section-title').click(function(e) {
        e.preventDefault();
        var currentAttrValue = $(this).attr('href');
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {            
            close_accordion_section();
            $(this).addClass('active');
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
            $('.accordion-section-content').cycle('fade');  
        }
 
    });
});