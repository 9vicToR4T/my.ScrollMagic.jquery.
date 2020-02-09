$(document).ready(function () {
    var controller = new ScrollMagic.Controller();


    //efect for second section
    var ourScene = new ScrollMagic.Scene({
            triggerElement: '#project01 img',
            duration: '75%',
            triggerHook: 0.8
        })
        .setClassToggle('#project01', 'fade-in')
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            colorStart: '#75C695'
        })
        .addTo(controller);

    
         //efect for first section
        var ourScene0 = new ScrollMagic.Scene({
            triggerElement: '#project img',
            duration: '75%',
            triggerHook: 0.8
        })
        .setClassToggle('#project', 'fade-in')
        .addIndicators({
            name: 'fade scene 2',
            colorTrigger: 'black',
            colorStart: '#75C695'
        })
        .addTo(controller);


    

    //efect for 3 section
    var ourScene2 = new ScrollMagic.Scene({
            triggerElement: '#project02 img',
            duration: '75%',
            triggerHook: 0.8
        })
        .setClassToggle('#project02', 'fade-in')
        .addIndicators({
            name: 'fade scene 2',
            colorTrigger: 'black',
            colorStart: '#75C695'
        })
        .addTo(controller);

    //efect for section 4
    var ourScene3 = new ScrollMagic.Scene({
            triggerElement: '#project03 img',
            duration: '75%',
            triggerHook: 0.8
        })
        .setClassToggle('#project03', 'fade-in')
        .addIndicators({
            name: 'fade scene 3',
            colorTrigger: 'black',
            colorStart: '#75C695'
        })
        .addTo(controller);

    //efect for section 5
    var ourScene4 = new ScrollMagic.Scene({
            triggerElement: '#project04 img',
            duration: '55%',
            triggerHook: 0.8
        })
        .setClassToggle('#project04', 'fade-in')
        .addIndicators({
            name: 'fade scene 4',
            colorTrigger: 'black',
            colorStart: '#75C695'
        })
        .addTo(controller);

    //efect for section 6

     var ourScene5 = new ScrollMagic.Scene({
             triggerElement: '#project05 img',
             duration: '75%',
             triggerHook: 0.8
         })
         .setClassToggle('#project05', 'fade-in')
         .addIndicators({
             name: 'fade scene 5',
             colorTrigger: 'black',
             colorStart: '#75C695'
         })
         .addTo(controller);


});