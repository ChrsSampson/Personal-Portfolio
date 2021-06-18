const mainSlider = $('#main-slick')




//------ On Load Event ---------
window.onload =() => {
    // Init Main Vertical Slider
    mainSlider.slick({
        vertical: true,
        infinite: false,
        arrows:false,
        verticalSwiping:true,
    })
}

// Hook into slick with on scroll event
mainSlider.on('wheel', (function(e){
    e.preventDefault()
    if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
      } else {
        $(this).slick('slickNext');
    }
}));

// scroll event on the "scroll" button
document.getElementById('scroll').onclick = () => {
        mainSlider.slick('slickNext')
}

