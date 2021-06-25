// Elements 
const mainSlider = $('#main-slick')
const ProSlider = $('#pro-slick')
const ProtoSlider = $('#proto-slick')
const proProjects =  projects.ProProjects
const protoProjects = projects.ProtoProjects

// Creates Proejct cards and inserts into DOM
BuildProjects = () => {
    // Pro
    proProjects.forEach(p => {
        let card = `
            <div class="card">
                ${p.title}
                ${p.client}
            </div>
        `
        document.querySelector('#pro-slick').insertAdjacentHTML('beforeend', card)
    });
    // Prototypes
    protoProjects.forEach(p => {
        let card = `
            <div class="card">
                ${p.title}
                ${p.tags}
            </div>
        `
        document.querySelector('#proto-slick').insertAdjacentHTML('beforeend', card)
    });
}

//------ On Load Event ---------
window.onload = () => {
    // Init Main Vertical Slider
    mainSlider.slick({
        vertical: true,
        infinite: false,
        arrows:false,
        verticalSwiping:true,
    })
    // Append Projects to the DOM
    BuildProjects()
    // Init Project Sliders
    ProSlider.slick({
        infinite:true,
        arrows:true
    })
    ProtoSlider.slick({
        infinite:true
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

