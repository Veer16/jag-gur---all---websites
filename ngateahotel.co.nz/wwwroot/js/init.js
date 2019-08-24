jQuery(document).ready(function(){
								
 	var nice = jQuery('html').niceScroll({
      scrollspeed: 100,
      mousescrollstep: 30,
      cursorwidth: 7,
      cursorborder: 0,
      cursorcolor: '#555555',
      cursorborderradius: 5,
      autohidemode: true,
      zindex: 9998,
      railalign:'right'
    });
	
	// MENU NAVIGATION
	
	jQuery('.menu li a[href*=#], #logo a[href*=#], .event-btn a[href*=#]').click(function() {
			
		var headerH = jQuery('.nav-bar').height() - 1;
	
        jQuery("html, body").animate({
            scrollTop: jQuery(jQuery(this.hash)).offset().top - headerH  + "px"
        }, {
            duration: 1000,
            easing: "easeInOutExpo"
        });

        return false;
    });
	// END MENU NAVIGATION
	
	// MOBILE NAVIGATION
	
	navigation = jQuery('#nav-desktop').children('ul');
options = '<option value="" selected>-Main Menu-</option>';

navigation.find('li').each(function() {
		
			link = jQuery(this).children('a');
			depth   = jQuery(this).parents('ul').length - 1;
			indent  = '';

		if( depth ) {
			while( depth > 0 ) {
				indent += ' - ';
				depth--;
			}
		}
options += '<option value="' + link.attr('href') + '">' + indent + ' ' + link.text() + '</option>';
		
	}).end().after('<select class="mobile-navigation">' + options + '</select>');

	jQuery('.mobile-navigation').on('change', function() {
		//window.location = jQuery(this).val();
		
		var headerH = jQuery('.nav-bar').height();
	
        jQuery("html, body").animate({
            scrollTop: jQuery(jQuery(this).val()).offset().top - headerH  + "px"
        }, {
            duration: 1000,
            easing: "easeInOutExpo"
        });

        return false;
	});
	
	// END MOBILE NAVIGATION

jQuery(".event-img a[data-rel^='prettyPhoto'], .menu-item-img a[data-rel^='prettyPhoto']").prettyPhoto({
						animation_speed: 'normal',
						autoplay_slideshow: false,
						slideshow: 3000
					});


jQuery('.menu-section').hide();
jQuery('h4.menu-title-section:first').addClass('active').next().show();

jQuery('h4.menu-title-section').click(function(){

  if( jQuery(this).next().is(':hidden') ) {
  jQuery('h4.menu-title-section').removeClass('active').next().slideUp(); 
jQuery(this).toggleClass('active').next().slideDown();
  } else {
   jQuery('h4.menu-title-section').removeClass('active').next().slideUp();
 }
  return false; 
 });


jQuery('.flexslider').flexslider({
			animation: "slide",
			slideshow: true,
			slideshowSpeed: 4000,
			animationSpeed: 600, 
			directionNav: true,
			controlNav: false,
			useCSS: false
									
					});


}); //end document

// GALLERY

jQuery(window).load(function() {
						  
	// cache container
var galleryItems = jQuery('#gallery-items');
// initialize isotope
galleryItems.isotope({
  itemSelector : '.gallery-item',
  layoutMode : 'fitRows'
});

// filter items when filter link is clicked
jQuery('#gallery-filter a').click(function(){
  var selector = jQuery(this).attr('data-filter');
  galleryItems.isotope({ filter: selector });
  return false;
});

jQuery(".gallery-img a[data-rel^='prettyPhoto']").prettyPhoto({
						animation_speed: 'normal',
						autoplay_slideshow: true,
						slideshow: 3000
					});


		}); //end window load

// END GALLERY
	