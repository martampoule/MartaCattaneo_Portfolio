// external js: flickity.pkgd.js

var $carousel = $('.carousel').flickity({
    imagesLoaded: true,
    percentPosition: false,
    pageDots: false,
    prevNextButtons: true,
    initialIndex: 1,
    wrapAround: true,
    freeScroll: true, 
    
  });
  
  var $imgs = $carousel.find('.carousel-cell img');
  // get transform property
  var docStyle = document.documentElement.style;
  var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';
  // get Flickity instance
  var flkty = $carousel.data('flickity');
  
  $carousel.on( 'scroll.flickity', function() {
    flkty.slides.forEach( function( slide, i ) {
      var img = $imgs[i];
      var x = ( slide.target + flkty.x ) * -1/400;
      img.style[ transformProp ] = 'translateX(' + x + 'px)';
    });
  });
  
  $carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
    // dismiss if cell was not clicked
    if ( !cellElement ) {
      return;
    }
    // change cell background with .is-clicked
    $carousel.find('.is-clicked').removeClass('is-clicked');
    $( cellElement ).addClass('is-clicked');
  });
  
  
  
  
  
  