// This causes things to fade in from the bottom as the page scrolls when .fade-in class is added


jQuery(document).ready(function () {

    const fade = document.querySelectorAll('.fade'); // Short fade used mainly for headers and main title
    const faders = document.querySelectorAll('.fade-in'); // Standard fade-in
    const fader1 = document.querySelectorAll('.fade-in-1'); // shortest delay fade
    const fader2 = document.querySelectorAll('.fade-in-2');
    const fader3 = document.querySelectorAll('.fade-in-3');
    const fader4 = document.querySelectorAll('.fade-in-4'); // longest delay fade

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px 50px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else{
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, 
    appearOptions);

    fade.forEach(fader => {
        appearOnScroll.observe(fader); // Short fade used mainly for headers and main title
    });
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader); // Standard fade-in used for text and images
    });

    fader1.forEach(fader => {
        appearOnScroll.observe(fader); // shortest delay fade
    });

    fader2.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    fader3.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    fader4.forEach(fader => {
        appearOnScroll.observe(fader); // longest delay fade
    });


});

// https://www.youtube.com/watch?v=huVJW23JHKQ&t=245s